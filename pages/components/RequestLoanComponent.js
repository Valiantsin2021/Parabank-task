//@ts-check
/**
 * Page object for the Login page
 * @class RequestLoanComponent
 */

export class RequestLoanComponent {
  /**
   * Class constructor for RequestLoanComponent.
   * @param {import('@playwright/test').Page} page - Page passed in the constructor of the Page Object Model.
   */
  constructor(page) {
    /**@type {import('@playwright/test').Page} page passed in a constructor of the POM */
    this.page = page
    /**@type {import('@playwright/test').Locator} requestLoanTitle locator*/
    this.requestLoanTitle = page.getByRole('heading', { name: 'Apply for a Loan' })
    /**@type {import('@playwright/test').Locator} loanAmountInput locator*/
    this.loanAmountInput = page.locator('#amount')
    /**@type {import('@playwright/test').Locator} downPaymentInput locator*/
    this.downPaymentInput = page.locator('#downPayment')
    /**@type {import('@playwright/test').Locator} fromAccountSelect locator*/
    this.fromAccountSelect = page.locator('#fromAccountId')
    /**@type {import('@playwright/test').Locator} applyNowBtn locator*/
    this.applyNowBtn = page.locator('input[value="Apply Now"]')
    /**@type {import('@playwright/test').Locator} requestLoanProcessedTitle locator*/
    this.requestLoanProcessedTitle = page.getByRole('heading', { name: 'Loan Request Processed' })
    /**@type {import('@playwright/test').Locator} loanRequestTableRows locator*/
    this.loanRequestTableRows = page.locator('table tbody tr')
    /**@type {import('@playwright/test').Locator} loanProviderName locator*/
    this.loanProviderName = page.locator('loanProviderName')
    /**@type {import('@playwright/test').Locator} responseDate locator*/
    this.responseDate = page.locator('#responseDate')
    /**@type {import('@playwright/test').Locator} loanStatus locator*/
    this.loanStatus = page.locator('#loanStatus')
    /**@type {import('@playwright/test').Locator} loanRequestDeniedMsg locator*/
    this.loanRequestDeniedMsg = page.locator('#loanRequestDenied')
    /**@type {import('@playwright/test').Locator} loanRequestApproved locator*/
    this.loanRequestApproved = page.locator('#loanRequestApproved')
    /**@type {import('@playwright/test').Locator} loanAccountId locator*/
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
