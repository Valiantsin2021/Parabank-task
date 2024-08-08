//@ts-check
/**
 * Page object for the Login page
 * @class RequestLoanComponent
 */

export class RequestLoanComponent {
  /**
   * Class constructor for RequestLoanComponent.
   * @constructor
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**page passed in a constructor of the POM @type {import('@playwright/test').Page} */
    this.page = page
    /** requestLoanTitle locator @type {import('@playwright/test').Locator}*/
    this.requestLoanTitle = page.getByRole('heading', { name: 'Apply for a Loan' })
    /** loanAmountInput locator @type {import('@playwright/test').Locator}*/
    this.loanAmountInput = page.locator('#amount')
    /** downPaymentInput locator @type {import('@playwright/test').Locator}*/
    this.downPaymentInput = page.locator('#downPayment')
    /** fromAccountSelect locator @type {import('@playwright/test').Locator}*/
    this.fromAccountSelect = page.locator('#fromAccountId')
    /** applyNowBtn locator @type {import('@playwright/test').Locator}*/
    this.applyNowBtn = page.locator('input[value="Apply Now"]')
    /** requestLoanProcessedTitle locator @type {import('@playwright/test').Locator}*/
    this.requestLoanProcessedTitle = page.getByRole('heading', { name: 'Loan Request Processed' })
    /** loanRequestTableRows locator @type {import('@playwright/test').Locator}*/
    this.loanRequestTableRows = page.locator('table tbody tr')
    /** loanProviderName locator @type {import('@playwright/test').Locator}*/
    this.loanProviderName = page.locator('loanProviderName')
    /** responseDate locator @type {import('@playwright/test').Locator}*/
    this.responseDate = page.locator('#responseDate')
    /** loanStatus locator @type {import('@playwright/test').Locator}*/
    this.loanStatus = page.locator('#loanStatus')
    /** loanRequestDeniedMsg locator @type {import('@playwright/test').Locator}*/
    this.loanRequestDeniedMsg = page.locator('#loanRequestDenied')
    /** loanRequestApproved locator @type {import('@playwright/test').Locator}*/
    this.loanRequestApproved = page.locator('#loanRequestApproved')
    /** loanAccountId locator @type {import('@playwright/test').Locator}*/
    this.loanAccountId = page.locator('#newAccountId')
  }
  /**
   * Fills in the loan application form with the provided details and submits the application.
   *
   * @param {string} loanAmount - The amount of the loan to apply for.
   * @param {string} downPayment - The down payment amount for the loan.
   * @param {string} fromAccount - The account to be used for the loan application.
   * @returns {Promise<void>} A promise that resolves when the loan application has been submitted.
   */
  async applyForLoan(loanAmount, downPayment, fromAccount) {
    await this.loanAmountInput.fill(loanAmount)
    await this.downPaymentInput.fill(downPayment)
    await this.fromAccountSelect.selectOption(fromAccount)
    await this.applyNowBtn.click()
  }
}
