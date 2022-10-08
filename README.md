# Recipedia

This project was built using React, Express.JS, Node.js, and MongoDB. The app allows users to search recipes and favorite them. They can then go into favorited recipes and track whether or not they have the ingredients. We also utilized react-router-dom for dynamic routing.



## The Approach taken
We focused on maximizing our communication from the get go. The first 2 days of the project we met and discussed possible projects. We used office hours on the second day to discuss different methods of colaborating and general project advice. We entered the proposal submission day with our project already planned. We met on zoom and worked on the project together at least every other day in which we did not have class.

Our initial step was having 2 people knock out the backend while the 3rd built the basic react app and got the api working. We then got the basic routes working for crud. 

Shortly after that we decided to use react-router-dom and split up to spend a few days focused on learning it. We also dipped into hooks. We came back together with a basic react-router set up and focused on getting the various elements closer to our end vision. We rebuilt our class components as functional components with hooks at this point.

We then focused on CSS. We did the early CSS through mob coding where one person was coding while the others were focused on assisting them. This felt very effective and allowed instant feedback on design decisions such as colors, fonts, and layout. 

Finally we slowly polished different aspects with some focusing more on the react functionality while others focused on polishing the css.


## Unsolved Problems
There are no currently broken aspects but there is functionality we did not reach that we would have liked to hit. One example is a route to check the backend for an instance of a recipe and not adding it to favorites if it already exists. <br/>
The frontend currently pulls from the backend periodically. I would have liked for a better solution such as it receiving a signal or a trigger of some sort on rerender. That just wasn't a priority compared to more critical functionalities. <br/>


## User Stories
As a user I want to search for recipe from the api. <br/>
As a user I want to save them from the api. <br/>
As a user I want to update whether I have the ingredients. <br/>
As a user I want to be able to delete recipes from my saved lists. <br/>


## Future Additions
User accounts<br/>
Limiting search by cuisine or dietary needs<br/>
A larger recipe library<br/>
Removing some console logs and cleaning up the coding.<br/>
Put in error message for if no results. <br/>


### Links

Link to GitHub Repository (Backend): https://github.com/philgermano/recipedia-Back

Link to GitHub Repository (Frontend): https://github.com/philgermano/recipedia-Front

Link to Deployed Application (Backend): https://recipedia-ga-team1.herokuapp.com/recipes

Link to Deployed Application (Frontend): https://recipedia-ga-team1-front.herokuapp.com/



