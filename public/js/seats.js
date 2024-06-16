const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const seatContainer = document.querySelector(".row-container");
const count = document.getElementById("count");
const total = document.getElementById("total");
const bookNowBtn = document.getElementById("book-now-btn");

populateUI();

// Set default ticket price
const ticketPrice = 150;
const addBalcony = 50;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".container .selected");
  const seatsIndex = [...selectedSeats].map(function(seat) {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  // Update local storage for booked seats
  const bookedSeats = document.querySelectorAll(".container .occupied");
  const bookedSeatsIndex = [...bookedSeats].map(function(seat) {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem("bookedSeats", JSON.stringify(bookedSeatsIndex));

  let selectedSeatsCount = selectedSeats.length;
  let totalPrice = 0;
  
  selectedSeats.forEach(function(seat) {
    let price = ticketPrice;
    if (seat.parentElement.classList.contains('balcony')) {
      price += addBalcony;
    }
    totalPrice += price;
  });

  count.textContent = selectedSeatsCount;
  total.textContent = totalPrice;

  // Update the href attribute of the "Book Now" button
  const paymentPageUrl = `./payment.html?total=${totalPrice}`;
  bookNowBtn.setAttribute("href", paymentPageUrl);
}

// Get data from localstorage and populate
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  const bookedSeats = JSON.parse(localStorage.getItem("bookedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach(function(seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  if (bookedSeats !== null && bookedSeats.length > 0) {
    seats.forEach(function(seat, index) {
      if (bookedSeats.indexOf(index) > -1) {
        seat.classList.add("occupied");
      }
    });
  }
}

seatContainer.addEventListener("click", function(e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

// Initial count and total rendering
updateSelectedCount();
