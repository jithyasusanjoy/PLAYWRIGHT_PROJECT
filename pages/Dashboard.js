const { expect } = require("@playwright/test")

class Dashboard
{
    constructor(page)
    {
        this.page=page
      
    }
  

    async selectproduct(category, product)
    {
        await this.page.getByRole('link', { name: category, exact: true }).click()
        await this.page.getByRole('link', { name: product, exact: true }).click()
        await expect(this.page.getByRole('heading', { name: product })).toBeVisible()
    }

}
module.exports=Dashboard