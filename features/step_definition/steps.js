const { Given, When, Then } = require("@cucumber/cucumber");
const POManager = require("../../pages/POManager");
const { expect } = require("@playwright/test");

//Signup scenario
Given('The username {string} and password {string} click on the Signup button', async function (signupusername, signuppassword) {
    this.pomanager=new POManager(this.page)
    this.signup=this.pomanager.getSignup()
    await this.signup.goto()
    await this.signup.clicksignuplink()
    await this.signup.entersignupcredential(signupusername + Date.now(),signuppassword)
});

When('the user clicks the Sign up button',async function () {
   await this.signup.clicksignupbtn()
});

Then('a confirmation message {string} is displayed and accepted',async function (signupsuccess) {
  await this.signup.clicksignup(signupsuccess) 
});

// Signup Close

Given('the user opens the Sign up popup',async function () {
  this.pomanager=new POManager(this.page)
  this.signup=this.pomanager.getSignup()
  await this.signup.goto()
  await this.signup.clicksignuplink()
});

When('the user clicks the close button on the Sign up popup',async function () {
  await this.signup.closesignup()
});

Then('the Sign up popup is closed',async function () {
  await this.signup.validateclosesignup()
});

// Validate login with valid credentials

Given('The valid username {string} and password  {string}',async function (validusername, validpassword) {
    this.pomanager=new POManager(this.page)
    this.signup=this.pomanager.getSignup()
    this.login=this.pomanager.getLogin()
    await this.signup.goto()
    await this.login.clicksloginlink()
    await this.login.enterlogincredential(validusername,validpassword)
});

When('The user clicks the login button',async function () {
   await this.login.clickloginbtn()
});

Then('The user should see {string} in the navbar',async function (validusername) {
  await this.login.validusernamepassword(validusername)
});

// Wrong login credential 3-scenarios

Given('The wrong username {string} or password combination {string} and click on the login button',async function (username, password) {
    this.pomanager = new POManager(this.page)
    this.signup=this.pomanager.getSignup()
    this.login=this.pomanager.getLogin()
    await this.signup.goto()
    await this.login.clicksloginlink()
    await this.login.enterlogincredential(username,password)
    await this.login.clickloginbtn()
});

Then('Verify error message {string} is displayed',async function (message) {
    const validationmessage = await this.login.loginresponsedialog()   
    expect(validationmessage).toBe(message) 
});

//Add to cart
When('the user selects category {string} and opens product {string}', async function (category, product) {
    this.dashboard = this.pomanager.getDashboard()
    await this.dashboard.selectproduct(category, product)
    this.productdetails = this.pomanager.getProductdetails()
    await this.productdetails.verifyproduct(product)
});

When('the user clicks Add to cart', async function () {
    await this.productdetails.clickaddtocart()          // starts listening, then clicks
});

Then('a {string} alert is displayed and accepted', async function (productaddmsg) {
    await this.productdetails.validateaddtocart(productaddmsg)
});


//purchase 

When('the user opens the cart and sees {string}',async function (string) {
  this.cart=this.pomanager.getCart()
  await this.cart.clickcartbtn()
});

When('the user clicks Place Order',async function () {
    await this.cart.clickplaceorderbtn()
    this.placeorder=this.pomanager.getPlaceorder()
    await this.placeorder.validateplaceorderpopup()
});

When('the user fills the order details',async function (dataTable) {
  const order = dataTable.rowsHash()
    await this.placeorder.shipname.fill(order.name)
    await this.placeorder.shipcountry.fill(order.country)
    await this.placeorder.shipcity.fill(order.city)
    await this.placeorder.shipcard.fill(order.card)
    await this.placeorder.shipmonth.fill(order.month)
    await this.placeorder.shipyear.fill(order.year)

});

When('the user clicks Purchase',async function () {
  await this.placeorder.purchasebtnclick()
});

Then('the message {string} is displayed and the user clicks OK',async function (message) {
  await this.placeorder.validateplaceorder(message)
});



//Logout

When('The user clicks the Log out link',async function () {
   this.logout=this.pomanager.getLogout()
    await this.logout.clicklogoutbtn()
});

Then('The user should be logged out',async function () {
  await this.logout.validatelogout()
});