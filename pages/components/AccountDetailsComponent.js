//@ts-check
/**
 * Page object for the Login page
 * @class AccountDetailsComponent
 */

export class AccountDetailsComponent {
  /**
   * Class constructor for AccountDetailsComponent.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /** page passed in a constructor of the POM @type {import('@playwright/test').Page}*/
    this.page = page
    /**accountDetailsTitle locator @type {import('@playwright/test').Locator} */
    this.accountDetailsTitle = page.getByRole('heading', { name: 'Account Details' })
    /**accountActivityTitle locator @type {import('@playwright/test').Locator} */
    this.accountActivityTitle = page.getByRole('heading', { name: 'Account Activity' })
    /**accountId locator @type {import('@playwright/test').Locator} */
    this.accountId = page.locator('#accountId')
    /** accountType locator @type {import('@playwright/test').Locator}*/
    this.accountType = page.locator('#accountType')
    /**balance locator @type {import('@playwright/test').Locator} */
    this.balance = page.locator('#balance')
    /**availableBalance locator @type {import('@playwright/test').Locator} */
    this.availableBalance = page.locator('#availableBalance')
    /**activityPeriodSelect locator @type {import('@playwright/test').Locator} */
    this.activityPeriodSelect = page.locator('#activityForm #month')
    /**activityTypeSelect locator @type {import('@playwright/test').Locator} */
    this.activityTypeSelect = page.locator('#activityForm #transactionType')
    /**goBtn locator @type {import('@playwright/test').Locator} */
    this.goBtn = page.locator('input[value="Go"]')
    /** transactionsTable locator @type {import('@playwright/test').Locator}*/
    this.transactionsTableRows = page.locator('#transactionTable tbody tr')
  }
  /**
   * Retrieves a transaction link element by the given name.
   * @param {string} name - The name associated with the transaction link.
   */
  async getTransactionByName(name) {
    return this.page.getByRole('link', { name: name })
  }
  /**
   * Retrieves a transaction amount element by the given name.
   * @param {string} transaction - The transaction name associated with the transaction link.
   * @param {string} amount - The amount associated with the transaction link.
   */
  async getTransferedAmount(transaction, amount) {
    return this.transactionsTableRows.filter({ hasText: transaction }).getByText(amount)
  }
}
