//@ts-check
/**
 * Page object for the Login page
 * @class TransferFundsComponent
 */

export class TransferFundsComponent {
  /**
   * Class constructor for TransferFundsComponent.
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**@type {import('@playwright/test').Page} page passed in a constructor of the POM */
    this.page = page
    /**@type {import('@playwright/test').Locator} accountTypeSelect locator*/
    this.transferFundsTitle = page.getByRole('heading', { name: 'Transfer Funds' })
    /**@type {import('@playwright/test').Locator} amountInput locator*/
    this.amountInput = page.locator('#amount')
    /**@type {import('@playwright/test').Locator} fromAccountSelect locator*/
    this.fromAccountSelect = page.locator('#fromAccountId')
    /**@type {import('@playwright/test').Locator} toAccountSelect locator*/
    this.toAccountSelect = page.locator('#toAccountId')
    /**@type {import('@playwright/test').Locator} transferFundsBtn locator*/
    this.transferFundsBtn = page.locator('input[value="Transfer"]')
    /**@type {import('@playwright/test').Locator} transferSuccessTitle locator*/
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
