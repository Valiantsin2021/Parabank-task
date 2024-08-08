// @ts-check
import { constants } from '@fixtures/constants/constants'
import { expect, test } from '@fixtures/fixtureUI.js'
import fs from 'fs'

test.describe(`Parabank "Loan" module:`, { tag: '@user' }, () => {
  const user = JSON.parse(fs.readFileSync('./fixtures/test_data/user.json', 'utf8'))
  let defaultAccountNumber = null
  test.beforeEach(async ({ homePage, userMenuComponent, accountsOverviewComponent, requestLoanComponent }) => {
    await homePage.loginUser(user.username, user.password)
    await expect(await userMenuComponent.getLoggedInMsg(user.firstname, user.lastname)).toBeVisible()
    await userMenuComponent.accountsOverviewLink.click()
    await expect.soft(accountsOverviewComponent.accountsOverviewTitle).toBeVisible()
    defaultAccountNumber = await accountsOverviewComponent.defaultAccountNumberCell.innerText()
    await userMenuComponent.requestLoanLink.click()
    await expect.soft(requestLoanComponent.requestLoanTitle).toBeVisible()
  })
  test(`request a Loan with a 'Down' payment lower or equal to the available balance result in ${constants.loanApprovedStatusMsg} status`, async ({
    accountDetailsComponent,
    requestLoanComponent
  }) => {
    requestLoanComponent.page.on('response', async response => {
      if (response.request().url().includes('https://parabank.parasoft.com/parabank/services_proxy/bank/requestLoan')) {
        expect(response.status()).toBe(200)
        const body = await response.json()
        expect(body['approved']).toBe(true)
        expect(body['loanProviderName']).toBe(constants.loanProvider)
      }
    })
    await requestLoanComponent.applyForLoan(constants.validLoanAmount, constants.validDownAmount, defaultAccountNumber)
    await expect.soft(requestLoanComponent.loanStatus).toHaveText(constants.loanApprovedStatusMsg)
    await expect.soft(requestLoanComponent.loanRequestApproved).toBeVisible()
    await expect.soft(requestLoanComponent.loanRequestApproved).toContainText(constants.loanApprovedSuccessMsg)
    await expect.soft(requestLoanComponent.loanAccountId).toBeVisible()
    await requestLoanComponent.loanAccountId.click()
    await expect.soft(accountDetailsComponent.accountDetailsTitle).toBeVisible()
    await expect.soft(accountDetailsComponent.accountType).toHaveText(constants.loanAccountType)
    await expect.soft(accountDetailsComponent.balance).toHaveText(`$${constants.validLoanAmount}.00`)
  })
  test(`request a Loan with a 'Down' payment higher to the available balance result in ${constants.loanDeniedStatusMsg} status`, async ({
    requestLoanComponent
  }) => {
    requestLoanComponent.page.on('response', async response => {
      if (response.request().url().includes('https://parabank.parasoft.com/parabank/services_proxy/bank/requestLoan')) {
        expect(response.status()).toBe(200)
        const body = await response.json()
        expect(body['approved']).toBe(false)
        expect(body['loanProviderName']).toBe(constants.loanProvider)
        expect(body['message']).toBe(constants.loanDeniedDownPaymentAPIMsg)
        expect(body['accountId']).toBe(null)
      }
    })
    await test.step(`navigate to "Loan" module and apply for a loan`, async () => {
      await requestLoanComponent.applyForLoan(constants.validLoanAmount, constants.invalidDownAmount, defaultAccountNumber)
      await expect.soft(requestLoanComponent.loanStatus).toHaveText(constants.loanDeniedStatusMsg)
      await expect.soft(requestLoanComponent.loanRequestDeniedMsg).toBeVisible()
      await expect.soft(requestLoanComponent.loanRequestDeniedMsg).toHaveText(constants.loanDeniedDownPaymentMsg)
    })
  })
  test.afterEach(async ({ homePage, userMenuComponent }) => {
    await test.step(`logout user and verify user logged out`, async () => {
      await userMenuComponent.logoutLink.click()
      await expect(homePage.loginBtn).toBeVisible()
    })
  })
})
