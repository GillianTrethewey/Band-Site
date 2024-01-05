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
let table = document.querySelector(".table");
let tableBody = document.querySelector(".table__body");

// // header that displays in tablet and above
// let tabletHead = document.createElement("thead");
// tabletHead.className = "tablet__head";

// let tabletRowTop = document.createElement("tr");
// tabletRowTop.className = "tablet__row-top";
// tabletHead.appendChild(tabletRowTop);

// let headDate = document.createElement("td");
// headDate.innerText = "DATE";
// headDate.className = "tablet__date";
// tabletHead.appendChild(headDate);

// let headVenue = document.createElement("td");
// headVenue.innerText = "VENUE";
// headVenue.className = "tablet__venue";
// tabletHead.appendChild(headVenue);

// let headLocation = document.createElement("td");
// headLocation.innerText = "LOCATION";
// headLocation.className = "tablet__location";
// tabletHead.appendChild(headLocation);

// let headButtonHidden = document.createElement("td");
// headButtonHidden.className = "table__button--hidden";
// tabletHead.appendChild(headButtonHidden);

// table.appendChild(tabletHead);

const generateTable = (data) => {
  let tableRow = document.createElement("tr");
  tableRow.className = "table__row";

  let dateHeading = document.createElement("td");
  dateHeading.innerText = "DATE";
  dateHeading.className = "table__heading";
  tableRow.appendChild(dateHeading);

  let dateData = document.createElement("td");
  dateData.innerText = data["date"];
  dateData.className = "table__date";
  tableRow.appendChild(dateData);

  let venueHeading = document.createElement("td");
  venueHeading.innerText = "VENUE";
  venueHeading.className = "table__heading";
  tableRow.appendChild(venueHeading);

  let venueData = document.createElement("td");
  venueData.innerText = data["venue"];
  venueData.className = "table__venue";
  tableRow.appendChild(venueData);

  let locationHeading = document.createElement("td");
  locationHeading.innerText = "LOCATION";
  locationHeading.className = "table__heading";
  tableRow.appendChild(locationHeading);

  let locationData = document.createElement("td");
  locationData.innerText = data["location"];
  locationData.className = "table__location";
  tableRow.appendChild(locationData);

  let buttonElement = document.createElement("button");
  buttonElement.innerText = "BUY TICKETS";
  buttonElement.classList.add("table__button");

  tableRow.appendChild(buttonElement);

  tableBody.appendChild(tableRow);
};

for (const show of shows) {
  generateTable(show);
}
