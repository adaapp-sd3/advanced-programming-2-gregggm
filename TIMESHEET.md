Timesheet
=========

**Looking through and understanding code - 1 hour**
At the start of the assignemnt I first looked thouroughly through the code, both to understand the domain and functionality that was there and also to familiarise myself with the technologies and concepts being used. This mainly consisted of looking through the different models and the inheritence chain and relationship between the objects as well as looking into typescript features that were new to me such as abstract classes and interfaces.

**Code refactor - 8 hours**
The first thing I set out to do after understanding the codebase was to refactor the code in some key areas. This ended up being quite a massive task as I rebuilt large parts of the codebase from scratch. The areas I focussed of were the game state, initial set up and draw functionality, where I looked for a way to simplify the dependacies objects had on each other as well as isolate the integration with the p5 library in a clearer way. To do this I created a GameState class and normalised the states structure to reducie the nesting resulting from interdependant objects. I then added a GameDrawer class that was in charge of both instantiating p5 and drawing the game as well us uptdating the UI with the game state. Using dependancy injection the GameDrawer could preload assets and draw all drawable items in its state leaving the rest of the code base isolated from any specific drawing implementation.

**Weather - 3 hours**
Using the open weather api I added weather tracking to the app. This was done by adding a Weather class, which performs the request to the weather api periodically and draws the weather information and visuals on the farm.

**Currency exchange - 1 hour**
Using another api I added an exchange rate to the market. The market still needs further work so this has no full functionality at the moment - only a display of the current exchange rate.

**Produce yielding - 4 hours**
In order to yield produce I had to refactor some parts of the codebase. All field items (animals and crops) now implement a yield type which when yielded (by the field container) add items to the farmers inventory.

**Dashboard - 5 hours**
I decided to also completely refactor the dashboard. This was because I completely changed the state stucture of the game and also because I wanted to apply more functional techniques such as making use of react hooks to the UI section of the app. I spent quite a bit of time trying to get react hooks working by creating a useGameState hook that would perform all the set up and itegration that the p5 game and react UI required. However due to performance reason (extreme lag and low framerate) I decided to revert back to using a class compenent as the main app route - the useGameState hook can still be seen commented out above the class in App.js. This would need futher work and debuging to properly implement however I suspect that it may be a limitiation with react hooks as they are less performant that classes and this app does put a very high load on react as the state gets update with every loop of the p5 draw function. This is the main place I would work on if I had more time - trying to optimise the state updates so that only when key pieces of game state (game state that was not purely a visual change) would cause the react state to update or perhaps that the react diffing could chose to ignore some state fields entirely.

