const {test, expect} = require("@playwright/test");

test('signup to application',async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.locator('#signin2').click()
    const signupDialog = page.getByRole('dialog', { name: 'Sign up' });
    await expect(signupDialog).toBeVisible();
    await page.locator('#sign-username').fill('jithya')
    await page.locator('#sign-password').fill('Jithya10')
    await page.getByRole("button",{name:'Sign up'}).click() 
    await page.pause()
})
test('close signup popup ',async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.locator('#signin2').click()
    const signupDialog = page.getByRole('dialog', { name: 'Sign up' });
    await expect(signupDialog).toBeVisible();
    await signupDialog.locator('#sign-username').fill('jithya')
    await signupDialog.locator('#sign-password').fill('Jithya10')
    await signupDialog.getByLabel('Close').click();
    await page.pause()
})

test('login with valid username and password',async({page})=>{
     await page.goto('https://www.demoblaze.com/');
      await page.getByRole('link', { name: 'Log in' }).click();
      const loginDialog = page.getByRole('dialog', { name: 'Log in' });
      await expect(loginDialog).toBeVisible();
      await loginDialog.locator('#loginusername').fill('jithya');
      await loginDialog.locator('#loginpassword').fill('Jithya10');
      await loginDialog.getByRole('button', { name: 'Log in' }).click();
      await expect(page.getByRole('link', { name: 'Welcome jithya' })).toBeVisible();
      await page.pause()
})
test('login with invalid username and valid password',async({page})=>{
      await page.goto('https://www.demoblaze.com/');
      await page.getByRole('link', { name: 'Log in' }).click();
      const loginDialog = page.getByRole('dialog', { name: 'Log in' });
      await expect(loginDialog).toBeVisible();
      await loginDialog.locator('#loginusername').fill('jithyaa');
      await loginDialog.locator('#loginpassword').fill('Jithya10');
      await loginDialog.getByRole('button', { name: 'Log in' }).click();
      const dialog =await page.waitForEvent('dialog');
      expect(dialog.message()).toBe('User does not exist.');
      await dialog.accept(); 
})

test('login with valid username and invalid password',async({page})=>{
     await page.goto('https://www.demoblaze.com/');
      await page.getByRole('link', { name: 'Log in' }).click();
      const loginDialog = page.getByRole('dialog', { name: 'Log in' });
      await expect(loginDialog).toBeVisible();
      await loginDialog.locator('#loginusername').fill('jithya');
      await loginDialog.locator('#loginpassword').fill('Jithya106');
      await loginDialog.getByRole('button', { name: 'Log in' }).click();
      const dialog =await page.waitForEvent('dialog');
      expect(dialog.message()).toBe('Wrong password.');
      await dialog.accept();
})
test('login with invalid username and invalid password',async({page})=>{
     await page.goto('https://www.demoblaze.com/');
      await page.getByRole('link', { name: 'Log in' }).click();
      const loginDialog = page.getByRole('dialog', { name: 'Log in' });
      await expect(loginDialog).toBeVisible();
      await loginDialog.locator('#loginusername').fill('jithya1');
      await loginDialog.locator('#loginpassword').fill('Jithya108');
      await loginDialog.getByRole('button', { name: 'Log in' }).click();
      const dialog =await page.waitForEvent('dialog');
      expect(dialog.message()).toBe('User does not exist.');
      await dialog.accept(); 
      await page.pause()
})


test('Add product to cart',async({page})=>{
     await page.goto('https://www.demoblaze.com/');
      await page.getByRole('link', { name: 'Log in' }).click();
      const loginDialog = page.getByRole('dialog', { name: 'Log in' });
      await expect(loginDialog).toBeVisible();
      await loginDialog.locator('#loginusername').fill('jithya');
      await loginDialog.locator('#loginpassword').fill('Jithya10');
      await loginDialog.getByRole('button', { name: 'Log in' }).click();
      await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
      await expect(page.getByRole('heading', { name: 'Samsung galaxy s6' })).toBeVisible();
      await page.getByRole('link', { name: 'Add to cart' }).click()
      const dialog =await page.waitForEvent('dialog');
      expect(dialog.message()).toBe('Product added.');
      await dialog.accept();
      await page.pause()
})


test('Purchase product -phone',async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    const loginDialog = page.getByRole('dialog', { name: 'Log in' });
    await expect(loginDialog).toBeVisible();
    await loginDialog.locator('#loginusername').fill('jithya');
    await loginDialog.locator('#loginpassword').fill('Jithya10');
    await loginDialog.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    await expect(page.getByRole('heading', { name: 'Samsung galaxy s6' })).toBeVisible();
    await page.getByRole('link', { name: 'Add to cart' }).click()
    const dialog =await page.waitForEvent('dialog');
    expect(dialog.message()).toBe('Product added.');
    await dialog.accept();
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    const orderDialog = page.getByRole('dialog', { name: 'Place order' });
    await expect(orderDialog).toBeVisible();
    await orderDialog.locator('#name').fill('Jithya');
    await orderDialog.locator('#country').fill('Germany');
    await orderDialog.locator('#city').fill('Berlin');
    await orderDialog.locator('#card').fill('4111111111111111');
    await orderDialog.locator('#month').fill('10');
    await orderDialog.locator('#year').fill('2026');
    await orderDialog.getByRole('button', { name: 'Purchase' }).click();
    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.pause()
})

test.only('Purchase product -monitors',async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    const loginDialog = page.getByRole('dialog', { name: 'Log in' });
    await expect(loginDialog).toBeVisible();
    await loginDialog.locator('#loginusername').fill('jithya');
    await loginDialog.locator('#loginpassword').fill('Jithya10');
    await loginDialog.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Monitors' }).click();
    await page.getByRole('link', { name: 'ASUS Full HD' }).click();
    await expect(page.getByRole('heading', { name: 'ASUS Full HD' })).toBeVisible();
    await page.getByRole('link', { name: 'Add to cart' }).click()
    const dialog =await page.waitForEvent('dialog');
    expect(dialog.message()).toBe('Product added.');
    await dialog.accept();
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    const orderDialog = page.getByRole('dialog', { name: 'Place order' });
    await expect(orderDialog).toBeVisible();
    await orderDialog.locator('#name').fill('Jithya');
    await orderDialog.locator('#country').fill('Germany');
    await orderDialog.locator('#city').fill('Berlin');
    await orderDialog.locator('#card').fill('4111111111111111');
    await orderDialog.locator('#month').fill('10');
    await orderDialog.locator('#year').fill('2026');
    await orderDialog.getByRole('button', { name: 'Purchase' }).click();
    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.pause()
})


test('login with valid credentials and logout',async({page})=>{
     await page.goto('https://www.demoblaze.com/');
      await page.getByRole('link', { name: 'Log in' }).click();
      const loginDialog = page.getByRole('dialog', { name: 'Log in' });
      await expect(loginDialog).toBeVisible();
      await loginDialog.locator('#loginusername').fill('jithya');
      await loginDialog.locator('#loginpassword').fill('Jithya10');
      await loginDialog.getByRole('button', { name: 'Log in' }).click();
      await page.getByRole('link', { name: 'Log out' }).click();
      await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
      await page.pause()
})