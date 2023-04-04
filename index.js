// // Get the modal element
// const modal = document.getElementById("modal");

// // Get the button that opens the modal
// const modalButton = document.getElementById("modal-button");

// // Get the <span> element that closes the modal
// const closeSpan = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// modalButton.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// closeSpan.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// // Get the form element
// const form = document.getElementById("modal-form");

// // Add a submit event listener to the form
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent the form from submitting
//   const vehicleId = document.getElementById("vehicle-id").value;
//   const bookingTime = document.getElementById("booking-time").value;
//   const releaseTime = document.getElementById("release-time").value;
//   console.log(vehicleId, bookingTime, releaseTime); // Output the values to the console
//   modal.style.display = "none"; // Close the modal
// });