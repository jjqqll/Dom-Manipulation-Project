
$(document).ready(function() {
// function that creates multiple divs/'boxes' inside the 'container'
  for (let i = 0; i < 256; i++ ) {
    $('.container').append("<div class='box'></div>");
  };

// starting color: black
  $('.container').on('mouseenter', '.box', (event) => {
    $(event.target).css("background-color", 'black');
  })

// function that resets box-sizing
  $('#reset').click(() => {
// prompt to get new number of squares
    let newGrid = prompt('How many squares per side to make the new grid?', 16);
// removes the original child elements/(divs/'boxes') inside the 'container'
    $('.container').empty();
// updates the number of squares per row and col with the new number
    $('.container').css("grid-template", `repeat(${newGrid}, 1fr) / repeat(${newGrid}, 1fr)`);
// creates multiple divs/'boxes' in the 'container' with the newly entered number
    for (let i = 0; i < `${newGrid * newGrid}`; i++ ) {
      $('.container').append("<div class='box'></div>");
    };
  });

// function that changes to black on click
  $('#black').click(() => {
    $('.container').on('mouseenter', '.box', (event) => {
      $(event.target).css("background-color", 'black');
    })
  })

  $('#rainbow').click(() => {
  // function that changes the box color on 'mouseenter'
     $('.container').on('mouseenter', '.box', (event) => {
       // changes to random colors
         let ranColor1 = Math.floor(Math.random()*250);
         let ranColor2 = Math.floor(Math.random()*250);
         let ranColor3 = Math.floor(Math.random()*250);
         $(event.target).css("background-color", `rgb(${ranColor1}, ${ranColor2}, ${ranColor3})`);
     })
  })
});
