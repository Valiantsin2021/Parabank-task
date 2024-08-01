// @ts-check
import { expect, test } from '@fixtures/fixtureUI.js'
import { CSVHandler } from '@utils/data_processors/CSVHandler.js'
import { UserBuilder } from '@utils/data_processors/DataBuilder.js'
import fs from 'fs'
const updateUserPairwisePath = './fixtures/test_data/update_user_pairwise.csv'

test.describe(`Parabank "Update Contact" module:`, { tag: '@user' }, () => {
  const user = JSON.parse(fs.readFileSync('./fixtures/test_data/user.json', 'utf8'))
  const updatedUser = new UserBuilder()
    .withFirstName(user.firstname)
    .withLastName(user.lastname)
    .withAddress('123 Updated St')
    .withCity('Updated city')
    .withState(user.state)
    .withPostalCode('12345')
    .withPhoneNumber('1234567890')
    .build()
  test.beforeEach(async ({ homePage, userMenuComponent }) => {
    await homePage.loginUser(user.username, user.password)
    await userMenuComponent.updateContactLink.click()
    await expect(await userMenuComponent.getLoggedInMsg(user.firstname, user.lastname)).toBeVisible()
  })
  test(`update the profile of logged in user happy path`, async ({ userMenuComponent, updateContactComponent }) => {
    await test.step(`update user profile with new data`, async () => {
      await expect.soft(updateContactComponent.updateProfileBtn).toBeVisible()
      await expect.soft(updateContactComponent.firstnameInput).toHaveValue(user.firstname)
      await updateContactComponent.clearUserDataFields()
      await updateContactComponent.updateUser(updatedUser)
      await expect.soft(updateContactComponent.updateSuccessTitle).toBeVisible()
      await expect.soft(updateContactComponent.updateSuccessMsg).toBeVisible()
    })
    await test.step(`verify the user data is updated correctly`, async () => {
      await userMenuComponent.updateContactLink.click()
      await expect(updateContactComponent.firstnameInput).toHaveValue(updatedUser.firstname)
      await expect(updateContactComponent.lastnameInput).toHaveValue(updatedUser.lastname)
      await expect(updateContactComponent.addressInput).toHaveValue(updatedUser.address)
      await expect(updateContactComponent.cityInput).toHaveValue(updatedUser.city)
      await expect(updateContactComponent.stateInput).toHaveValue(updatedUser.state)
      await expect(updateContactComponent.zipcodeInput).toHaveValue(updatedUser.zipcode)
      await expect(updateContactComponent.phoneNumberInput).toHaveValue(updatedUser.phoneNumber)
    })
  })
  test(`update the profile of logged in user with missing fields and verify error messages`, async ({
    userMenuComponent,
    updateContactComponent
  }) => {
    const pairwiseTable = await CSVHandler.parseCsvFile(updateUserPairwisePath)
    for (let i = 0; i < pairwiseTable.length; i++) {
      await userMenuComponent.updateContactLink.click()
      await expect.soft(updateContactComponent.firstnameInput).toHaveValue(user.firstname)
      await updateContactComponent.clearUserDataFields()
      await test.step(`Try to update user with missing fields: test data row ${i + 1} - ${JSON.stringify(Object.entries(pairwiseTable[i]))}`, async () => {
        for (let input of Object.keys(pairwiseTable[i])) {
          if (pairwiseTable[i][input] === 'TRUE') {
            await updateContactComponent[`${input}Input`].fill(updatedUser[`${input}`])
          }
        }
        await updateContactComponent.updateProfileBtn.click()
        for (let input of Object.keys(pairwiseTable[i])) {
          if (pairwiseTable[i][input] === 'FALSE') {
            await expect.soft(updateContactComponent[`${input}ErrorMsg`]).toBeVisible()
            await expect.soft(updateContactComponent.updateSuccessTitle).toBeHidden()
            await expect.soft(updateContactComponent.updateSuccessMsg).toBeHidden()
          }
        }
      })
    }
  })
  test.afterEach(async ({ homePage, userMenuComponent }) => {
    await userMenuComponent.logoutLink.click()
    await expect.soft(homePage.loginBtn).toBeVisible()
  })
})
