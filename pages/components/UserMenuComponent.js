//@ts-check
import { HomePage } from '../HomePage.js'
/**
 * Page object for the Login page
 * @class UserMenuComponent
 */

export class UserMenuComponent extends HomePage {
  /**
   * Class constructor for UserMenuComponent.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */

  constructor(page) {
    super(page)
    /**Page instance passed in the constructor of the POM. @type {import('@playwright/test').Page} */
    this.page = page
    /** openNewAccount link locator @type {import('@playwright/test').Locator} */
    this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account' })
    /** logoutBtn buttoon locator @type {import('@playwright/test').Locator} */
    this.accountsOverviewLink = page.getByRole('link', { name: 'Accounts Overview' })
    /** transferFundsLink link locator @type {import('@playwright/test').Locator} */
    this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' })
    /** billPayLink link locator @type {import('@playwright/test').Locator} */
    this.billPayLink = page.getByRole('link', { name: 'Bill Pay' })
    /** findTransactionsLink buttoon locator @type {import('@playwright/test').Locator} */
    this.findTransactionsLink = page.getByRole('link', { name: 'Find Transactions' })
    /** updateContactLink link locator @type {import('@playwright/test').Locator} */
    this.updateContactLink = page.getByRole('link', { name: 'Update Contact info' })
    /** requestLoanLink link locator @type {import('@playwright/test').Locator} */
    this.requestLoanLink = page.getByRole('link', { name: 'Request Loan' })
    /** logoutBtn link locator @type {import('@playwright/test').Locator} */
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
