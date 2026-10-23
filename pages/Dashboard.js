class Dashboard
{
    constructor(page)
    {
        this.page=page
        this.categoryphone=page.getByRole('link', { name: 'Phones' })
        this.phoneproduct=page.getByRole('link', { name: 'Samsung galaxy s6' })
        this.categorymonitor=page.getByRole('link', { name: 'Monitors' })
        this.monitorproduct=page.getByRole('link', { name: 'ASUS Full HD' })
        this.categorylaptop=page.getByRole('link', { name: 'Laptops' })
        this.laptopproduct=page.getByRole('link', { name: 'Sony vaio i5' })
    }
    async phoneproductclick()
    {
        await this.categoryphone.click()
        await this.phoneproduct.click();
    }
    async monitorproductclick()
    {
        await this.categorymonitor.click()
        await this.monitorproduct.click();
    }
    async laptopproductclick()
    {
        await this.categorylaptop.click()
        await this.laptopproduct.click();
    }

}
module.exports=Dashboard