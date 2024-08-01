// @ts-check
import { defineConfig } from '@playwright/test'
import 'dotenv/config'
const date = new Date().getTime()
const outputDir = `./report/${date}`
const isCI = !!process.env.CI

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  timeout: 80_000,
  expect: {
    timeout: 5_000
  },
  ignoreSnapshots: isCI,
  testDir: './projects',
  testMatch: ['*.spec.js'],
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 3 : undefined,
  reportSlowTests: null,
  reporter: [
    ['list', { printSteps: true }],
    [
      'monocart-reporter',
      {
        name: 'My Test Report',
        outputFile: `${outputDir}/index.html`
      }
    ],
    [
      'allure-playwright',
      {
        detail: true,
        outputFolder: './report/allure-results',
        suiteTitle: true,
        environmentInfo: {
          Environment: process.env.ENV,
          User: process.env.USER,
          NodeJS_version: process.version,
          OS: process.platform
        }
      }
    ],
    ['junit', { outputFile: `./report/playwright_${new Date().getTime()}.xml` }]
  ],
  use: {
    bypassCSP: true,
    retries: 1,
    viewport: null,
    launchOptions: { args: ['--start-maximized', '--ignore-certificate-errors'] },
    baseURL: 'https://parabank.parasoft.com',
    headless: true,
    trace: 'on-first-retry',
    video: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    { name: 'test:ui_setup', testMatch: /auth_ui\.setup\.js/, use: { channel: 'chrome', headless: true } },
    {
      name: 'UI_tests',
      testMatch: /\w+_\w+\.ui\.spec\.js/,
      use: {
        channel: 'chrome'
      },
      dependencies: ['test:ui_setup']
    },
    {
      name: 'Smoke_tests',
      testMatch: /\w+_\w+\.smoke\.spec\.js/,
      use: {
        channel: 'chrome'
      }
    }
  ]
})
