export const constants = {
  defaultAccountBalance: /\$\d+\.\d{2}/,
  defaultTransferAmount: '$100.00',
  defaultAccountAfterTransferBalance: /\$\d+\.\d{2}/,
  emptyAccountAmount: '$0.00',
  validLoanAmount: '200',
  invalidLoandAmount: '1000000',
  validDownAmount: '100',
  invalidDownAmount: '2000000',
  loanApprovedStatusMsg: 'Approved',
  loanApprovedSuccessMsg: 'Congratulations, your loan has been approved.',
  loanDeniedDownPaymentMsg: 'You do not have sufficient funds for the given down payment.',
  loanDeniedAmountPaymentMsg: 'We cannot grant a loan in that amount with your available funds.',
  loanDeniedStatusMsg: 'Denied',
  savingAccountType: 'SAVINGS',
  checkingAccountType: 'CHECKING',
  loanAccountType: 'LOAN',
  billPaymentTransaction: 'Bill Payment to',
  transferTransaction: 'Funds Transfer Received',
  billPaymentErrorMsg: [
    'Payee name is required.',
    'Address is required.',
    'City is required.',
    'State is required.',
    'Zip Code is required.',
    'Phone number is required.',
    'Account number is required.',
    'Account number is required.',
    'The amount cannot be empty.'
  ]
}