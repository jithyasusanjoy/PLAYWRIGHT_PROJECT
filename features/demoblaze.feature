Feature: Ecommerce Validation
@web
Scenario: Validate Signup
Given The username "jithyatest12" and password "Jithya10test2" click on the Signup button
When the user clicks the Sign up button
Then a confirmation message "Sign up successful." is displayed and accepted

@web
Scenario: Close Sign up popup
Given the user opens the Sign up popup
When the user clicks the close button on the Sign up popup
Then the Sign up popup is closed
@web
Scenario: Validate login with valid credentials
Given The valid username "jithya" and password  "Jithya10"
When  The user clicks the login button
Then  The user should see "jithya" in the navbar

@web
Scenario Outline: Validate login with wrong credentials
Given The wrong username "<username>" or password combination "<password>" and click on the login button
Then Verify error message "<message>" is displayed

Examples:
    | username     | password     | message              |
    | jithyaparrot | Jithya10     | User does not exist. |
    | jithya       | WrongPass123 | Wrong password.      |
    | jithyaparrot | WrongPass123 | User does not exist. |

  
@web
Scenario Outline: Add <product> to cart
  Given The valid username "jithya" and password  "Jithya10"
  When The user clicks the login button
  Then The user should see "jithya" in the navbar
  When the user selects category "<category>" and opens product "<product>"
  And the user clicks Add to cart
  Then a "Product added." alert is displayed and accepted

  Examples:
    | category | product           |
    | Laptops  | Sony vaio i5      |


@web
 Scenario Outline: Purchase <product>
  Given The valid username "jithya" and password  "Jithya10"
  When The user clicks the login button
  Then The user should see "jithya" in the navbar
  When the user selects category "<category>" and opens product "<product>"
  And the user clicks Add to cart
  Then a "Product added." alert is displayed and accepted
  When the user opens the cart and sees "<product>"
  And the user clicks Place Order
  And the user fills the order details
    | name    | malu      |
    | country | Germany   |
    | city    | stuttgart |
    | card    | 234232    |
    | month   | 12        |
    | year    | 2026      |
  And the user clicks Purchase
  Then the message "Thank you for your purchase!" is displayed and the user clicks OK

  Examples:
    | category | product           |
    | Phones   | Samsung galaxy s6 |
    | Monitors | ASUS Full HD      |   

@web
Scenario: Logout after valid login
  Given The valid username "jithya" and password  "Jithya10"
  When The user clicks the login button
  Then The user should see "jithya" in the navbar
  When The user clicks the Log out link
  Then The user should be logged out 