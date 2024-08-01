//@ts-check
/**
 * Page object for the Login page
 * @class AccountsCreationComponent
 */

export class AccountsCreationComponent {
  /**
   * Class constructor for AccountsCreationComponent.
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**@type {import('@playwright/test').Page} page passed in a constructor of the POM */
    this.page = page
    /**@type {import('@playwright/test').Locator} accountTypeSelect locator*/
    this.accountTypeSelect = page.locator('#type')
    /**@type {import('@playwright/test').Locator} existingAccountsSelect locator*/
    this.existingAccountsSelect = page.locator('#fromAccountId')
    /**@type {import('@playwright/test').Locator} openAccountBtn locator*/
    this.openAccountBtn = page.locator('input[value="Open New Account"]')
    /**@type {import('@playwright/test').Locator} openAccountTitle locator*/
    this.openAccountTitle = page.getByRole('heading', { name: 'Open New Account' })
    /**@type {import('@playwright/test').Locator} openSuccessMsg locator*/
    this.openSuccessMsg = page.getByText('Congratulations, your account is now open.')
    /**@type {import('@playwright/test').Locator} openAccountSuccessTitle locator*/
    this.openAccountSuccessTitle = page.getByRole('heading', { name: 'Account Opened!' })
    /**@type {import('@playwright/test').Locator} newAccountNumber locator*/
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
