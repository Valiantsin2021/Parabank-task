//@ts-check
/**
 * Page object for the Login page
 * @class FindTransactions
 */

export class FindTransactionsComponent {
  /**
   * Class constructor for FindTransactions.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**page passed in a constructor of the POM @type {import('@playwright/test').Page} */
    this.page = page
    /** findTransactionsTitle locator @type {import('@playwright/test').Locator}*/
    this.findTransactionsTitle = page.getByRole('heading', { name: 'Find Transactions' })
    /** findTransactionsSuccessTitle locator @type {import('@playwright/test').Locator}*/
    this.findTransactionsSuccessTitle = page.getByRole('heading', { name: 'Transaction Results' })
    /** accountSelect locator @type {import('@playwright/test').Locator}*/
    this.accountSelect = page.locator('#accountId')
    /** transactionIdinput locator @type {import('@playwright/test').Locator}*/
    this.transactionIdinput = page.locator('#transactionId')
    /** transactionDateInput locator @type {import('@playwright/test').Locator}*/
    this.transactionDateInput = page.locator('#transactionDate')
    /** fromDateInput locator @type {import('@playwright/test').Locator}*/
    this.fromDateInput = page.locator('#fromDate')
    /** toDateInput locator @type {import('@playwright/test').Locator}*/
    this.toDateInput = page.locator('#toDate')
    /** amountInput locator @type {import('@playwright/test').Locator}*/
    this.amountInput = page.locator('#amount')
    /** findByIdBtn locator @type {import('@playwright/test').Locator}*/
    this.findByIdBtn = page.locator('#findById')
    /** findByDateBtn locator @type {import('@playwright/test').Locator}*/
    this.findByDateBtn = page.locator('#findByDate')
    /** findByDateRangeBtn locator @type {import('@playwright/test').Locator}*/
    this.findByDateRangeBtn = page.locator('#findByDateRange')
    /** findByAmountBtn locator @type {import('@playwright/test').Locator}*/
    this.findByAmountBtn = page.locator('#findByAmount')
    /** transactionIdErrorMsg locator @type {import('@playwright/test').Locator}*/
    this.transactionIdErrorMsg = page.locator('#transactionIdError')
    /** transactionDateErrorMsg locator @type {import('@playwright/test').Locator}*/
    this.transactionDateErrorMsg = page.locator('#transactionDateError')
    /** dateRangeErrorMsg locator @type {import('@playwright/test').Locator}*/
    this.dateRangeErrorMsg = page.locator('#dateRangeError')
    /** amountErrorMsg locator @type {import('@playwright/test').Locator}*/
    this.amountErrorMsg = page.locator('#amountError')
  }
  /**
   * Fills in the transaction ID and clicks the find button to retrieve the transaction.
   *
   * @param {string} transactionId - The ID of the transaction to retrieve.
   * @returns {Promise<void>} A promise that resolves when the transaction has been retrieved.
   */
  async getTransactionById(transactionId) {
    await this.transactionIdinput.fill(transactionId)
    await this.findByIdBtn.click()
  }
  /**
   * Fills in the transaction date and clicks the find button to retrieve the transaction.
   *
   * @param {string} transactionDate - The date of the transaction to retrieve.
   * @returns {Promise<void>} A promise that resolves when the transaction has been retrieved.
   */
  async getTransactionByDate(transactionDate) {
    await this.transactionDateInput.fill(transactionDate)
    await this.findByDateBtn.click()
  }
  /**
   * Fills in the date range and clicks the find button to retrieve transactions within the specified range.
   *
   * @param {string} fromDate - The start date of the range.
   * @param {string} toDate - The end date of the range.
   * @returns {Promise<void>} A promise that resolves when the transactions have been retrieved.
   */
  async getTransactionByDateRange(fromDate, toDate) {
    await this.fromDateInput.fill(fromDate)
    await this.toDateInput.fill(toDate)
    await this.findByDateRangeBtn.click()
  }
  /**
   * Fills in the transaction amount and clicks the find button to retrieve the transaction.
   *
   * @param {string} amount - The amount of the transaction to retrieve.
   * @returns {Promise<void>} A promise that resolves when the transaction has been retrieved.
   */
  async getTransactionByAmount(amount) {
    await this.amountInput.fill(amount)
    await this.findByAmountBtn.click()
  }
}
