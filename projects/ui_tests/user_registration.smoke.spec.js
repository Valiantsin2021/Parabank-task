// @ts-check
import { expect, test } from '@fixtures/fixtureUI.js'
import { CSVHandler } from '@utils/data_processors/CSVHandler.js'
import { user } from '@utils/data_processors/DataBuilder.js'
import fs from 'fs/promises'

const registrationPairwise = './fixtures/test_data/registration_fields_pairwise.csv'

test.describe(`Parabank user "Registration" module: `, { tag: '@smoke' }, () => {
  test.beforeAll(async () => {
    await fs.writeFile('./fixtures/test_data/@register_test_user.json', JSON.stringify(user, null, 2))
  })
  test.beforeEach(async ({ homePage, registerComponent }) => {
    await test.step(`click 'Register' link on Home page and naviage to Register component`, async () => {
      await homePage.registerLink.click()
      await expect.soft(registerComponent.title).toBeVisible()
    })
  })
  test(`Try register new user with missing fields and verify error messages as per pairwise table`, async ({ homePage, registerComponent }) => {
    const pairwiseTable = await CSVHandler.parseCsvFile(registrationPairwise)
    for (let i = 0; i < pairwiseTable.length; i++) {
      await test.step(`Try to register new user: test data row ${i + 1} - ${JSON.stringify(Object.entries(pairwiseTable[i]))}`, async () => {
        for (let input of Object.keys(pairwiseTable[i])) {
          if (pairwiseTable[i][input] === 'TRUE') {
            await registerComponent[`${input}Input`].fill(user[`${input}`])
          }
        }
        await registerComponent.registerBtn.click()
        for (let input of Object.keys(pairwiseTable[i])) {
          if (pairwiseTable[i][input] === 'FALSE') {
            await expect.soft(registerComponent[`${input}ErrorMsg`]).toBeVisible()
            await expect.soft(await registerComponent.getRegisterSuccessTitle(user.username)).toBeHidden()
            await expect.soft(registerComponent.registerSuccessMsg).toBeHidden()
          }
        }
        await homePage.registerLink.click()
      })
    }
  })
  test(`Successfully register new user`, async ({ registerComponent }) => {
    await registerComponent.registerUser(user)
    await expect.soft(await registerComponent.getRegisterSuccessTitle(user.username)).toBeVisible()
    await expect.soft(registerComponent.registerSuccessMsg).toBeVisible()
  })
})
