# MoviezNow
Demo Video Link :[ ](https://drive.google.com/file/d/1sS0x302H8KX9aN_EZ4bzMFe5xmZiVDHv/view)
Welcome to the Movie Seat Booking Application! This simple web application allows users to select movie seats and proceed to a payment page. It includes features like seat selection, pricing differentiation between stall and balcony seats, and dynamic calculation of total price based on seat selection.
Features
Seat Selection: Users can click on available seats to select them. Occupied seats and already selected seats are visually indicated.
Pricing: Seats in the balcony section are priced higher than those in the stall section. The price is dynamically calculated based on the seats selected.
Persistence: Selected seats are stored in the browser's localStorage, ensuring that users can return to the page and still see their selected seats.
Book Now Button: When users are ready to book, they can click on the "Book Now" button which calculates the total price and redirects them to a payment page.
Setup
To run the Movie Seat Booking Application locally or on a server, follow these steps:
Clone the Repository:
bash
Copy code
git clone <repository_url>
Navigate to the Project Directory:
bash
Copy code
cd movieznow
Open localhost/movieznow/public/register.html in a Web Browser:
Simply open the index.html file in your preferred web browser (Chrome, Firefox, etc.).
Explore and Use the Application:
Select seats by clicking on them.
Watch as the selected seats count and total price update dynamically.
Click on the "Book Now" button to proceed to the payment page.
Technologies Used
HTML5
CSS3 (with minimal styling framework)
JavaScript
PHP
MySQL 8.0
Directory Structure
The project directory structure is organized as follows:
Copy code
movieznow/
│
├── css/
│   ├── seats.css
│   └── osahan.min.css
│
├── img/
│   └── screen-thumb.png
│
├── js/
│   └── seats.js
│
├── index.html
└── README.md
css/: Contains CSS stylesheets used for the application.
img/: Stores images, such as the movie screen image used in the application.
js/: Includes JavaScript files, specifically seats.js which handles the main logic of seat selection and pricing.
Additional Notes
Browser Compatibility: The application is designed to work on modern web browsers like Chrome, Firefox, Safari, and Edge. Compatibility with older browsers may vary.
LocalStorage Usage: The application uses localStorage to store selected and booked seat information. Ensure that the browser has localStorage enabled for the best user experience.
Customization: You can customize the application further by modifying the CSS styles in seats.css and osahan.min.css to match your desired theme or branding.
