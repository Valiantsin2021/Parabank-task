//@ts-check
/**
 * Page object for the Login page
 * @class AccountsCreationComponent
 */

export class AccountsCreationComponent {
  /**
   * Class constructor for AccountsCreationComponent.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**page passed in a constructor of the POM @type {import('@playwright/test').Page} */
    this.page = page
    /** accountTypeSelect locator @type {import('@playwright/test').Locator}*/
    this.accountTypeSelect = page.locator('#type')
    /** existingAccountsSelect locator @type {import('@playwright/test').Locator}*/
    this.existingAccountsSelect = page.locator('#fromAccountId')
    /** openAccountBtn locator @type {import('@playwright/test').Locator}*/
    this.openAccountBtn = page.locator('input[value="Open New Account"]')
    /** openAccountTitle locator @type {import('@playwright/test').Locator}*/
    this.openAccountTitle = page.getByRole('heading', { name: 'Open New Account' })
    /** openSuccessMsg locator @type {import('@playwright/test').Locator}*/
    this.openSuccessMsg = page.getByText('Congratulations, your account is now open.')
    /** openAccountSuccessTitle locator @type {import('@playwright/test').Locator}*/
    this.openAccountSuccessTitle = page.getByRole('heading', { name: 'Account Opened!' })
    /** newAccountNumber locator @type {import('@playwright/test').Locator}*/
    this.newAccountNumber = page.locator('#newAccountId')
  }

  /**
   * Creates a new account.
   *
   * @param {string} accountType - The type of account to create.
   * @param {string} existingAccount - The existing account to link with the new account.
   * @returns {Promise<void>} A promise that resolves when the account creation process is complete.
   */
  async createNewAccount(accountType, existingAccount) {
    await this.accountTypeSelect.selectOption(accountType)
    await this.existingAccountsSelect.selectOption(existingAccount)
    await this.openAccountBtn.click()
  }
}
