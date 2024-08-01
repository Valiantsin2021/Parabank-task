import { AccountDetailsComponent } from '@pages/components/AccountDetailsComponent.js'
import { AccountsCreationComponent } from '@pages/components/AccountsCreationComponent.js'
import { AccountsOverviewComponent } from '@pages/components/AccountsOverviewComponent.js'
import { BillPayComponent } from '@pages/components/BillPayComponent.js'
import { FindTransactionsComponent } from '@pages/components/FindTransactionsComponent.js'
import { RegisterComponent } from '@pages/components/RegisterComponent.js'
import { TransactionDetailsComponent } from '@pages/components/TransactionDetailsComponent.js'
import { TransferFundsComponent } from '@pages/components/TransferFundsComponent.js'
import { UpdateContactComponent } from '@pages/components/UpdateContactComponent.js'
import { UserMenuComponent } from '@pages/components/UserMenuComponent.js'
import { RequestLoanComponent } from '@pages/components/RequestLoanComponent.js'
import { HomePage } from '@pages/HomePage.js'
import * as base from '@playwright/test'
/**
 * Fixture file
 * @module Playwright_fixture fixture file to initiate POM instances
 */
/**
 * @typedef {object} RegisterComponentTestArgs - RegisterComponent test args
 * @property {RegisterComponent} registerComponent     - RegisterComponent
 */
/**
 * @typedef {object} UpdateContactComponentTestArgs - UpdateContactComponent test args
 * @property {UpdateContactComponent} updateContactComponent     - UpdateContactComponent
 */
/**
 * @typedef {object} AccountsOverviewComponentTestArgs - AccountsOverviewComponent test args
 * @property {AccountsOverviewComponent} accountsOverviewComponent     - AccountsOverviewComponent
 */
/**
 * @typedef {object} UserMenuComponentTestArgs - UserMenuComponent test args
 * @property {UserMenuComponent} userMenuComponent     - UserMenuComponent
 */
/**
 * @typedef {object} AccountsCreationComponentTestArgs - AccountsCreationComponent test args
 * @property {AccountsCreationComponent} accountsCreationComponent     - AccountsCreationComponent
 */
/**
 * @typedef {object} AccountDetailsComponentTestArgs - AccountDetailsComponent test args
 * @property {AccountDetailsComponent} accountDetailsComponent     - AccountDetailsComponent
 */
/**
 * @typedef {object} TransferFundsComponentTestArgs - TransferFundsComponent test args
 * @property {TransferFundsComponent} transferFundsComponent     - TransferFundsComponent
 */
/**
 * @typedef {object} BillPayComponentTestArgs - BillPayComponent test args
 * @property {BillPayComponent} billPayComponent     - BillPayComponent
 */
/**
 * @typedef {object} FindTransactionsComponentTestArgs - FindTransactionsComponent test args
 * @property {FindTransactionsComponent} findTransactionsComponent     - FindTransactionsComponent
 */
/**
 * @typedef {object} TransactionDetailsComponentTestArgs - TransactionDetailsComponent test args
 * @property {TransactionDetailsComponent} transactionDetailsComponent     - TransactionDetailsComponent
 */
/**
 * @typedef {object} RequestLoanComponentTestArgs - RequestLoanComponent test args
 * @property {RequestLoanComponent} requestLoanComponent     - RequestLoanComponent
 */
/**
 * @typedef {object} HomePageTestArgs - HomePage test args
 * @property {HomePage} homePage     - HomePage
 */
/** @type {base.Fixtures<RegisterComponentTestArgs & RequestLoanComponentTestArgs & TransactionDetailsComponentTestArgs & FindTransactionsComponentTestArgs & BillPayComponentTestArgs & TransferFundsComponentTestArgs & AccountDetailsComponentTestArgs & AccountsCreationComponentTestArgs & HomePageTestArgs & UpdateContactComponentTestArgs & UserMenuComponentTestArgs & AccountsOverviewComponentTestArgs, {}, base.PlaywrightTestArgs, base.PlaywrightWorkerArgs>} */
const extension = {
  registerComponent: async ({ page }, use) => {
    const registerComponent = new RegisterComponent(page)
    await use(registerComponent)
  },
  userMenuComponent: async ({ page }, use) => {
    const userMenuComponent = new UserMenuComponent(page)
    await use(userMenuComponent)
  },
  updateContactComponent: async ({ page }, use) => {
    const updateContactComponent = new UpdateContactComponent(page)
    await use(updateContactComponent)
  },
  accountsOverviewComponent: async ({ page }, use) => {
    const accountsOverviewComponent = new AccountsOverviewComponent(page)
    await use(accountsOverviewComponent)
  },
  accountsCreationComponent: async ({ page }, use) => {
    const accountsCreationComponent = new AccountsCreationComponent(page)
    await use(accountsCreationComponent)
  },
  accountDetailsComponent: async ({ page }, use) => {
    const accountDetailsComponent = new AccountDetailsComponent(page)
    await use(accountDetailsComponent)
  },
  transferFundsComponent: async ({ page }, use) => {
    const transferFundsComponent = new TransferFundsComponent(page)
    await use(transferFundsComponent)
  },
  billPayComponent: async ({ page }, use) => {
    const billPayComponent = new BillPayComponent(page)
    await use(billPayComponent)
  },
  findTransactionsComponent: async ({ page }, use) => {
    const findTransactionsComponent = new FindTransactionsComponent(page)
    await use(findTransactionsComponent)
  },
  transactionDetailsComponent: async ({ page }, use) => {
    const transactionDetailsComponent = new TransactionDetailsComponent(page)
    await use(transactionDetailsComponent)
  },
  requestLoanComponent: async ({ page }, use) => {
    const requestLoanComponent = new RequestLoanComponent(page)
    await use(requestLoanComponent)
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page)
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
