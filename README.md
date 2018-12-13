# wheel-of-fortune
## made by Shannon Moranetz (@shannonmoranetz) and Dylan Hofmann (@dylhof)

The 'Game Time' project challenged us to recreate the classic gameshow Wheel of Fortune.  With four rounds where three players can compete to guess the hidden word puzzle, our game is a 8bit themed take on Wheel of Fortune offering three options to the competitors.  They can spin the wheel to accumulate money and guess a letter, buy a vowel, or take their chances to solve the puzzle and add their money to their grand total.  The person with the highest grand total at the end gets to play a bonus round and wins the game. 

To try your hand at our game, find a few friends and follow this link LINK HERE!

If you would like to contribute to our project follow these instructions to clone the code: 
  1. fork the repo
  2. Open Terminal.
  3. Change the current working directory to the location where you want the cloned directory to be made.
  4. git clone https://github.com/dylhof/wheel-of-fortune.git
  5. Press Enter. Your local clone will be created.
  6. Run npm init --yes to create the package.json file.
  7. Edit the scripts portion of the package.json file:
        "test": "./node_modules/mocha/bin/mocha --require babel-core/register test",
        "start": "webpack"
  8. Install the following dev dependencies: npm install --save-dev mocha chai eslint
  9. Install the following dependencies:
      npm install webpack webpack-cli babel-loader babel-cli babel-eslint babel-preset-env style-loader css-loader

<img width="1422" alt="wheel-of-fortune" src="https://user-images.githubusercontent.com/37079656/49919034-6c2def80-fe62-11e8-86e4-a2e42f38039c.png">

 If you would like to know our plans for future development, please see the issues section of our gitHub repo.
