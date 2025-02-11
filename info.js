

const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/216';

const myUrl = baseURL + endpointMe;


getData(myUrl).then(data216 => {
    // console.log(data216);

    let custom = data216.data.custom;
    customJSON = JSON.parse(custom);

    let leeftijd = customJSON.leeftijd;
    let woonplaats = customJSON.woonplaats;
    let school = customJSON.school;
    let studie = customJSON.studie;
    let geboortedag = data216.data.birthdate;


    let tableBody = document.querySelector(".apiTable tbody");

    // Maak dynamisch rijen voor de tabel
    let tableContent = `
        <tr><td><strong>Leeftijd</strong></td><td>${leeftijd}</td></tr>
        <tr><td><strong>Woonplaats</strong></td><td>${woonplaats}</td></tr>
        <tr><td><strong>School</strong></td><td>${school}</td></tr>
        <tr><td><strong>Studie</strong></td><td>${studie}</td></tr>
        <tr><td><strong>Geboortedag</strong></td><td>${geboortedag}</td></tr>
    `;

    // Voeg de rijen toe aan de tabel
    tableBody.innerHTML = tableContent;

});




let currentCardIndex = 0;
const cards = document.querySelectorAll('.cards');
const buttons = document.querySelectorAll('.buttons button');


cards[currentCardIndex].classList.add('active');

buttons[currentCardIndex].classList.add('active');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        cards[currentCardIndex].classList.remove('active');

        const targetId = button.getAttribute('data-target');
        const targetCard = document.getElementById(targetId);


        targetCard.classList.add('active');



        currentCardIndex = Array.from(cards).indexOf(targetCard);

        buttons.forEach(btn => btn.classList.remove('active')); 
        button.classList.add('active');
    });
});

const ball = document.querySelector(".football");

ball.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
});




document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const flippedCard = document.querySelector('.card.is-flipped');
      
      if (flippedCard && flippedCard !== card) {

        flippedCard.classList.remove('is-flipped');
      }
      
      card.classList.toggle('is-flipped');
    });
  });
  




async /*9*/ function getData(URL) {
	return ( //8
		fetch(URL) //1
		.then ( //2
			response /*3*/ => response.json() //4
		)
		.then ( //5
			jsonData /*6*/ => {return jsonData} //7
		)
	);
}


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".hobby-button-1, .hobby-button-2, .hobby-button-3");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const dropdown = button.closest("article").querySelector(".dropBlock, .dropBlock-2, .dropBlock-3");
            if (dropdown) {
                dropdown.classList.toggle("active");
                button.classList.toggle("active");
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Select all album buttons
    const albumButtons = document.querySelectorAll(".albums button");
    // Select the LP image inside the .lp div
    const lpImage = document.querySelector(".lp img");
    // Select the album title paragraph
    const albumTitle = document.querySelector(".lp-title");

    // Loop through each button and add a click event
    albumButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Get the image source from the clicked button
            const newImageSrc = this.querySelector("img").src;
            
            // Get the album title from the alt attribute of the clicked image
            const newAlbumTitle = this.querySelector("img").alt;
            
            // Change the LP image source
            lpImage.src = newImageSrc;
            
            // Update the album title text
            albumTitle.textContent = newAlbumTitle;
        });
    });
});

