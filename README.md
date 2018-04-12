# Pantry: Nashville Software School Capstone 1

Welcome to Pantry, an app that takes the food you have on hand and finds delicious recipes for you and your family!

## Getting Started

1. Create a local repository on your computer.
2. Fork or clone this project into your local repository.
3. Use `git init` in your command line to initialize the repository.
4. If forked, create your README and include any changes made.
5. If forked, use `git add .` and `git commit -m "first commit" in your command line.
6. Go to [firebase](https://firebase.google.com/) and create a new project.
7. Get your firebase Key, AuthDomain, and database URL and place those in an object returned by a function: `function fireBaseKey(){
    return{
    apiKey: "XxxXXXXXxxXXXXXX",
    authDomain: "pantry-xXXXxx.firebaseapp.com",
    databaseURL: "https://pantry-xXXXxx.firebaseio.com"
    };
}
`
8. Set Fire Base rules `{
  "rules": {
    ".read": true,
    ".write": true,
      "users": {
        ".indexOn" : ["uid"]
        },
      "recipes": {
        ".indexOn" : ["uid"]
      }
  }
}`
7. Go to [Spoonacular](https://market.mashape.com/spoonacular/recipe-food-nutrition) and get yourself an API key.
8. Create another Javacript file that holds the API information: `let spoonKey = {
    apiKey: "xxxxXXXxxxXxXXxxxxXXxxx",
    domain: "spoonacular-recipe-food-nutrition-v1.p.mashape.com",
    ingredients: "/recipes/findByIngredients",
  };`
9. Happy Coding!
10. When viewing in browser console, be sure to toggle the viewport to iPhone 6/7/8

### Prerequisite

Ensure that the following dependencies are installed to the node modules within the lib folder:
1. Grunt
2. Bootstrap
3. SASS
4. JQuery
## Built With

* [JQuery](https://jquery.com/)
* [Boostrap](https://getbootstrap.com/)
* [Sass](https://sass-lang.com/)

## Contributing
[Report Issues Here](https://github.com/Taylor-Bailey/Pantry-Capstone-1/issues)
[Bug Reporting Outline](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Bug_writing_guidelines#General_Outline_of_a_Bug_Report)

## Author

* **Taylor Bailey** - *Initial work* - [linkdIn](https://www.linkedin.com/in/taylor-bailey-699aa8146/)


## Special Thanks

* Arthur Smith
* Meghan School
* Lindsay Mulhollen
* Sam Kimball
* Laura Pinell
* Carly Sierra
* Melissa Wheatley
* Brenda Long
* Susan Culkin 
* Greg Korte
