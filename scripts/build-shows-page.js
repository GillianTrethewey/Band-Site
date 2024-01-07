let shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },

  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },

  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

let showsTable = document.querySelector(".shows__table");

// displays at tablet and above
let tabletHeader = document.createElement("div");
tabletHeader.classList.add("tablet__header");

let headerDate = document.createElement("p");
headerDate.innerText = "DATE";
headerDate.classList.add("tablet__date");
tabletHeader.appendChild(headerDate);

let headerVenue = document.createElement("p");
headerVenue.innerText = "VENUE";
headerVenue.classList.add("tablet__venue");
tabletHeader.appendChild(headerVenue);

let headerLocation = document.createElement("p");
headerLocation.innerText = "LOCATION";
headerLocation.classList.add("tablet__location");
tabletHeader.appendChild(headerLocation);

showsTable.appendChild(tabletHeader);

const generateTable = (data) => {
  let showCard = document.createElement("div");
  let dateHeading = document.createElement("p");
  let dateData = document.createElement("h3");
  let venueHeading = document.createElement("p");
  let venueData = document.createElement("p");
  let locationHeading = document.createElement("p");
  let locationData = document.createElement("p");

  showCard.classList.add("show__card");
  dateHeading.classList.add("show__heading");
  dateData.classList.add("show__date");
  venueHeading.classList.add("show__heading");
  venueData.classList.add("show__venue");
  venueData.classList.add("show__venue");
  locationHeading.classList.add("show__heading");
  locationData.classList.add("show__location");

  dateHeading.innerText = "DATE";
  dateData.innerText = data["date"];
  venueData.innerText = data["venue"];
  locationHeading.innerText = "LOCATION";
  locationData.innerText = data["location"];

  showCard.appendChild(dateHeading);
  showCard.appendChild(dateData);
  showCard.appendChild(venueHeading);
  showCard.appendChild(venueData);
  showCard.appendChild(locationHeading);
  showCard.appendChild(locationData);

  // styling for click event on shows row

  showCard.addEventListener("click", (e) => {
    const activeShowCards = document.querySelectorAll(".show__card");

    activeShowCards.forEach((show) => {
      show.classList.remove("show__card--active");
    });

    showCard.classList.add("show__card--active");
  });

  showsTable.appendChild(showCard);

  let buttonElement = document.createElement("button");
  buttonElement.innerText = "BUY TICKETS";
  buttonElement.classList.add("show__button");
  showCard.appendChild(buttonElement);
};

shows.map((show) => generateTable(show));

