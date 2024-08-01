//@ts-check
import { BasePage } from '@pages/BasePage.js'
/**
 * Page object for the Login page
 * @class RegisterComponent
 */

export class RegisterComponent extends BasePage {
  /**
   * Class constructor for RegisterComponent.
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */

  constructor(page) {
    super(page)
    /**@type {import('@playwright/test').Page} Page instance passed in the constructor of the POM.*/
    this.page = page
    /**@type {import('@playwright/test').Locator} Register component title input locator */
    this.title = page.getByText('Signing up is easy!')
    /**@type {import('@playwright/test').Locator} firstnameInput input locator */
    this.firstnameInput = page.locator('[id$="firstName"]')
    /**@type {import('@playwright/test').Locator} lastnameInput input locator */
    this.lastnameInput = page.locator('[id$="lastName"]')
    /**@type {import('@playwright/test').Locator} addressInput input locator */
    this.addressInput = page.locator('[id$="street"]')
    /**@type {import('@playwright/test').Locator} cityInput input locator */
    this.cityInput = page.locator('[id$="city"]')
    /**@type {import('@playwright/test').Locator} stateInput input locator*/
    this.stateInput = page.locator('[id$="state"]')
    /**@type {import('@playwright/test').Locator} zipcodeInput locator*/
    this.zipcodeInput = page.locator('[id$="zipCode"]')
    /**@type {import('@playwright/test').Locator} phoneNumberInput locator*/
    this.phoneNumberInput = page.locator('[id$="phoneNumber"]')
    /**@type {import('@playwright/test').Locator} ssnInput locator*/
    this.ssnInput = page.locator('[id$="ssn"]')
    /**@type {import('@playwright/test').Locator} usernameInput locator*/
    this.usernameInput = page.locator('[id$="username"]')
    /**@type {import('@playwright/test').Locator} passwordInput locator*/
    this.passwordInput = page.locator('[id$="password"]')
    /**@type {import('@playwright/test').Locator} repeatedPasswordInput locator*/
    this.repeatedPasswordInput = page.locator('#repeatedPassword')
    /**@type {import('@playwright/test').Locator} registerBtn button locator*/
    this.registerBtn = page.getByRole('button', { name: 'Register' })
    /**@type {import('@playwright/test').Locator} First name error message locator */
    this.firstnameErrorMsg = page.getByText('First name is required.')
    /**@type {import('@playwright/test').Locator} First name error message locator */
    this.firstnameErrorMsg = page.getByText('First name is required.')
    /**@type {import('@playwright/test').Locator} Last name error message locator */
    this.lastnameErrorMsg = page.getByText('Last name is required.')
    /**@type {import('@playwright/test').Locator} Address error message locator */
    this.addressErrorMsg = page.getByText('Address is required.')
    /**@type {import('@playwright/test').Locator} City error message locator */
    this.cityErrorMsg = page.getByText('City is required.')
    /**@type {import('@playwright/test').Locator} State error message locator */
    this.stateErrorMsg = page.getByText('State is required.')
    /**@type {import('@playwright/test').Locator} Zip code error message locator */
    this.zipcodeErrorMsg = page.getByText('Zip Code is required.')
    /**@type {import('@playwright/test').Locator} SSN error message locator */
    this.ssnErrorMsg = page.getByText('Social Security Number is required.')
    /**@type {import('@playwright/test').Locator} Username error message locator */
    this.usernameErrorMsg = page.getByText('Username is required.')
    /**@type {import('@playwright/test').Locator} Password error message locator */
    this.passwordErrorMsg = page.getByText('Password is required.')
    /**@type {import('@playwright/test').Locator} Password confirmation error message locator */
    this.repeatedPasswordErrorMsg = page.getByText('Password confirmation is required.')
    /**@type {import('@playwright/test').Locator} registerSuccessMsg confirmation message locator */
    this.registerSuccessMsg = page.getByText('Your account was created successfully. You are now logged in.')
  }

  /**
   * Register a new user with the provided data.
   * @param {object} user - The new user register data object.
   * @returns {Promise<void>} - A promise that resolves after the register process is complete.
   */
  async registerUser(user) {
    await this.firstnameInput.fill(user.firstname)
    await this.lastnameInput.fill(user.lastname)
    await this.addressInput.fill(user.address)
    await this.cityInput.fill(user.city)
    await this.stateInput.fill(user.state)
    await this.zipcodeInput.fill(user.zipcode)
    await this.phoneNumberInput.fill(user.phoneNumber)
    await this.ssnInput.fill(user.ssn)
    await this.usernameInput.fill(user.username)
    await this.passwordInput.fill(user.password)
    await this.repeatedPasswordInput.fill(user.password)
    await this.registerBtn.click()
  }

  /**
   * Retrieves the registration success title element for the given username.
   *
   * @param {string} username - The username to be included in the success message.
   */
  async getRegisterSuccessTitle(username) {
    return this.page.getByText(`Welcome ${username}`)
  }
}
