// @ts-check
import { expect, test } from '@fixtures/fixtureUI.js'
import fs from 'fs'

test.describe(`Parabank "Login" module:`, { tag: '@visual' }, () => {
  test(`login/Logout happy path flow`, async ({ homePage, userMenuComponent, accountsOverviewComponent }) => {
    await test.step(`login user and verify welcome message`, async () => {
      const user = JSON.parse(fs.readFileSync('./fixtures/test_data/user.json', 'utf8'))
      await homePage.loginUser(user.username, user.password)
      await expect(await userMenuComponent.getLoggedInMsg(user.firstname, user.lastname)).toBeVisible()
      await expect(homePage.leftPanel).toHaveScreenshot('user_login_happy_path.png', { mask: [homePage.welcomeMessage] })
    })
    // await test.step(`navigate to "Accounts Overview" module and  verify the default account exists`, async () => {
    //   await userMenuComponent.accountsOverviewLink.click()
    //   await expect.soft(accountsOverviewComponent.accountsOverviewTitle).toBeVisible()
    //   await expect.soft(accountsOverviewComponent.defaultAccountNumberCell).toBeVisible()
    //   await expect.soft(accountsOverviewComponent.defaultBalanceAmountCell).toBeVisible()
    //   await expect.soft(accountsOverviewComponent.defaultBalanceAmountCell).toHaveText(constants.defaultAccountBalance)
    //   await expect.soft(accountsOverviewComponent.defaultAvailableAmountCell).toBeVisible()
    //   await expect.soft(accountsOverviewComponent.defaultAvailableAmountCell).toHaveText(constants.defaultAccountBalance)
    //   await expect.soft(accountsOverviewComponent.totalAmountCell).toBeVisible()
    //   await expect.soft(accountsOverviewComponent.totalAmountCell).toHaveText(constants.defaultAccountBalance)
    // })
    // await test.step(`logout user and verify user logged out`, async () => {
    //   await userMenuComponent.logoutLink.click()
    //   await expect(homePage.loginBtn).toBeVisible()
    // })
  })
})
