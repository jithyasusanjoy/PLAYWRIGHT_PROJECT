const { expect } = require("@playwright/test")

class Login{

    constructor(page)
    {
        this.page=page
        this.loginpopup=page.getByRole('dialog', { name: 'Log in' })
        this.loginlink=page.getByRole('link', { name: 'Log in' })
        this.lgnusername=page.locator('#loginusername')
        this.lgnpassword=page.locator('#loginpassword')
        this.loginbtn=page.getByRole("button",{name:'Log in'})
        this.welcome=page.getByRole('link', { name: /^Welcome / })
        
    }
    async clicksloginlink()
    {
        await expect(this.loginlink).toBeVisible();
        await this.loginlink.click();
        await expect(this.loginpopup).toBeVisible();
    }
    async enterlogincredential(lgnusername,lgnpassword)
    {
        await this.lgnusername.fill(lgnusername)
        await this.lgnpassword.fill(lgnpassword)    
    } 
    async clickloginbtn()                          
    {
        await this.loginbtn.click()
    }

  async loginresponsedialog()
    {
        await this.loginbtn.click()                              
        const dialog = await this.page.waitForEvent('dialog')                       
        const message = dialog.message()                         
        await dialog.accept()                                    
        return message
    }
    async validusernamepassword(username)
    {
        await expect(this.welcome).toHaveText(`Welcome ${username}`)
    }
}
module.exports=Login