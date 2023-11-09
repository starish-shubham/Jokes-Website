// for joke content div api fetch
const area = document.querySelector(".joke-text");
// area.innerHTML = "HLWW";
const jokeText = document.querySelector(".joke-text").textContent;
const api = "https://icanhazdadjoke.com/slack";
fetch(api)
  .then((response) => {
    // Handle the response
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the response, e.g., as JSON
    return response.json();
  })
  .then((data) => {
    area.innerHTML = `${data.attachments[0].text}`;
    // console.log(data.attachments[0].text);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    area.innerHTML = "Error";
  });

// Whstapp share button
function shareOnWhatsApp() {
  const jokeText = document.querySelector(".joke-text").textContent;
  const whatsappMessage = `Check out this joke: ${jokeText}`;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Create a WhatsApp share link
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodedMessage}`;

  // Open the WhatsApp share link in a new tab
  window.open(whatsappURL, "_blank");
  // console.log("whatsapp");
}

// instagram share button
// const shareButton = document.getElementById("#instagram");

// shareButton.addEventListener("click", () => {
function shareOnInstagram() {
  // Construct the Instagram sharing URL
  // const instagramUrl = `https://www.instagram.com/create?caption=${encodeURIComponent(jokeText)}`;
  const instagramShareURL = `instagram://share?text=${encodeURIComponent(
    jokeText
  )}`;

  window.location.href = instagramShareURL;
  console.log("insta");
}

// reload page on next button
const refreshButton = document.querySelector(".next");
refreshButton.addEventListener("click", function () {
  // Use the location.reload() method to refresh the page
  location.reload();
});

function copyButton() {
  jokeText.select();
  jokeText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected text to the clipboard
  document.execCommand("copy");
}
