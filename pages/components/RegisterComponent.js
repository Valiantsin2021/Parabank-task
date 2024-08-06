//@ts-check
import { HomePage } from '@pages/HomePage'
/**
 * Page object for the Login page
 * @class RegisterComponent
 */

export class RegisterComponent extends HomePage {
  /**
   * Class constructor for RegisterComponent.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */

  constructor(page) {
    super(page)
    /**Page instance passed in the constructor of the POM. @type {import('@playwright/test').Page} */
    this.page = page
    /**Register component title input locator @type {import('@playwright/test').Locator} */
    this.title = page.getByText('Signing up is easy!')
    /** firstnameInput input locator @type {import('@playwright/test').Locator} */
    this.firstnameInput = page.locator('[id$="firstName"]')
    /** lastnameInput input locator @type {import('@playwright/test').Locator} */
    this.lastnameInput = page.locator('[id$="lastName"]')
    /** addressInput input locator @type {import('@playwright/test').Locator} */
    this.addressInput = page.locator('[id$="street"]')
    /** cityInput input locator @type {import('@playwright/test').Locator} */
    this.cityInput = page.locator('[id$="city"]')
    /** stateInput input locator @type {import('@playwright/test').Locator}*/
    this.stateInput = page.locator('[id$="state"]')
    /** zipcodeInput locator @type {import('@playwright/test').Locator}*/
    this.zipcodeInput = page.locator('[id$="zipCode"]')
    /** phoneNumberInput locator @type {import('@playwright/test').Locator}*/
    this.phoneNumberInput = page.locator('[id$="phoneNumber"]')
    /** ssnInput locator @type {import('@playwright/test').Locator}*/
    this.ssnInput = page.locator('[id$="ssn"]')
    /** usernameInput locator @type {import('@playwright/test').Locator}*/
    this.usernameInput = page.locator('[id$="username"]')
    /** passwordInput locator @type {import('@playwright/test').Locator}*/
    this.passwordInput = page.locator('[id$="password"]')
    /**repeatedPasswordInput locator @type {import('@playwright/test').Locator} */
    this.repeatedPasswordInput = page.locator('#repeatedPassword')
    /**registerBtn button locator @type {import('@playwright/test').Locator} */
    this.registerBtn = page.getByRole('button', { name: 'Register' })
    /** First name error message locator @type {import('@playwright/test').Locator}  */
    this.firstnameErrorMsg = page.getByText('First name is required.')
    /** First name error message locator @type {import('@playwright/test').Locator}  */
    this.firstnameErrorMsg = page.getByText('First name is required.')
    /** Last name error message locator @type {import('@playwright/test').Locator}  */
    this.lastnameErrorMsg = page.getByText('Last name is required.')
    /** Address error message locator @type {import('@playwright/test').Locator} */
    this.addressErrorMsg = page.getByText('Address is required.')
    /** City error message locator @type {import('@playwright/test').Locator} */
    this.cityErrorMsg = page.getByText('City is required.')
    /** State error message locator @type {import('@playwright/test').Locator} */
    this.stateErrorMsg = page.getByText('State is required.')
    /** Zip code error message locator @type {import('@playwright/test').Locator}  */
    this.zipcodeErrorMsg = page.getByText('Zip Code is required.')
    /** SSN error message locator @type {import('@playwright/test').Locator} */
    this.ssnErrorMsg = page.getByText('Social Security Number is required.')
    /** Username error message locator @type {import('@playwright/test').Locator} */
    this.usernameErrorMsg = page.getByText('Username is required.')
    /** Password error message locator @type {import('@playwright/test').Locator} */
    this.passwordErrorMsg = page.getByText('Password is required.')
    /** Password confirmation error message locator @type {import('@playwright/test').Locator}  */
    this.repeatedPasswordErrorMsg = page.getByText('Password confirmation is required.')
    /** registerSuccessMsg confirmation message locator @type {import('@playwright/test').Locator} */
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
