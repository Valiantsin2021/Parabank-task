//@ts-check
/**
 * Page object for the Login page
 * @class TransactionDetailsComponent
 */

export class TransactionDetailsComponent {
  /**
   * Class constructor for TransactionDetailsComponent.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**page passed in a constructor of the POM @type {import('@playwright/test').Page} */
    this.page = page
    /** accountTypeSelect locator @type {import('@playwright/test').Locator}*/
    this.accountTypeSelect = page.locator('#type')
    /** transactionDetailsTitle locator @type {import('@playwright/test').Locator}*/
    this.transactionDetailsTitle = page.getByRole('heading', { name: 'Transaction Details' })
    /** transactionTableRows locator @type {import('@playwright/test').Locator}*/
    this.transactionTableRows = page.locator('table tbody tr')
    /** transactionId locator @type {import('@playwright/test').Locator}*/
    this.transactionId = this.transactionTableRows.filter({ hasText: 'Transaction ID:' }).locator('td').last()
    /** transactionDate locator @type {import('@playwright/test').Locator}*/
    this.transactionDate = this.transactionTableRows.filter({ hasText: 'Date:' }).locator('td').last()
    /** transactionDescription locator @type {import('@playwright/test').Locator}*/
    this.transactionDescription = this.transactionTableRows.filter({ hasText: 'Description:	' }).locator('td').last()
    /** transactionType locator @type {import('@playwright/test').Locator}*/
    this.transactionType = this.transactionTableRows.filter({ hasText: 'Type:' }).locator('td').last()
    /** transactionAmount locator @type {import('@playwright/test').Locator}*/
    this.transactionAmount = this.transactionTableRows.filter({ hasText: 'Amount:' }).locator('td').last()
  }
}
