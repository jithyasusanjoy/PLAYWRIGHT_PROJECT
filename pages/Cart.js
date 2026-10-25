const { expect } = require("@playwright/test");

class Cart{

constructor(page)
{
    this.page=page
    this.cartlink=page.getByRole('link', { name: 'Cart', exact: true })
    this.placeorferbtn=page.getByRole('button', { name: 'Place Order' })
}
async clickcartbtn()
{
    await this.cartlink.click();
    await expect(this.page).toHaveURL(/cart\.html/)
}  
async clickplaceorderbtn()
{ 
    await this.placeorferbtn.click();
}  
}
module.exports=Cart