//@ts-check
import { BasePage } from '@pages/BasePage.js'
/**
 * Page object for the Home page
 * @class HomePage
 */

export class HomePage extends BasePage {
  /**
   * Class constructor for HomePage.
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */

  constructor(page) {
    super(page)
    /**@type {import('@playwright/test').Page} Page instance passed in the constructor of the POM.*/
    this.page = page
    /**@type {import('@playwright/test').Locator} Home page logo title locator */
    this.logoTitle = page.getByTitle('ParaBank')
    /**@type {import('@playwright/test').Locator} solutions menu locator */
    this.solutionsLink = page.getByText('Solutions')
    /**@type {import('@playwright/test').Locator} about us menu locator */
    this.aboutUsLink = page.getByRole('link', { name: 'About Us' })
    /**@type {import('@playwright/test').Locator} Services menu locator */
    this.servicesLink = page.getByRole('link', { name: 'Services' })
    /**@type {import('@playwright/test').Locator} Products menu locator */
    this.productsLink = page.getByRole('link', { name: 'Products' })
    /**@type {import('@playwright/test').Locator} Locations menu locator */
    this.locationsLink = page.getByRole('link', { name: 'Locations' })
    /**@type {import('@playwright/test').Locator} Admin Page menu locator */
    this.adminPageLink = page.getByRole('link', { name: 'Admin Page' })
    /**@type {import('@playwright/test').Locator} username input locator */
    this.usernameInput = page.locator('[name="username"]')
    /**@type {import('@playwright/test').Locator} password input locator */
    this.passwordInput = page.locator('[name="password"]')
    /**@type {import('@playwright/test').Locator} Login button locator */
    this.loginBtn = page.getByRole('button', { name: 'Log In' })
    /**@type {import('@playwright/test').Locator} Forgot login link locator */
    this.forgotLoginLink = page.getByRole('link', { name: 'Forgot login info?' })
    /**@type {import('@playwright/test').Locator} Register link locator */
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
}
