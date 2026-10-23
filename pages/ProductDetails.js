const { expect } = require("@playwright/test")

class ProductDetails
{
    constructor(page)
    {
        this.page=page
        this.phonetitle=page.getByRole('heading', { name: 'Samsung galaxy s6' })
        this.laptoptitle=page.getByRole('heading', { name: 'Sony vaio i5' })
        this.monitortitle=page.getByRole('heading', { name: 'ASUS Full HD' })
        this.addtocartbtn=page.getByRole('link', { name: 'Add to cart' })
    }
async addphonetocart(productaddmsg)
{
        await expect(this.phonetitle).toBeVisible()
        await this.addtocartbtn.click()
        const dialog =await this.page.waitForEvent('dialog')
        expect(dialog.message()).toBe(productaddmsg);
        await dialog.accept()
}
async addlaptoptocart(productaddmsg)
{
        await expect(this.laptoptitle).toBeVisible();
        await this.addtocartbtn.click()
       const dialog =await this.page.waitForEvent('dialog')
        expect(dialog.message()).toBe(productaddmsg);
        await dialog.accept()
}
async addmonitortocart(productaddmsg)
{
        await expect(this.monitortitle).toBeVisible();
        await this.addtocartbtn.click()
        const dialog =await this.page.waitForEvent('dialog')
        expect(dialog.message()).toBe(productaddmsg);
        await dialog.accept()
}
}
module.exports=ProductDetails