Option 1
https://www.demoblaze.com/
- Add two products to the cart
- Display cart
- Fill purchase form
- Complete the order

Folder structure:
- demoblaze.cy.js contains all the actual test execution
- demoblaze.json is a fixture created to store user and products data
- support pages (cart and dashboard) includes actions for each specific page following page object model
- cypress.config.js contains the mail url and viewport configurations

How to run:
1. Clone the DEVSU repository from github to you local machine
2. Install dependencies with 'npm install'
3. Install cypress with 'npm install cypress --save-dev'
4. Execute the test running 'npx cypress open'