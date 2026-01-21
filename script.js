// ⚡ Your Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbwMA_1qkA_u9FQIGFmY2tbdNPITkV_KVPR_KNhSJFbHckJakRrENzCuJlcyQnSYMaXe/exec";

// Listen for the form submit event
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default browser submission

  const form = document.getElementById("feedbackForm");

  // Convert form fields to URLSearchParams so Google Apps Script can read correctly
  const formData = new URLSearchParams(new FormData(form));

  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData
  })
  .then(response => {
    // Show a success message to the user
    document.getElementById("successMsg").innerText = 
      "🎉 Thank you! Your feedback has been submitted successfully!";
    form.reset(); // Clear the form
  })
  .catch(error => {
    // If there was an error, show a message
    document.getElementById("successMsg").innerText = 
      "⚠ Oops! Something went wrong. Please try again.";
    console.error("Error submitting form:", error);
  });
});
