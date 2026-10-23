const { expect } = require("@playwright/test")

class Signup{
    constructor(page)
    {
        this.page=page
        this.signupdialog=page.getByRole('dialog', { name: 'Sign up' })
        this.username=this.signupdialog.locator('#sign-username')
        this.password=this.signupdialog.locator('#sign-password')
        this.siginupbtn=this.signupdialog.getByRole("button",{name:'Sign up'})
        this.signuplink=page.locator('#signin2')
        this.closebtn=this.signupdialog.getByLabel('Close')
    }
    async goto()
    {
        await this.page.goto("https://www.demoblaze.com/")
    }
    async clicksignuplink()
    {
        await this.signuplink.click()
        await expect(this.signupdialog).toBeVisible()
    }
    async entersignupcredential(username,password)
    {
        await this.username.fill(username)
        await this.password.fill(password)      
    }   
    async clicksignup(signupsuccess)
    {
        await this.siginupbtn.click()
        const dialog = await this.page.waitForEvent('dialog') 
        await expect(dialog.message()).toBe(signupsuccess)
        await dialog.accept()

    }
    async closesignup()
    {
        await this.closebtn.click()
        await expect(this.signupdialog).toBeHidden()  
    }
}
module.exports=Signup