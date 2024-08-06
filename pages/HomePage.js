//@ts-check
import { BasePage } from '@pages/BasePage.js'
/**
 * Page object for the Home page
 * @class HomePage
 */

export class HomePage extends BasePage {
  /**
   * Class constructor for HomePage.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */

  constructor(page) {
    super(page)
    /**Page instance passed in the constructor of the POM. @type {import('@playwright/test').Page} */
    this.page = page
    /**Home page leftPanel locator @type {import('@playwright/test').Locator}  */
    this.leftPanel = page.locator('#leftPanel')
    /** Home page welcomeMessage locator  @type {import('@playwright/test').Locator}*/
    this.welcomeMessage = page.locator('p.smallText')
    /** Home page logo title locator @type {import('@playwright/test').Locator}*/
    this.logoTitle = page.getByTitle('ParaBank')
    /**solutions menu locator @type {import('@playwright/test').Locator}*/
    this.solutionsLink = page.getByText('Solutions')
    /**about us menu locator @type {import('@playwright/test').Locator}*/
    this.aboutUsLink = page.getByRole('link', { name: 'About Us' })
    /**Services menu locator @type {import('@playwright/test').Locator}*/
    this.servicesLink = page.getByRole('link', { name: 'Services' })
    /**Products menu locator @type {import('@playwright/test').Locator}*/
    this.productsLink = page.getByRole('link', { name: 'Products' })
    /**Locations menu locator @type {import('@playwright/test').Locator} */
    this.locationsLink = page.getByRole('link', { name: 'Locations' })
    /**Admin Page menu locator @type {import('@playwright/test').Locator} */
    this.adminPageLink = page.getByRole('link', { name: 'Admin Page' })
    /**username input locator @type {import('@playwright/test').Locator} */
    this.usernameInput = page.locator('[name="username"]')
    /**password input locator @type {import('@playwright/test').Locator} */
    this.passwordInput = page.locator('[name="password"]')
    /**Login button locator @type {import('@playwright/test').Locator} */
    this.loginBtn = page.getByRole('button', { name: 'Log In' })
    /**Forgot login link locator @type {import('@playwright/test').Locator} */
    this.forgotLoginLink = page.getByRole('link', { name: 'Forgot login info?' })
    /**Register link locator @type {import('@playwright/test').Locator} */
    this.registerLink = page.getByRole('link', { name: 'Register' })
  }
  /**
   * Login registered user.
   *
   * @param {string} username - The username of the registered in user.
   * @param {string} password - The password of the registered in user.
   * @returns {Promise<void>} - A promise that resolves after the login process is complete.
   */
  async loginUser(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginBtn.click()
  }

  /**
   * Retrieves all cookies from the current page context.
   *
   * @return {Promise<Array<Object>>} An array of cookie objects.
   */
  async getCookies() {
    return await this.page.context().cookies()
  }
}
