//@ts-check
import { RegisterComponent } from './RegisterComponent'
/**
 * Page object for the Login page
 * @class UpdateContactComponent
 */

export class UpdateContactComponent extends RegisterComponent {
  /**
   * Class constructor for UpdateContactComponent.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */

  constructor(page) {
    super(page)
    /**Page instance passed in the constructor of the POM. @type {import('@playwright/test').Page} */
    this.page = page
    /** updateProfileTitle title locator @type {import('@playwright/test').Locator}*/
    this.updateProfileTitle = page.getByRole('heading', { name: 'Update Profile' })
    /** updateProfileBtn button locator @type {import('@playwright/test').Locator}*/
    this.updateProfileBtn = page.locator('input[value="Update Profile"]')
    /** updateSuccessTitle title locator @type {import('@playwright/test').Locator}*/
    this.updateSuccessTitle = page.getByRole('heading', { name: 'Profile Updated' })
    /** updateSuccessMsg message locator @type {import('@playwright/test').Locator}*/
    this.updateSuccessMsg = page.getByText('Your updated address and phone number have been added to the system.')
    /** contactForm message locator @type {import('@playwright/test').Locator}*/
    this.contactForm = page.locator('form[name="contact"]')
  }

  /**
   * Register a new user with the provided data.
   * @param {object} user - The new user register data object.
   * @returns {Promise<void>} - A promise that resolves after the register process is complete.
   */
  async updateUser(user) {
    await this.firstnameInput.fill(user.firstname)
    await this.lastnameInput.fill(user.lastname)
    await this.addressInput.fill(user.address)
    await this.cityInput.fill(user.city)
    await this.stateInput.fill(user.state)
    await this.zipcodeInput.fill(user.zipcode)
    await this.phoneNumberInput.fill(user.phoneNumber)
    await this.updateProfileBtn.click()
  }

  /**
   * Clear all update user component input fields.
   * @returns {Promise<void>} - A promise that resolves after the clear values is complete.
   */
  async clearUserDataFields() {
    const inputs = [
      this.firstnameInput,
      this.lastnameInput,
      this.addressInput,
      this.cityInput,
      this.stateInput,
      this.zipcodeInput,
      this.phoneNumberInput
    ]
    for await (let input of inputs) {
      await input.clear()
    }
  }
}
