const { expect } = require("@playwright/test");

class Logout{
    constructor(page)
    {
        this.page=page
        this.logoutbtn=page.getByRole('link', { name: 'Log out' })
        this.welcome=page.getByRole('link', { name: /^Welcome / })
    }
    async validatelogout()
    {
        await this.logoutbtn.click();
        await expect(this.welcome).toBeHidden()
    }
}
module.exports=Logout