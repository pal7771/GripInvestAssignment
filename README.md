# Getting Started with Create React App

This project is to develop the UI which contains the dropdown element and the content of the dropdown should be fetched by the api calls. I have used the React to developed the Frontend and Node.js as the Backnend.

So before start of the application we need to configure our database(Mysql) which contains our entities(assets, clients and order).

I am assuming that these are the following details into our database

///////////////////////
username: root
password: ''
////////////////////

so our database would be "Entities" which contains the following table 

1. clients (
2. orders
3. assets

so before gets started let run the following script into the mysql database;

////////////////////////////////////////////////////////////////////////
create database Entities;

use Entities;

CREATE TABLE `clients` (
	`ClientId` int(11) NOT NULL auto_increment,
    `Name` varchar(45) default null,
    primary key( `ClientId` )
) engine=InnoDB auto_increment=0 default charset=utf8mb4;

CREATE TABLE `orders` (
	`OrderId` int(11) NOT NULL auto_increment,
    `Name` varchar(45) default null,
    primary key( `OrderId` )
) engine=InnoDB auto_increment=0 default charset=utf8mb4;

CREATE TABLE `assets` (
	`AssetId` int(11) NOT NULL auto_increment,
    `Name` varchar(45) default null,
    primary key( `AssetId` )
) engine=InnoDB auto_increment=0 default charset=utf8mb4;

/////////////////////////////////////

let's add some data to it
/////////////////////////////////////////
use Entities;

insert into `clients` values(1, 'clients1'), (2, 'clients2'),(3, 'clients3'),(4, 'clients4');

insert into `orders` values(1, 'orders1'), (2, 'orders2'),(3, 'orders3'),(4, 'orders4');

insert into `assets` values(1, 'assets1'), (2, 'assets2'),(3, 'assets3'),(4, 'assets4');

/////////////////////////////////////////////

### To run the backend go into the Node/ director and type `node index.js`
our backend will run at the [http://localhost:3001](http://localhost:3001)

## Learn More


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
