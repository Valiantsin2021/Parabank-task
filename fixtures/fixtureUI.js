import * as components from '@pages/index.js'
import * as base from '@playwright/test'
/**
 * Fixture file
 * @module Playwright_fixture fixture file to initiate POM instances
 */
/**
 * @typedef {object} ComponentsTestArgs - HomePage test args
 * @property {components.HomePage} homePage     - HomePage
 * @property {components.RegisterComponent} registerComponent     - RegisterComponent
 * @property {components.UpdateContactComponent} updateContactComponent     - UpdateContactComponent
 * @property {components.AccountsOverviewComponent} accountsOverviewComponent     - AccountsOverviewComponent
 * @property {components.UserMenuComponent} userMenuComponent     - UserMenuComponent
 * @property {components.AccountsCreationComponent} accountsCreationComponent     - AccountsCreationComponent
 * @property {components.AccountDetailsComponent} accountDetailsComponent     - AccountDetailsComponent
 * @property {components.TransferFundsComponent} transferFundsComponent     - TransferFundsComponent
 * @property {components.BillPayComponent} billPayComponent     - BillPayComponent
 * @property {components.FindTransactionsComponent} findTransactionsComponent     - FindTransactionsComponent
 * @property {components.TransactionDetailsComponent} transactionDetailsComponent     - TransactionDetailsComponent
 * @property {components.RequestLoanComponent} requestLoanComponent     - RequestLoanComponent
 */

/** @type {base.Fixtures<ComponentsTestArgs, {}, base.PlaywrightTestArgs, base.PlaywrightWorkerArgs>} */
const extension = {
  registerComponent: async ({ page }, use) => {
    const registerComponent = new components.RegisterComponent(page)
    await use(registerComponent)
  },
  userMenuComponent: async ({ page }, use) => {
    const userMenuComponent = new components.UserMenuComponent(page)
    await use(userMenuComponent)
  },
  updateContactComponent: async ({ page }, use) => {
    const updateContactComponent = new components.UpdateContactComponent(page)
    await use(updateContactComponent)
  },
  accountsOverviewComponent: async ({ page }, use) => {
    const accountsOverviewComponent = new components.AccountsOverviewComponent(page)
    await use(accountsOverviewComponent)
  },
  accountsCreationComponent: async ({ page }, use) => {
    const accountsCreationComponent = new components.AccountsCreationComponent(page)
    await use(accountsCreationComponent)
  },
  accountDetailsComponent: async ({ page }, use) => {
    const accountDetailsComponent = new components.AccountDetailsComponent(page)
    await use(accountDetailsComponent)
  },
  transferFundsComponent: async ({ page }, use) => {
    const transferFundsComponent = new components.TransferFundsComponent(page)
    await use(transferFundsComponent)
  },
  billPayComponent: async ({ page }, use) => {
    const billPayComponent = new components.BillPayComponent(page)
    await use(billPayComponent)
  },
  findTransactionsComponent: async ({ page }, use) => {
    const findTransactionsComponent = new components.FindTransactionsComponent(page)
    await use(findTransactionsComponent)
  },
  transactionDetailsComponent: async ({ page }, use) => {
    const transactionDetailsComponent = new components.TransactionDetailsComponent(page)
    await use(transactionDetailsComponent)
  },
  requestLoanComponent: async ({ page }, use) => {
    const requestLoanComponent = new components.RequestLoanComponent(page)
    await use(requestLoanComponent)
  },
  homePage: async ({ page }, use) => {
    const homePage = new components.HomePage(page)
    homePage.page.on('response', response => {
      base.expect
        .soft(response.status(), `${response.request().method()} request to ${response.request().url()} status is OK`)
        .not.toBeGreaterThanOrEqual(400)
    })
    await homePage.openPage()
    await base.expect.soft(homePage.logoTitle).toBeVisible()
    await use(homePage)
  }
}
export const test = base.test.extend(extension)
export { expect } from '@playwright/test'
