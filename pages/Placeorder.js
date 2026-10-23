const { expect } = require("@playwright/test")

class Placeorder
{
    constructor(page)
    {
        this.page=page
        this.placeorderpopup=page.getByRole('dialog', { name: 'Place order' })
        this.shipname=this.placeorderpopup.locator('#name')                          
        this.shipcountry=this.placeorderpopup.locator('#country')
        this.shipcity=this.placeorderpopup.locator('#city')
        this.shipcard=this.placeorderpopup.locator('#card')
        this.shipmonth=this.placeorderpopup.locator('#month')
        this.shipyear=this.placeorderpopup.locator('#year')
        this.purchasebtn=this.placeorderpopup.getByRole('button', { name: 'Purchase' })
        this.purchaseresponse=page.getByRole('heading', { name: 'Thank you for your purchase!' })
        this.responseokbtn=page.getByRole('button', { name: 'OK' })
    }
 
    async validateplaceorderpopup()
    {
        const orderDialog = this.placeorderpopup
        await expect(orderDialog).toBeVisible();
    }
    async place_order(shipname,shipcountry,shipcity,shipcard,shipmonth,shipyear)
    {
        await this.shipname.fill(shipname);                    
        await this.shipcountry.fill(shipcountry);
        await this.shipcity.fill(shipcity);
        await this.shipcard.fill(shipcard);
        await this.shipmonth.fill(shipmonth);
        await this.shipyear.fill(shipyear);
        await this.purchasebtn.click();
    }
    async validateplaceorder()
    {
        await expect(this.purchaseresponse).toBeVisible();
        await this.responseokbtn.click();
    }
}
module.exports=Placeorder