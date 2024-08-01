// @ts-check
import { constants } from '@fixtures/constants/constants.js'
import { expect, test } from '@fixtures/fixtureUI.js'
import fs from 'fs'

test.describe.serial(`Parabank "Create Account" module:`, { tag: '@account' }, () => {
  let defaultAccountNumber = null
  let newAccountNumber = null
  test.beforeEach(async ({ homePage, userMenuComponent }) => {
    const user = JSON.parse(fs.readFileSync('./fixtures/test_data/user.json', 'utf8'))
    await homePage.loginUser(user.username, user.password)
    await expect(await userMenuComponent.getLoggedInMsg(user.firstname, user.lastname)).toBeVisible()
  })
  test(`create new account`, async ({ userMenuComponent, accountsCreationComponent, accountsOverviewComponent, accountDetailsComponent }) => {
    await test.step(`get existing account number`, async () => {
      await userMenuComponent.accountsOverviewLink.click()
      await expect.soft(accountsOverviewComponent.accountsOverviewTitle).toBeVisible()
      defaultAccountNumber = await accountsOverviewComponent.defaultAccountNumberCell.innerText()
    })
    await test.step(`navigate to "Open New Account" module and open new account`, async () => {
      await userMenuComponent.openNewAccountLink.click()
      await expect.soft(accountsCreationComponent.openAccountTitle).toBeVisible()
      await accountsCreationComponent.createNewAccount(constants.checkingAccountType, defaultAccountNumber)
      await expect.soft(accountsCreationComponent.openSuccessMsg).toBeVisible()
      await expect.soft(accountsCreationComponent.openAccountSuccessTitle).toBeVisible()
      newAccountNumber = await accountsCreationComponent.newAccountNumber.innerText()
      await accountsCreationComponent.newAccountNumber.click()
      await expect.soft(accountDetailsComponent.accountDetailsTitle).toBeVisible()
      await expect.soft(accountDetailsComponent.accountType).toHaveText(constants.checkingAccountType)
      await expect
        .soft(await accountDetailsComponent.getTransferedAmount(constants.transferTransaction, constants.defaultTransferAmount))
        .toBeVisible()
    })
    await test.step(`verify new account is displayed in accounts overview and has default balance`, async () => {
      await userMenuComponent.accountsOverviewLink.click()
      await expect.soft(accountsOverviewComponent.accountsOverviewTitle).toBeVisible()
      await expect.soft(await accountsOverviewComponent.getAccountRecord(newAccountNumber)).toBeVisible()
      expect.soft(await accountsOverviewComponent.getAccountBalance(newAccountNumber)).toBe(constants.defaultTransferAmount)
    })
    await test.step(`check the default account balance is updated`, async () => {
      expect.soft(await accountsOverviewComponent.getAccountBalance(defaultAccountNumber)).toMatch(constants.defaultAccountAfterTransferBalance)
    })
  })
  test(`transfer an amount between accounts`, async ({ userMenuComponent, transferFundsComponent, accountsOverviewComponent }) => {
    await test.step(`navigate to "Transfer Funds" module and transfer funds from new to default account`, async () => {
      await userMenuComponent.transferFundsLink.click()
      await expect.soft(transferFundsComponent.transferFundsTitle).toBeVisible()
      await transferFundsComponent.transferFunds(constants.defaultTransferAmount.replace('$', ''), newAccountNumber, defaultAccountNumber)
      await expect.soft(transferFundsComponent.transferSuccessTitle).toBeVisible()
      await expect
        .soft(await transferFundsComponent.getSuccessTransferMessage(constants.defaultTransferAmount, newAccountNumber, defaultAccountNumber))
        .toBeVisible()
    })
    await test.step(`check the default account and new account balance is updated`, async () => {
      await userMenuComponent.accountsOverviewLink.click()
      expect.soft(await accountsOverviewComponent.getAccountBalance(defaultAccountNumber)).toMatch(constants.defaultAccountBalance)
      expect.soft(await accountsOverviewComponent.getAccountBalance(newAccountNumber)).toBe(constants.emptyAccountAmount)
    })
  })
  test.afterEach(async ({ homePage, userMenuComponent }) => {
    await test.step(`logout user and verify user logged out`, async () => {
      await userMenuComponent.logoutLink.click()
      await expect(homePage.loginBtn).toBeVisible()
    })
  })
})
