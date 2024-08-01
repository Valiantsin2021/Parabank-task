//@ts-check
/**
 * Page object for the Login page
 * @class AccountsOverviewComponent
 */

export class AccountsOverviewComponent {
  /**
   * Class constructor for AccountsOverviewComponent.
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**@type {import('@playwright/test').Page} page page passed in a constructor of the POM */
    this.page = page
    /**@type {import('@playwright/test').Locator} accountsOverviewTitle title locator*/
    this.accountsOverviewTitle = page.getByRole('heading', { name: 'Accounts Overview' })
    /**@type {import('@playwright/test').Locator} accountTable locator*/
    this.accountTable = page.locator('#accountTable tbody')
    /**@type {import('@playwright/test').Locator} defaultAccountNumberCell locator*/
    this.defaultAccountNumberCell = this.accountTable.locator('tr').first().getByRole('link', { name: /\d{5}/ })
    /**@type {import('@playwright/test').Locator} defaultBalanceAmountCell locator*/
    this.defaultBalanceAmountCell = this.accountTable.locator('tr').first().locator('td').nth(1)
    /**@type {import('@playwright/test').Locator} defaultAvailableAmountCell locator*/
    this.defaultAvailableAmountCell = this.accountTable.locator('tr').first().locator('td').last()
    /**@type {import('@playwright/test').Locator} totalAmountCell locator*/
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
