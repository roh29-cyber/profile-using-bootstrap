document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contactForm");
  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", function (event) {
    var mobileInput = document.getElementById("mobile");
    var mobile = mobileInput.value.trim();

    if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
      alert("Enter a valid 10 digit number");
      event.preventDefault();
    }
  });
});