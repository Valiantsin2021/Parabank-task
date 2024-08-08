//@ts-check
/**
 * Page object for the Login page
 * @class BillPayComponent
 */

export class BillPayComponent {
  /**
   * Class constructor for BillPayComponent.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**page passed in a constructor of the POM @type {import('@playwright/test').Page} */
    this.page = page
    /** billPayTitle locator @type {import('@playwright/test').Locator}*/
    this.billPayTitle = page.getByRole('heading', { name: 'Bill Payment Service' })
    /** nameInput locator @type {import('@playwright/test').Locator}*/
    this.nameInput = page.locator('input[name="payee.name"]')
    /** addressInput locator @type {import('@playwright/test').Locator}*/
    this.addressInput = page.locator('input[name="payee.address.street"]')
    /** cityInput locator @type {import('@playwright/test').Locator}*/
    this.cityInput = page.locator('input[name="payee.address.city"]')
    /** stateInput locator @type {import('@playwright/test').Locator}*/
    this.stateInput = page.locator('input[name="payee.address.state"]')
    /** zipcodeInput locator @type {import('@playwright/test').Locator}*/
    this.zipcodeInput = page.locator('input[name="payee.address.zipCode"]')
    /** phoneNumberInput locator @type {import('@playwright/test').Locator}*/
    this.phoneNumberInput = page.locator('input[name="payee.phoneNumber"]')
    /** accountInput locator @type {import('@playwright/test').Locator}*/
    this.accountInput = page.locator('input[name="payee.accountNumber"]')
    /** verifyAccountInput locator @type {import('@playwright/test').Locator}*/
    this.verifyAccountInput = page.locator('input[name="verifyAccount"]')
    /** billPayTitle locator @type {import('@playwright/test').Locator}*/
    this.amountInput = page.locator('input[name="amount"]')
    /** accountSelect locator @type {import('@playwright/test').Locator}*/
    this.accountSelect = page.locator('select[name="fromAccountId"]')
    /** sendPaymentBtn locator @type {import('@playwright/test').Locator}*/
    this.sendPaymentBtn = page.locator('input[value="Send Payment"]')
    /** sendPaymentBtn locator @type {import('@playwright/test').Locator}*/
    this.billPaySuccessTitle = page.getByRole('heading', { name: 'Bill Payment Complete' })
    /** First name  error message locator @type {import('@playwright/test').Locator} */
    this.nameErrorMsg = page.getByText('Payee name is required.')
    /** addressErrorMsg error  message locator @type {import('@playwright/test').Locator} */
    this.addressErrorMsg = page.getByText('Address is required.')
    /** cityErrorMsg error  message locator @type {import('@playwright/test').Locator} */
    this.cityErrorMsg = page.getByText('City is required.')
    /** stateErrorMsg error  message locator @type {import('@playwright/test').Locator} */
    this.stateErrorMsg = page.getByText('State is required.')
    /** First name  error message locator @type {import('@playwright/test').Locator} */
    this.zipcodeErrorMsg = page.getByText('Zip Code is required.')
    /** First name  error message locator @type {import('@playwright/test').Locator} */
    this.phoneNumberErrorMsg = page.getByText('Phone number is required.')
    /** accountErrorMsg error  message locator @type {import('@playwright/test').Locator} */
    this.accountErrorMsg = page.getByText('Account number is required.').first()
    /** verifyAccountErrorMsg error  message locator @type {import('@playwright/test').Locator} */
    this.verifyAccountErrorMsg = page.getByText('Account number is required.').last()
    /** amountErrorMsg error  message locator @type {import('@playwright/test').Locator} */
    this.amountErrorMsg = page.getByText('The amount cannot be empty.')
  }
  /**
   * Fills in the bill payment form with the provided data and submits the payment.
   *
   * @param {Object} data - The payee data to fill in the bill payment form.
   * @param {string} data.firstname - The name of the person paying the bill.
   * @param {string} data.address - The address of the person paying the bill.
   * @param {string} data.city - The city of the person paying the bill.
   * @param {string} data.state - The state of the person paying the bill.
   * @param {string} data.zipcode - The zipcode of the person paying the bill.
   * @param {string} data.phoneNumber - The phone number of the person paying the bill.
   * @param {string} data.account - The account number to be used for the payment.
   * @param {string} data.verifyAccount - The account number to be used for the payment.
   * @param {string} data.amount - The amount to be paid.
   * @returns {Promise<void>} A promise that resolves when the payment has been submitted.
   */
  async payBill(data) {
    await this.nameInput.fill(data.firstname)
    await this.addressInput.fill(data.address)
    await this.cityInput.fill(data.city)
    await this.stateInput.fill(data.state)
    await this.zipcodeInput.fill(data.zipcode)
    await this.phoneNumberInput.fill(data.phoneNumber)
    await this.accountInput.fill(data.account)
    await this.verifyAccountInput.fill(data.verifyAccount)
    await this.amountInput.fill(data.amount)
    await this.accountSelect.selectOption(data.account)
    await this.sendPaymentBtn.click()
  }

  /** Retrieves the success bill payment message for a given transfer amount and account number.
   *
   * @param {string} name - The payee name.
   * @param {string} billAmount - The amount paid.
   * @param {string} accountNumber - The destination account number.
   */
  async getSuccessBillPayMessage(name, billAmount, accountNumber) {
    return this.page.getByText(`Bill Payment to ${name} in the amount of $${billAmount} from account ${accountNumber} was successful.`)
  }
}
