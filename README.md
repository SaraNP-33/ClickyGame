<p align="center">
  <img src="./src/logo.png">
</p>

<h1 align="center">
<b>Clicky Game</b>
</h1>

## How to play:

This is a simple game where when the user clicks on an image card, all the images will shuffle to a new postion. The goal is not to click on the same image twice to win the game. 

## Sample Images

![game](./src/game.gif)

_____

## APP Features

This project was built using React as the front-end generator. In order to generate a new react app the following command line was entered in the node terminal:

`````
create-react-app clickygame
`````
Once the app was created then the work could begin. Since this is only a front end application very little dependencies were used. 

The only dependency used was to allow this app the be deployed as a static website on github pages. 

````
npm install gh-pages --save-dev
````
Once this dependency is installed we need to change to package.json to allow the deployment to happen. 

First we add a homepage to the package.json where we put the github page link to our app. and then we add these two lines to the scripts:

`````
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
`````
Once that is done, this line is ran in the command line:

```
npm run deploy
````

If everything goes well the app is deployed in github in a new branch called gh-pages. 

____

## Building Tools
- JSX
+ CSS
- JavaScript
+ ES6 
- React  
+ Node.JS
- GitHub
___

# Github Pages Link

[Scrubs Clicky Game](https://saranp-33.github.io/ClickyGame/)

## Authors

* Sara Neves Pereira


