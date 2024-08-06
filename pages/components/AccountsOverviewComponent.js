//@ts-check
/**
 * Page object for the Login page
 * @class AccountsOverviewComponent
 */

export class AccountsOverviewComponent {
  /**
   * Class constructor for AccountsOverviewComponent.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**page page passed in a constructor of the POM @type {import('@playwright/test').Page}  */
    this.page = page
    /** accountsOverviewTitle title locator @type {import('@playwright/test').Locator}*/
    this.accountsOverviewTitle = page.getByRole('heading', { name: 'Accounts Overview' })
    /** accountTable locator @type {import('@playwright/test').Locator}*/
    this.accountTable = page.locator('#accountTable tbody')
    /** defaultAccountNumberCell locator @type {import('@playwright/test').Locator}*/
    this.defaultAccountNumberCell = this.accountTable.locator('tr').first().getByRole('link', { name: /\d{5}/ })
    /** defaultBalanceAmountCell locator @type {import('@playwright/test').Locator}*/
    this.defaultBalanceAmountCell = this.accountTable.locator('tr').first().locator('td').nth(1)
    /** defaultAvailableAmountCell locator @type {import('@playwright/test').Locator}*/
    this.defaultAvailableAmountCell = this.accountTable.locator('tr').first().locator('td').last()
    /** totalAmountCell locator @type {import('@playwright/test').Locator}*/
    this.totalAmountCell = this.accountTable.locator('tr').last().getByRole('cell', { name: /\$\d*/ })
  }
  /**
   * Retrieves the given avaliable account record for the given user.
   *
   */
  async getAccountRecord(accountNumber) {
    return this.accountTable.locator('tr').filter({ hasText: accountNumber }).locator('td').first()
  }
  /**
   * Retrieves the given avaliable account balance for the given user.
   *
   */
  async getAvailableAccountBalance(accountNumber) {
    const balance = await this.accountTable.locator('tr').filter({ hasText: accountNumber }).locator('td').last().innerText()
    return balance
  }
  /**
   * Retrieves the given account balance for the given user.
   *
   */
  async getAccountBalance(accountNumber) {
    const balance = await this.accountTable.locator('tr').filter({ hasText: accountNumber }).locator('td').nth(1).innerText()
    return balance
  }
}
