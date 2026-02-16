let contactContainer = document.querySelector("#contact-content")

contactContainer.innerHTML = `
  <div class="contact-wrapper container">

    <div class="contact-box">

      <!-- FORM -->
      <div class="contact-form">
        <h4>Send Us A Message</h4>
        <input type="text" placeholder="Your Name">
        <input type="email" placeholder="Your Email">
        <textarea rows="5" placeholder="Your Message"></textarea>
        <button>SEND</button>
      </div>

      <!-- INFO -->
      <div class="contact-info">
        <h4>Contact Information</h4>
        <p><i class="fa-solid fa-location-dot"></i> 8th floor, 379 Hudson St, New York</p>
        <p><i class="fa-solid fa-phone"></i> (+1) 96 716 6879</p>
        <p><i class="fa-solid fa-envelope"></i> contact@cozastore.com</p>
      </div>

    </div>

    <!-- MAP -->
    <div class="map-box mt-5">
      <iframe 
        src="https://www.google.com/maps?q=New%20York&output=embed">
      </iframe>
    </div>

  </div>
`
