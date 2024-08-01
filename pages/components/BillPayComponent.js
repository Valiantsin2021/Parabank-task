//@ts-check
/**
 * Page object for the Login page
 * @class BillPayComponent
 */

export class BillPayComponent {
  /**
   * Class constructor for BillPayComponent.
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**@type {import('@playwright/test').Page} page passed in a constructor of the POM */
    this.page = page
    /**@type {import('@playwright/test').Locator} billPayTitle locator*/
    this.billPayTitle = page.getByRole('heading', { name: 'Bill Payment Service' })
    /**@type {import('@playwright/test').Locator} nameInput locator*/
    this.nameInput = page.locator('input[name="payee.name"]')
    /**@type {import('@playwright/test').Locator} addressInput locator*/
    this.addressInput = page.locator('input[name="payee.address.street"]')
    /**@type {import('@playwright/test').Locator} cityInput locator*/
    this.cityInput = page.locator('input[name="payee.address.city"]')
    /**@type {import('@playwright/test').Locator} stateInput locator*/
    this.stateInput = page.locator('input[name="payee.address.state"]')
    /**@type {import('@playwright/test').Locator} zipcodeInput locator*/
    this.zipcodeInput = page.locator('input[name="payee.address.zipCode"]')
    /**@type {import('@playwright/test').Locator} phoneNumberInput locator*/
    this.phoneNumberInput = page.locator('input[name="payee.phoneNumber"]')
    /**@type {import('@playwright/test').Locator} accountInput locator*/
    this.accountInput = page.locator('input[name="payee.accountNumber"]')
    /**@type {import('@playwright/test').Locator} verifyAccountInput locator*/
    this.verifyAccountInput = page.locator('input[name="verifyAccount"]')
    /**@type {import('@playwright/test').Locator} billPayTitle locator*/
    this.amountInput = page.locator('input[name="amount"]')
    /**@type {import('@playwright/test').Locator} accountSelect locator*/
    this.accountSelect = page.locator('select[name="fromAccountId"]')
    /**@type {import('@playwright/test').Locator} sendPaymentBtn locator*/
    this.sendPaymentBtn = page.locator('input[value="Send Payment"]')
    /**@type {import('@playwright/test').Locator} sendPaymentBtn locator*/
    this.billPaySuccessTitle = page.getByRole('heading', { name: 'Bill Payment Complete' })
    /**@type {import('@playwright/test').Locator} First name error message locator */
    this.nameErrorMsg = page.getByText('Payee name is required.')
    /**@type {import('@playwright/test').Locator} addressErrorMsg error message locator */
    this.addressErrorMsg = page.getByText('Address is required.')
    /**@type {import('@playwright/test').Locator} cityErrorMsg error message locator */
    this.cityErrorMsg = page.getByText('City is required.')
    /**@type {import('@playwright/test').Locator} stateErrorMsg error message locator */
    this.stateErrorMsg = page.getByText('State is required.')
    /**@type {import('@playwright/test').Locator} First name error message locator */
    this.zipcodeErrorMsg = page.getByText('Zip Code is required.')
    /**@type {import('@playwright/test').Locator} First name error message locator */
    this.phoneNumberErrorMsg = page.getByText('Phone number is required.')
    /**@type {import('@playwright/test').Locator} accountErrorMsg error message locator */
    this.accountErrorMsg = page.getByText('Account number is required.').first()
    /**@type {import('@playwright/test').Locator} verifyAccountErrorMsg error message locator */
    this.verifyAccountErrorMsg = page.getByText('Account number is required.').last()
    /**@type {import('@playwright/test').Locator} amountErrorMsg error message locator */
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
