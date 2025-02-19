import { test, expect } from '@playwright/test'

test('切换grid', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#show-different-grid-data')

  const container = page.locator('#show-different-grid-data')
  const tabA = container.getByRole('tab', { name: '表格组件A' })
  const tabB = container.getByRole('tab', { name: '表格组件B' })
  const content = container.getByRole('tabpanel').locator('.tiny-grid-header__column').first()

  await expect(content).toHaveCSS('width', '50px')
  await tabA.click()
  await expect(content).toHaveCSS('width', '60px')
  await tabB.click()
  await expect(content).toHaveCSS('width', '50px')
})
