// auth.setup.ts
import { expect, test as setup } from '@fixtures/fixtureUI.js'
import { user } from '@utils/data_processors/DataBuilder.js'
import 'dotenv/config'
import fs from 'fs'
const userFile = './fixtures/test_data/user.json'
/**
 * The method to perform user registration
 * @returns {void}
 */
function registerUser() {
  const stats = fs.existsSync(userFile.toString()) ? fs.statSync(userFile.toString()) : null
  if (stats && stats.mtimeMs > new Date().getTime() - 60_000) {
    console.log(`\x1b[2m\t***** Registering new user is skipped because user is fresh *****\x1b[0m`)
    return
  } else {
    setup('authenticate', async ({ homePage, registerComponent }) => {
      console.info(`\x1b[2m\t***** Registering new user started *****'\x1b[0m`)
      await homePage.openPage()
      await homePage.registerLink.click()
      await registerComponent.registerUser(user)
      await expect.soft(await registerComponent.getRegisterSuccessTitle(user.username)).toBeVisible()
      await expect.soft(registerComponent.registerSuccessMsg).toBeVisible()
      console.log(`\x1b[2m\t***** User registered: ${user.username} *****'\x1b[0m`)
      fs.writeFileSync('./fixtures/test_data/user.json', JSON.stringify(user, null, 2))
      await homePage.close()
    })
  }
}
registerUser()
