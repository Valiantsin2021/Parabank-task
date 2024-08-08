// @ts-check
import { expect, test } from '@fixtures/fixtureUI.js'
import { user } from '@utils/data_processors/DataBuilder.js'
import fs from 'fs/promises'

const registrationPairwise = './fixtures/test_data/registration_fields_pairwise.csv'

test.describe(`Parabank user "Registration" module: `, { tag: '@visual' }, () => {
  test.beforeAll(async () => {
    await fs.writeFile('./fixtures/test_data/@register_test_user.json', JSON.stringify(user, null, 2))
  })
  test(`successfully register new user`, async ({ homePage, registerComponent }) => {
    await test.step(`click 'Register' link on Home page and naviage to Register component`, async () => {
      await homePage.registerLink.click()
      await expect.soft(registerComponent.title).toBeVisible()
    })
    await registerComponent.registerUser(user)
    await expect
      .soft(registerComponent.page)
      .toHaveScreenshot('register_success.png', { mask: [homePage.welcomeMessage, await registerComponent.getRegisterSuccessTitle(user.username)] })
  })
})
