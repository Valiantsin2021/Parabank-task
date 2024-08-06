//@ts-check

/**
 * Page object for the Base page
 * @class BasePage
 */

export class BasePage {
  /**
   * Class constructor for BasePage.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */

  constructor(page) {
    /**Page passed in a constructor of the POM @type {import('@playwright/test').Page} */
    this.page = page
  }

  /**
   * @property {Function} openPage Opens Job Status page and wait until it loads
   * @returns {Promise<void>}
   */

  async openPage() {
    await this.page.goto('/')
  }

  /**
   * @property {Function} goBack Opens Job Status page and wait until it loads
   * @returns {Promise<void>}
   */

  async goBack() {
    await this.page.goBack({
      waitUntil: 'load'
    })
  }

  /**
   * @property {Function} close Opens Job Status page and wait until it loads
   * @returns {Promise<void>}
   */

  async close() {
    await this.page.close()
  }

  /**
   * The method to save the session into the auth json file
   * @property {Function} saveStorage Waits untill the Batch job table to completely load
   * @param {string} file the string with the path to the file to save the storage state
   * @returns {Promise<void>}
   */

  async saveStorage(file) {
    await this.page.context().storageState({ path: file })
  }
}
