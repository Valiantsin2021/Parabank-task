//@ts-check
/**
 * Page object for the Login page
 * @class TransferFundsComponent
 */

export class TransferFundsComponent {
  /**
   * Class constructor for TransferFundsComponent.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**page passed in a constructor of the POM @type {import('@playwright/test').Page} */
    this.page = page
    /** accountTypeSelect locator @type {import('@playwright/test').Locator}*/
    this.transferFundsTitle = page.getByRole('heading', { name: 'Transfer Funds' })
    /** amountInput locator @type {import('@playwright/test').Locator}*/
    this.amountInput = page.locator('#amount')
    /** fromAccountSelect locator @type {import('@playwright/test').Locator}*/
    this.fromAccountSelect = page.locator('#fromAccountId')
    /** toAccountSelect locator @type {import('@playwright/test').Locator}*/
    this.toAccountSelect = page.locator('#toAccountId')
    /** transferFundsBtn locator @type {import('@playwright/test').Locator}*/
    this.transferFundsBtn = page.locator('input[value="Transfer"]')
    /** transferSuccessTitle locator @type {import('@playwright/test').Locator}*/
    this.transferSuccessTitle = page.getByRole('heading', { name: 'Transfer Complete!' })
  }
  /** Retrieves the success transfer message for a given transfer amount and account number.
   *
   * @param {string} transferAmount - The amount transferred.
   * @param {string} fromAccount - The origin account number.
   * @param {string} toAccountNumber - The destination account number.
   */
  async getSuccessTransferMessage(transferAmount, fromAccount, toAccountNumber) {
    return this.page.getByText(`${transferAmount} has been transferred from account #${fromAccount} to account #${toAccountNumber}.`)
  }
  /**
   * Transfers funds from one account to another.
   *
   * @param {string} transferAmount - The amount of money to transfer.
   * @param {string} fromAccount - The account to transfer money from.
   * @param {string} toAccount - The account to transfer money to.
   * @returns {Promise<void>} A promise that resolves when the transfer is complete.
   */
  async transferFunds(transferAmount, fromAccount, toAccount) {
    await this.amountInput.fill(transferAmount)
    await this.fromAccountSelect.selectOption(fromAccount)
    await this.toAccountSelect.selectOption(toAccount)
    await this.transferFundsBtn.click()
  }
}
