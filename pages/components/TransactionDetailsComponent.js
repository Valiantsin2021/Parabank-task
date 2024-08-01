//@ts-check
/**
 * Page object for the Login page
 * @class TransactionDetailsComponent
 */

export class TransactionDetailsComponent {
  /**
   * Class constructor for TransactionDetailsComponent.
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**@type {import('@playwright/test').Page} page passed in a constructor of the POM */
    this.page = page
    /**@type {import('@playwright/test').Locator} accountTypeSelect locator*/
    this.accountTypeSelect = page.locator('#type')
    /**@type {import('@playwright/test').Locator} transactionDetailsTitle locator*/
    this.transactionDetailsTitle = page.getByRole('heading', { name: 'Transaction Details' })
    /**@type {import('@playwright/test').Locator} transactionTableRows locator*/
    this.transactionTableRows = page.locator('table tbody tr')
    /**@type {import('@playwright/test').Locator} transactionId locator*/
    this.transactionId = this.transactionTableRows.filter({ hasText: 'Transaction ID:' }).locator('td').last()
    /**@type {import('@playwright/test').Locator} transactionDate locator*/
    this.transactionDate = this.transactionTableRows.filter({ hasText: 'Date:' }).locator('td').last()
    /**@type {import('@playwright/test').Locator} transactionDescription locator*/
    this.transactionDescription = this.transactionTableRows.filter({ hasText: 'Description:	' }).locator('td').last()
    /**@type {import('@playwright/test').Locator} transactionType locator*/
    this.transactionType = this.transactionTableRows.filter({ hasText: 'Type:' }).locator('td').last()
    /**@type {import('@playwright/test').Locator} transactionAmount locator*/
    this.transactionAmount = this.transactionTableRows.filter({ hasText: 'Amount:' }).locator('td').last()
  }
}
