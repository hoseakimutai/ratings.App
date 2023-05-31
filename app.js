var modal = document.getElementById("myRating");

var span = document.getElementsByClassName("close")[0];

var btn = document.getElementById("myBtn");

const submit = document.querySelector(".submit");

rate = document.querySelectorAll(".rate");

selected = document.querySelector(".selected")

var numbers = document.getElementsByClassName("numbers");

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
rate.forEach((rateBtns) => {
  rateBtns.addEventListener("click", () => {
    submit.addEventListener("click", () => {
      displayEnd.style.display = "block";
      displayStart.style.display = "none";
      selected.textContent = rateBtns.textContent;
    });
  });
});

document.querySelector(".btn-one").addEventListener
  ('click', function (e) {
    console.log('You have selected 1 out of 5');

    const target = e.target;

    if (target.matches('button')) {
      target.style.backgroundColor = 'yellow'
    };
  });


document.querySelector(".btn-two").addEventListener
  ('click', function (e) {
    console.log('You have selected 2 out of 5');

    const target = e.target;

    if (target.matches('button')) {
      target.style.backgroundColor = 'yellow'
    };
  });


document.querySelector(".btn-three").addEventListener
  ('click', function (e) {
    console.log('You have selected 3 out of 5');

    const target = e.target;

    if (target.matches('button')) {
      target.style.backgroundColor = 'yellow'
    };
  });


document.querySelector(".btn-four").addEventListener
  ('click', function (e) {
    console.log('You have selected 4 out of 5');

    const target = e.target;

    if (target.matches('button')) {
      target.style.backgroundColor = 'yellow'
    };
  });


document.querySelector(".btn-five").addEventListener
  ('click', function (e) {
    console.log('You have selected 5 out of 5');

    const target = e.target;

    if (target.matches('button')) {
      target.style.backgroundColor = 'yellow'
    };
  });





// document.querySelector('.rate-btns').addEventListener
//   ("click", function (e) {
//     console.log(e.target.getAttribute('id') + 'is clicked');

//     const target = e.target;

//     if (target.matches('button')) {
//       target.style.backgroundColor = 'yellow'
//     };
//   });




{/* <script>
      // Get the rating
      var modal = document.getElementById("myRating");

      // Get the button that submits the rating
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the rating
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks the button, Submit 
      btn.onclick = function () {
        modal.style.display = "block";
      }

      // When the user clicks on <span> (x), close the rating
      span.onclick = function () {
        modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the ratebox, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    </script> */}
