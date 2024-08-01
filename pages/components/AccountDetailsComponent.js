//@ts-check
/**
 * Page object for the Login page
 * @class AccountDetailsComponent
 */

export class AccountDetailsComponent {
  /**
   * Class constructor for AccountDetailsComponent.
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**@type {import('@playwright/test').Page} page passed in a constructor of the POM */
    this.page = page
    /**@type {import('@playwright/test').Locator} accountDetailsTitle locator*/
    this.accountDetailsTitle = page.getByRole('heading', { name: 'Account Details' })
    /**@type {import('@playwright/test').Locator} accountActivityTitle locator*/
    this.accountActivityTitle = page.getByRole('heading', { name: 'Account Activity' })
    /**@type {import('@playwright/test').Locator} accountId locator*/
    this.accountId = page.locator('#accountId')
    /**@type {import('@playwright/test').Locator} accountType locator*/
    this.accountType = page.locator('#accountType')
    /**@type {import('@playwright/test').Locator} balance locator*/
    this.balance = page.locator('#balance')
    /**@type {import('@playwright/test').Locator} availableBalance locator*/
    this.availableBalance = page.locator('#availableBalance')
    /**@type {import('@playwright/test').Locator} activityPeriodSelect locator*/
    this.activityPeriodSelect = page.locator('#activityForm #month')
    /**@type {import('@playwright/test').Locator} activityTypeSelect locator*/
    this.activityTypeSelect = page.locator('#activityForm #transactionType')
    /**@type {import('@playwright/test').Locator} goBtn locator*/
    this.goBtn = page.locator('input[value="Go"]')
    /**@type {import('@playwright/test').Locator} transactionsTable locator*/
    this.transactionsTableRows = page.locator('#transactionTable tbody tr')
  }
  /**
   * Retrieves a transaction link element by the given name.
   *
   * @param {string} name - The name associated with the transaction link.
   */
  async getTransactionByName(name) {
    return this.page.getByRole('link', { name: name })
  }
  /**
   * Retrieves a transaction amount element by the given name.
   *
   * @param {string} transaction - The transaction name associated with the transaction link.
   * @param {string} amount - The amount associated with the transaction link.
   */
  async getTransferedAmount(transaction, amount) {
    return this.transactionsTableRows.filter({ hasText: transaction }).getByText(amount)
  }
}
