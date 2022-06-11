# StoreWishList

[![MIT Badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)

## Description

For this project, we were tasked with creating a full-stack application that showcases the skills we have learned thus far in our course. Some of our requirements were to: 
* Use Node.js and Express.js to create RESTful API,
* Use Handlebars for templating, and MySQL and Sequelize for data,
* Write GET and POST routes for data addition and retrieval,
* Include a library or package not previously used in class,
* Use the MVC paradigm to organize our folders,
* Include user authentication and protect sensitive information,
* And deploy a polished UI application on Heroku.

We decided to build a Wish List Tracker, because we understand how hard it can be to remember what fun, new things you want to buy from all your favorite stores. This application allows users to create an account and then login at a later time. Our goal was that once logged in, the user can create a new store, and add a gift card plus its balance if they've got one, and also add any wishlist items they have from that store. Upon saving the store, its name will be displayed in a list of saved stores, and users can click on a store in order to display and edit the store's saved items and gift card data, or delete the store and all its associated data if they'd like. In order to do this, we created four models: User, Store, Giftcard, and Items.

## Troubleshooting and Road Blocks

However, due to issues we had with saving and fetching data across multiple models, we created a new model, NewStore, which housed the giftcard and item data within itself. The corresponding routes and associations were created, but ultimately, we were unable to display the user data on the site. Through the use of some console.log()s, it appears that the new store data being entered by a user is being collected and saved, but despite that, was not displaying under the user's list of saved store. 

We spent many hours attempting to fix the routes with several different REST api syntax methods, but ultimately could not find the root of our problem. We hope to use this as a learning moment for our future development careers, so that we can hopefully avoid problems like this on subsequent projects.

## User Story

```md
AS AN avid shopper
I WANT a site that allows me to save and edit stores, wish list items, and gift card data
SO THAT I can keep track of what items I want to buy from all my favorite stores
```

## Demonstration

The homepage of our site looks like 
![homepage](/Assets/Homepage.png)

The login page looks like
![login](/Assets/Login.png)

And the profile page looks like
![profile](/Assets/Profile.png)

This screen recording shows the console as a user saves a store, depicting that the store data/request.body do appear to be saved and collected, despite not displaying on the site
![console video](/Assets/Screen%20Recording%202022-06-11%20at%2008.53.22.mov)

## Links

To view our deployed application, checkout our [Heroku](https://aefzs-wishlistkeeper.herokuapp.com/) page.

Our initial project outline can be found [here](https://docs.google.com/document/d/1VM8x9V3RB4M111XoBBW3iHfdzmutCEYimLUaNarOv-Y/edit?usp=sharing).

A wireframe setup of our application can be viewed [here](https://www.figma.com/file/7E4kSoKQ7lYrzQ06BKtCr9/Wish-Keeper-Wireframe?node-id=0%3A1).

And our project presentation can be viewed by following [this link](https://docs.google.com/presentation/d/1hNsW55gy8Cug0tZ5fcUg5wtITZiIPphyYrzN69jnYKU/edit?usp=sharing).

## Dependencies and Technologies

Development of this application/ npm packages required:
1.  Express, 
2.  Express-Session, 
3.  Express-handlebars, 
4.  MySQL2, 
5.  Sequelize, 
6.  Connect-Session-Sequelize, 
7.  Bcrypt, 
8.  Dotenv, 
9.  ESLint, 
10. Eslint-Config-Prettier, 
11. Prettier, and
12. Darkmode-js

## Testing

No testing was necessary for this application.

## License

MIT License

Copyright (c) 2022 Elizabeth Larson, Zane Pisano, Francis Aguinaldo, Alexander Lazar, Shang Celsius

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.