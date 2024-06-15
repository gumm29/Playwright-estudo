// @ts-check
const { test } = require('@playwright/test')
const { Home } = require('../page/home')

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('testar tela google', async ({ page }) => {
  const home = new Home(page)
  await home.validacao
})