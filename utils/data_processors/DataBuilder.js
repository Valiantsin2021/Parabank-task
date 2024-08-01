import { faker } from '@faker-js/faker'

/**
 * Module for generating test data.
 * @module UserBuilder
 */

export class UserBuilder {
  constructor() {
    /**
     * The user object being constructed.
     * @type {Object}
     * @private
     */
    this.user = {}
  }
  /**
   * Set default values for user properties using faker library.
   *
   * @return {Object} The updated object with default values set.
   */
  setDefaults() {
    this.user.firstname = faker.person.firstName('male')
    this.user.lastname = faker.person.lastName('male')
    this.user.email = faker.internet.email().toLowerCase()
    this.user.username = faker.internet.userName() + faker.string.numeric(4)
    this.user.password = faker.internet.password()
    this.user.repeatedPassword = this.user.password
    this.user.phoneNumber = faker.string.numeric(9)
    this.user.address = faker.location.streetAddress({ useFullAddress: true })
    this.user.city = faker.location.city()
    this.user.state = faker.location.state()
    this.user.zipcode = faker.location.zipCode()
    this.user.country = faker.location.country()
    this.user.ssn = '' + faker.number.int({ min: 100000000, max: 999999999 })
    return this
  }
  /**
   * Set the first name for the user.
   *
   * @param {string} firstname - the first name to be set
   * @return {object} this - for method chaining
   */
  withFirstName(firstname) {
    this.user.firstname = firstname
    return this
  }
  /**
   * Set the last name of the user.
   *
   * @param {string} lastname - the last name to set
   * @return {object} - the current object for chaining
   */
  withLastName(lastname) {
    this.user.lastname = lastname
    return this
  }
  /**
   * Set the email for the user.
   *
   * @param {string} email - the email to be set for the user
   * @return {Object} - the current object instance
   */
  withEmail(email) {
    this.user.email = email
    return this
  }
  /**
   * Set the password for the user.
   *
   * @param {string} password - the password to set for the user
   * @return {Object} - the current object instance
   */
  withPassword(password) {
    this.user.password = password
    return this
  }
  /**
   * Assigns a phone number to the user.
   *
   * @param {number} number - the phone number to assign
   * @return {Object} the current object instance
   */
  withPhoneNumber(number) {
    this.user.phoneNumber = number
    return this
  }
  /**
   * Set the street for the user.
   *
   * @param {string} address - The street to set for the user
   * @return {Object} - The current object instance
   */
  withAddress(address) {
    this.user.address = address
    return this
  }
  /**
   * Set the city for the user.
   *
   * @param {string} city - the city to set for the user
   * @return {Object} this - the object with the updated city
   */
  withCity(city) {
    this.user.city = city
    return this
  }
  /**
   * Set the state of the user and return the updated object.
   *
   * @param {string} state - the new state to set for the user
   * @return {Object} the updated object with the new state
   */
  withState(state) {
    this.user.state = state
    return this
  }
  /**
   * Sets the postal code for the user.
   *
   * @param {string} zipcode - The postal code to be set
   * @return {Object} this - The current object for method chaining
   */
  withPostalCode(zipcode) {
    this.user.zipcode = zipcode
    return this
  }
  /**
   * Sets the country for the user.
   *
   * @param {string} country - the country to set for the user
   * @return {Object} - the updated object with the country set
   */
  withCountry(country) {
    this.user.country = country
    return this
  }
  /**
   * Set the ssn for the user.
   *
   * @param {string} ssn - the ssn number to set
   * @return {Object} - the updated object with the ssn number set
   */
  withSSN(ssn) {
    this.user.ssn = ssn
    return this
  }
  /**
   * A method to build user object.
   *
   * @return {Object} the user object
   */
  build() {
    return this.user
  }
}
export const user = new UserBuilder().setDefaults().build()
