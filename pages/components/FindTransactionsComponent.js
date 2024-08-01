//@ts-check
/**
 * Page object for the Login page
 * @class FindTransactions
 */

export class FindTransactionsComponent {
  /**
   * Class constructor for FindTransactions.
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**@type {import('@playwright/test').Page} page passed in a constructor of the POM */
    this.page = page
    /**@type {import('@playwright/test').Locator} findTransactionsTitle locator*/
    this.findTransactionsTitle = page.getByRole('heading', { name: 'Find Transactions' })
    /**@type {import('@playwright/test').Locator} findTransactionsSuccessTitle locator*/
    this.findTransactionsSuccessTitle = page.getByRole('heading', { name: 'Transaction Results' })
    /**@type {import('@playwright/test').Locator} accountSelect locator*/
    this.accountSelect = page.locator('#accountId')
    /**@type {import('@playwright/test').Locator} transactionIdinput locator*/
    this.transactionIdinput = page.locator('#transactionId')
    /**@type {import('@playwright/test').Locator} transactionDateInput locator*/
    this.transactionDateInput = page.locator('#transactionDate')
    /**@type {import('@playwright/test').Locator} fromDateInput locator*/
    this.fromDateInput = page.locator('#fromDate')
    /**@type {import('@playwright/test').Locator} toDateInput locator*/
    this.toDateInput = page.locator('#toDate')
    /**@type {import('@playwright/test').Locator} amountInput locator*/
    this.amountInput = page.locator('#amount')
    /**@type {import('@playwright/test').Locator} findByIdBtn locator*/
    this.findByIdBtn = page.locator('#findById')
    /**@type {import('@playwright/test').Locator} findByDateBtn locator*/
    this.findByDateBtn = page.locator('#findByDate')
    /**@type {import('@playwright/test').Locator} findByDateRangeBtn locator*/
    this.findByDateRangeBtn = page.locator('#findByDateRange')
    /**@type {import('@playwright/test').Locator} findByAmountBtn locator*/
    this.findByAmountBtn = page.locator('#findByAmount')
    /**@type {import('@playwright/test').Locator} transactionIdErrorMsg locator*/
    this.transactionIdErrorMsg = page.locator('#transactionIdError')
    /**@type {import('@playwright/test').Locator} transactionDateErrorMsg locator*/
    this.transactionDateErrorMsg = page.locator('#transactionDateError')
    /**@type {import('@playwright/test').Locator} dateRangeErrorMsg locator*/
    this.dateRangeErrorMsg = page.locator('#dateRangeError')
    /**@type {import('@playwright/test').Locator} amountErrorMsg locator*/
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
