// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/Formulaire/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/formulaire/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/Formulaire/index.html');

  await page
  .getByPlaceholder("name@example.com")
  .fill("playwright@microsoft.com") ;
  
  await page
  .getByPlaceholder("password")
  .fill("Yassine123") ;

  await page.getByRole('email').check();  //Cette ligne de code permet au programme de s'arreter et donc de pouvoir observer les résultat.(Ce nest pas sont utiliter première)
});
