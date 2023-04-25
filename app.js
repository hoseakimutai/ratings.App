var modal = document.getElementById("myRating");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

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