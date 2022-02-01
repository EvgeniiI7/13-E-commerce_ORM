
# E-commerce_ORM (Back End)

This is a back-end E-commerce site using Express.js API, which has been configured with Sequelize in order to interact with a MySL database.

## User Story

```
AS A manager at an internet retail company i want a back end for my e-commerce website that uses the latest technologies.
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## to get Get Started you need to install some dependencies:
*  ``` npm install express sequelize mysql2 ```
*   ```npm istall express ```
*  ``` npm install dotenv ```

* to invoke the aplication please tipe:
 ``` npm run start```
it's will connected to the Database. App will listening on port 3001!

After it,  you can run all seeds fails using  the command line from Seeds folder, please tipe:
 ``` node index.js ```
 
### Database Models

* `Category`
  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `category_name`
    * String
    * Doesn't allow null values

* `Product`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_name`
    * String
    * Doesn't allow null values

  * `price`
    * Decimal
    * Doesn't allow null values
    * Validates that the value is a decimal

  * `stock`
    * Integer
    * Doesn't allow null values
    * Set a default value of 10
    * Validates that the value is numeric

  * `category_id`
    * Integer
    * References the `category` model's `id` 

* `Tag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `tag_name`
    * String

* `ProductTag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_id`
    * Integer
    * References the `product` model's `id`

  * `tag_id`
    * Integer
    * References the `tag` model's `id`

## Review


* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

https://drive.google.com/file/d/1R45TsYW_2p7R8cx5ScEzvvnE8ihk9x5C/view?usp=sharing

* The URL of the GitHub repository:

