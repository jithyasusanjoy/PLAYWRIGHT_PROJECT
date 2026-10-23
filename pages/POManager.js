const Cart = require("./Cart")
const Dashboard = require("./Dashboard")
const Login = require("./Login")
const Logout = require("./Logout")
const Placeorder = require("./Placeorder")
const ProductDetails = require("./ProductDetails")
const Signup = require("./Signup")

class POManager
{
    constructor(page){
        this.page=page
        this.signup= new Signup(page)
        this.login= new Login(page)
        this.dashboard= new Dashboard(page)
        this.cart= new Cart(page)
        this.placeorder= new Placeorder(page)
        this.productdetails= new ProductDetails(page)
        this .logout= new Logout(page)
    }
    getSignup()
    {
        return this.signup
    }
    getLogin()
    {
        return this.login
    }
    getDashboard()
    {
        return this.dashboard
    }
    getCart()
    {
        return this.cart
    }
    getPlaceorder()
    {
        return this.placeorder
    }
    getProductdetails()
    {
        return this.productdetails
    }
    getLogout()
    {
        return this.logout
    }


}
module.exports=POManager