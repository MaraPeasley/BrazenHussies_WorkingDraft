 /*
MUST INCLUDE THIS IN HTML:
<div id="myNav" class="overlay">

  <!-- Button to close the overlay navigation -->
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

  <!-- Overlay content -->
  <div class="overlay-content">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
  
</div>

 MUST INCLUDE THIS IN LESS:
 // The Overlay (background)
 .overlay {
  // Height & width depends on how you want to reveal the overlay (see JS below)  
  height: 100%;
  width: 0;
  position: fixed; // Stay in place 
  z-index: 1; // Sit on top
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); // Black fallback color
  background-color: rgba(0,0,0, 0.9); // Black w/opacity
  overflow-x: hidden; // Disable horizontal scroll
  transition: 0.5s; // 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal)
}

// Position the content inside the overlay
.overlay-content {
  position: relative;
  top: 25%; // 25% from the top
  width: 100%; // 100% width
  text-align: center; // Centered text/links
  margin-top: 30px; // 30px top margin to avoid conflict with the close button on smaller screens
}

// The navigation links inside the overlay
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block; // Display block instead of inline 
  transition: 0.3s; // Transition effects on hover (color)
}

// When you mouse over the navigation links, change their color
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

// Position the close button (top right corner)
.overlay .closebtn {
  position: absolute;
  top: 15px;
  right: 35px;
  font-size: 40px;
}*/

/* When the height of the screen is more than 450 pixels, change the font-size of the links and position the close button again
@media screen and (max-height: 450px) {
  .overlay a {font-size: 36px}
  .overlay .closebtn {
    font-size: 60px;
    top: 20px;
    right: 45px;
  }
} */

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}