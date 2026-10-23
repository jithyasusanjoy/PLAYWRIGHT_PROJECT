class Cart{

constructor(page)
{
    this.page=page
    this.cartlink=page.getByRole('link', { name: 'Cart', exact: true })
    this.placeorferbtn=page.getByRole('button', { name: 'Place Order' })
}
async placeorder()
{
    await this.cartlink.click();
    await this.placeorferbtn.click();
}  
}
module.exports=Cart