"use strict";

// Dark Mode Toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Tabs
$(function() {
  $("#tabs").tabs();
});

// Slick Slideshow
$(document).ready(function() {
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true
  });
});

// Save Contact Form Data to Session Storage
const contactForm = document.getElementById('memoryForm');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the form
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Save the values to sessionStorage
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('subject', subject);
  sessionStorage.setItem('message', message);

  // Optionally, you can provide feedback to the user
  alert('Your message has been saved!');
});

// Pre-fill the form with stored data (if any)
window.addEventListener('load', () => {
  const storedEmail = sessionStorage.getItem('email');
  const storedSubject = sessionStorage.getItem('subject');
  const storedMessage = sessionStorage.getItem('message');

  if (storedEmail) document.getElementById('email').value = storedEmail;
  if (storedSubject) document.getElementById('subject').value = storedSubject;
  if (storedMessage) document.getElementById('message').value = storedMessage;
});


//AJAX, quote generator
document.getElementById("getQuoteBtn").addEventListener("click", () => {
  fetch("https://zenquotes.io/api/quotes")
    .then(response => response.json())
    .then(data => {
      //q and a are quote and author based of the API
      const quote = data[0].q;
      const author = data[0].a;
      document.getElementById("quoteText").textContent = `"${quote}"`;
      document.getElementById("quoteAuthor").textContent = `– ${author}`;
    })
    .catch(error => {
      console.error("Error fetching quote:", error);
      document.getElementById("quoteText").textContent = "Oops, something went wrong.";
      document.getElementById("quoteAuthor").textContent = "";
    });
});