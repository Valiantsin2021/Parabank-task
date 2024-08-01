//@ts-check
import { HomePage } from '../HomePage.js'
/**
 * Page object for the Login page
 * @class UserMenuComponent
 */

export class UserMenuComponent extends HomePage {
  /**
   * Class constructor for UserMenuComponent.
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */

  constructor(page) {
    super(page)
    /**@type {import('@playwright/test').Page} Page instance passed in the constructor of the POM.*/
    this.page = page
    /**@type {import('@playwright/test').Locator} openNewAccount link locator */
    this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account' })
    /**@type {import('@playwright/test').Locator} logoutBtn buttoon locator */
    this.accountsOverviewLink = page.getByRole('link', { name: 'Accounts Overview' })
    /**@type {import('@playwright/test').Locator} transferFundsLink link locator */
    this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' })
    /**@type {import('@playwright/test').Locator} billPayLink link locator */
    this.billPayLink = page.getByRole('link', { name: 'Bill Pay' })
    /**@type {import('@playwright/test').Locator} findTransactionsLink buttoon locator */
    this.findTransactionsLink = page.getByRole('link', { name: 'Find Transactions' })
    /**@type {import('@playwright/test').Locator} updateContactLink link locator */
    this.updateContactLink = page.getByRole('link', { name: 'Update Contact info' })
    /**@type {import('@playwright/test').Locator} requestLoanLink link locator */
    this.requestLoanLink = page.getByRole('link', { name: 'Request Loan' })
    /**@type {import('@playwright/test').Locator} logoutBtn link locator */
    this.logoutLink = page.getByRole('link', { name: 'Log Out' })
  }
  /**
   * Retrieves the login success message for the given user.
   *
   * @param {string} firstname - The firstname to be included in the success message.
   * @param {string} lastname - The lastname to be included in the success message.
   */
  async getLoggedInMsg(firstname, lastname) {
    return this.page.getByText(`Welcome ${firstname} ${lastname}`)
  }
}
