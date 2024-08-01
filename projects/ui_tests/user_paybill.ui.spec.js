// @ts-nocheck
import { constants } from '@fixtures/constants/constants'
import { expect, test } from '@fixtures/fixtureUI.js'
import { CSVHandler } from '@utils/data_processors/CSVHandler.js'
import { UserBuilder } from '@utils/data_processors/DataBuilder.js'
import fs from 'fs'
const billPayPairwisePath = './fixtures/test_data/bill_pay_pairwise.csv'
import { allure } from 'allure-playwright'

test.describe(`Parabank "Bill Pay" module:`, { tag: '@account' }, () => {
  const user = JSON.parse(fs.readFileSync('./fixtures/test_data/user.json', 'utf8'))
  let defaultAccountNumber = null
  let payee = null
  test.beforeEach(async ({ homePage, userMenuComponent, accountsOverviewComponent }) => {
    await homePage.loginUser(user.username, user.password)
    await expect(await userMenuComponent.getLoggedInMsg(user.firstname, user.lastname)).toBeVisible()
    await userMenuComponent.accountsOverviewLink.click()
    await expect.soft(accountsOverviewComponent.accountsOverviewTitle).toBeVisible()
    defaultAccountNumber = await accountsOverviewComponent.defaultAccountNumberCell.innerText()
    payee = new UserBuilder().setDefaults().build()
    payee.name = payee.firstname + ' ' + payee.lastname
    payee.account = defaultAccountNumber
    payee.verifyAccount = defaultAccountNumber
    payee.amount = constants.defaultTransferAmount.replace('$', '')
  })
  test(`pay bill happy path flow`, async ({
    userMenuComponent,
    billPayComponent,
    accountsOverviewComponent,
    accountDetailsComponent,
    transactionDetailsComponent,
    findTransactionsComponent
  }) => {
    let transactionId = null
    let transactionDate = null
    let transactionAmount = null
    await test.step(`navigate to "Bill Pay" module and pay the bill`, async () => {
      await userMenuComponent.billPayLink.click()
      await expect.soft(billPayComponent.billPayTitle).toBeVisible()
      await billPayComponent.payBill(payee)
      await expect.soft(await billPayComponent.getSuccessBillPayMessage(payee.firstname, payee.amount, payee.account)).toBeVisible()
    })
    await test.step(`check the default account balance us updated`, async () => {
      await userMenuComponent.accountsOverviewLink.click()
      expect.soft(await accountsOverviewComponent.getAccountBalance(defaultAccountNumber)).toMatch(constants.defaultAccountAfterTransferBalance)
    })
    await test.step(`navigate to "Transaction Details" module and get the transaction data`, async () => {
      await accountsOverviewComponent.defaultAccountNumberCell.click()
      const transactionLink = await accountDetailsComponent.getTransactionByName(`${constants.billPaymentTransaction} ${payee.firstname}`)
      await transactionLink.click()
      await expect.soft(transactionDetailsComponent.transactionDetailsTitle).toBeVisible()
      transactionId = await transactionDetailsComponent.transactionId.innerText()
      transactionDate = await transactionDetailsComponent.transactionDate.innerText()
      transactionAmount = await transactionDetailsComponent.transactionAmount.innerText()
    })
    await test.step(`navigate to "Find Transactions" module find the transaction by Date`, async () => {
      await userMenuComponent.findTransactionsLink.click()
      await findTransactionsComponent.getTransactionByDate(transactionDate)
      await expect.soft(findTransactionsComponent.findTransactionsSuccessTitle).toBeVisible()
      await expect.soft(await accountDetailsComponent.getTransactionByName(`${constants.billPaymentTransaction} ${payee.firstname}`)).toBeVisible()
    })
    await test.step(`navigate to "Find Transactions" module find the transaction by Amount`, async () => {
      await userMenuComponent.findTransactionsLink.click()
      await findTransactionsComponent.getTransactionByAmount(transactionAmount.replace('$', ''))
      await expect.soft(findTransactionsComponent.findTransactionsSuccessTitle).toBeVisible()
      await expect.soft(await accountDetailsComponent.getTransactionByName(`${constants.billPaymentTransaction} ${payee.firstname}`)).toBeVisible()
    })
    await test.step(`navigate to "Find Transactions" module find the transaction by ID`, async () => {
      await userMenuComponent.findTransactionsLink.click()
      await findTransactionsComponent.getTransactionById(transactionId)
      await expect.soft(findTransactionsComponent.findTransactionsSuccessTitle).toBeVisible()
      await expect.soft(await accountDetailsComponent.getTransactionByName(`${constants.billPaymentTransaction} ${payee.firstname}`)).toBeVisible()
    })
  })
  test(`pay bill with missing fields and verify error messages`, async ({ userMenuComponent, billPayComponent }) => {
    await userMenuComponent.billPayLink.click()
    const pairwiseTable = await CSVHandler.parseCsvFile(billPayPairwisePath)
    for (let i = 0; i < pairwiseTable.length; i++) {
      await test.step(`Try to pay bill with missing fields: test data row ${i + 1} - ${JSON.stringify(Object.entries(pairwiseTable[i]))}`, async () => {
        await userMenuComponent.billPayLink.click()
        for (let input of Object.keys(pairwiseTable[i])) {
          if (pairwiseTable[i][input] === 'TRUE') {
            await billPayComponent[`${input}Input`].fill(payee[`${input}`])
          }
        }
        await billPayComponent.sendPaymentBtn.click()
        for (let input of Object.keys(pairwiseTable[i])) {
          if (pairwiseTable[i][input] === 'FALSE') {
            await expect.soft(billPayComponent[`${input}ErrorMsg`]).toBeVisible()
            await expect.soft(await billPayComponent.getSuccessBillPayMessage(payee.name, payee.amount, payee.account)).toBeHidden()
          }
        }
      })
    }
  })
  test(`"Find Transactions" module missing fields values`, async ({ userMenuComponent, findTransactionsComponent }) => {
    await test.step(`verify error message for missing transaction ID`, async () => {
      await userMenuComponent.findTransactionsLink.click()
      await findTransactionsComponent.findByIdBtn.click()
      await expect.soft(findTransactionsComponent.transactionIdErrorMsg).toBeVisible()
    })
    await test.step(`verify error message for missing transaction date`, async () => {
      await findTransactionsComponent.findByDateBtn.click()
      await expect.soft(findTransactionsComponent.transactionDateErrorMsg).toBeVisible()
    })
    await test.step(`verify error message for missing date range`, async () => {
      await findTransactionsComponent.findByDateRangeBtn.click()
      await expect.soft(findTransactionsComponent.dateRangeErrorMsg).toBeVisible()
    })
    await test.step(`verify error message for missing amount`, async () => {
      await findTransactionsComponent.findByAmountBtn.click()
      await expect.soft(findTransactionsComponent.amountErrorMsg).toBeVisible()
    })
  })
  test.afterEach(async ({ homePage, userMenuComponent }) => {
    await test.step(`logout user and verify user logged out`, async () => {
      await userMenuComponent.logoutLink.click()
      await expect(homePage.loginBtn).toBeVisible()
    })
  })
})
