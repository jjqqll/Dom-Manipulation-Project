# Dom-Manipulation-Project

These are the instructions for this project.

1. Create a webpage with a 16x16 grid of square divs
    i. Create the divs using JavaScript... don't try making them by hand with copy and pasting in your html file!
    ii. Best to put your grid squares inside another "container" div (that one can go directly in your html)
    iii. There are several different ways to make the divs appear as a grid (verses just one on each line) feel free to use any or play with each of them:
        i.   float/clear
        ii.  inline-block
        iii. flexbox
    iv. Be careful with borders and margins, they can adjust the size of the squares!
    v. "OMFG, Why isn't my grid being created???"
        1. Open your browser's developer tools
        2. Check if there are any errors in the Javascript console
        3. Check your "elements" pane to see if the elements have actually shown up but are somehow hidden.
        4. Go willy-nilly and add  \`console.log\` statements in your javascript to see if it's actually being loaded.
2. Set up a "hover" effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
    i. Hint: "hovering" is what happens when your mouse enters a div and ends when your mouse leaves it.. you can set up event listeners for either or both of those events as a starting point.
    ii. There are multiple ways to change the color of the divs, including:
        i.   adding a new class to the div
        ii.  changing the div's background color programmatically.
3. Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you've got a new sketch pad.
    i.   research button tags in HTML and how you can make a JavaScript function run when one is clicked.
    ii.  also check out prompts
    iii. you should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used
4. (Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
5. Push your project to GitHub!
