import * as components from '@pages/index.js'
import * as base from '@playwright/test'
/**
 * Fixture file
 * @module Playwright_fixture fixture file to initiate POM instances
 */
/**
 * @typedef {object} RegisterComponentTestArgs - RegisterComponent test args
 * @property {components.RegisterComponent} registerComponent     - RegisterComponent
 */
/**
 * @typedef {object} UpdateContactComponentTestArgs - UpdateContactComponent test args
 * @property {components.UpdateContactComponent} updateContactComponent     - UpdateContactComponent
 */
/**
 * @typedef {object} AccountsOverviewComponentTestArgs - AccountsOverviewComponent test args
 * @property {components.AccountsOverviewComponent} accountsOverviewComponent     - AccountsOverviewComponent
 */
/**
 * @typedef {object} UserMenuComponentTestArgs - UserMenuComponent test args
 * @property {components.UserMenuComponent} userMenuComponent     - UserMenuComponent
 */
/**
 * @typedef {object} AccountsCreationComponentTestArgs - AccountsCreationComponent test args
 * @property {components.AccountsCreationComponent} accountsCreationComponent     - AccountsCreationComponent
 */
/**
 * @typedef {object} AccountDetailsComponentTestArgs - AccountDetailsComponent test args
 * @property {components.AccountDetailsComponent} accountDetailsComponent     - AccountDetailsComponent
 */
/**
 * @typedef {object} TransferFundsComponentTestArgs - TransferFundsComponent test args
 * @property {components.TransferFundsComponent} transferFundsComponent     - TransferFundsComponent
 */
/**
 * @typedef {object} BillPayComponentTestArgs - BillPayComponent test args
 * @property {components.BillPayComponent} billPayComponent     - BillPayComponent
 */
/**
 * @typedef {object} FindTransactionsComponentTestArgs - FindTransactionsComponent test args
 * @property {components.FindTransactionsComponent} findTransactionsComponent     - FindTransactionsComponent
 */
/**
 * @typedef {object} TransactionDetailsComponentTestArgs - TransactionDetailsComponent test args
 * @property {components.TransactionDetailsComponent} transactionDetailsComponent     - TransactionDetailsComponent
 */
/**
 * @typedef {object} RequestLoanComponentTestArgs - RequestLoanComponent test args
 * @property {components.RequestLoanComponent} requestLoanComponent     - RequestLoanComponent
 */
/**
 * @typedef {object} HomePageTestArgs - HomePage test args
 * @property {components.HomePage} homePage     - HomePage
 */
/** @type {base.Fixtures<RegisterComponentTestArgs & RequestLoanComponentTestArgs & TransactionDetailsComponentTestArgs & FindTransactionsComponentTestArgs & BillPayComponentTestArgs & TransferFundsComponentTestArgs & AccountDetailsComponentTestArgs & AccountsCreationComponentTestArgs & HomePageTestArgs & UpdateContactComponentTestArgs & UserMenuComponentTestArgs & AccountsOverviewComponentTestArgs, {}, base.PlaywrightTestArgs, base.PlaywrightWorkerArgs>} */
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
