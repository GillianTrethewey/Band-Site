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
  
  // header that displays in tablet and above
  let tabletHeader = document.createElement("div");
  tabletHeader.className = "tablet__header";
  
  let headerDate = document.createElement("p");
  headerDate.innerText = "DATES";
  headerDate.className = "tablet__date";
  tabletHeader.appendChild(headerDate);
  
  let headerVenue = document.createElement("p");
  headerVenue.innerText = "VENUE";
  headerVenue.className = "tablet__venue";
  tabletHeader.appendChild(headerVenue);
  
  let headerLocation = document.createElement("p");
  headerLocation.innerText = "LOCATION";
  headerLocation.className = "tablet__location";
  tabletHeader.appendChild(headerLocation);
  
  showsTable.appendChild(tabletHeader);
  
const generateTable = (data) => {
    let showCard = document.createElement("div");
    showCard.className = "show__card";
  
    let dateHeading = document.createElement("p");
    dateHeading.innerText = "DATE";
    dateHeading.className = "show__heading";
    showCard.appendChild(dateHeading);
  
    let dateData = document.createElement("h3");
    dateData.innerText = data["date"];
    dateData.className = "show__date";
    showCard.appendChild(dateData);
  
    let venueHeading = document.createElement("p");
    venueHeading.innerText = "VENUE";
    venueHeading.className = "show__heading";
    showCard.appendChild(venueHeading);
  
    let venueData = document.createElement("p");
    venueData.innerText = data["venue"];
    venueData.className = "show__venue";
    showCard.appendChild(venueData);
  
    let locationHeading = document.createElement("p");
    locationHeading.innerText = "LOCATION";
    locationHeading.className = "show__heading";
    showCard.appendChild(locationHeading);
  
    let locationData = document.createElement("p");
    locationData.innerText = data["location"];
    locationData.className = "show__location";
    showCard.appendChild(locationData);
  
    showsTable.appendChild(showCard);
  
    let buttonElement = document.createElement("button");
    buttonElement.innerText = "BUY TICKETS";
    buttonElement.classList.add("show__button");
    showCard.appendChild(buttonElement);
  }
  
  for (const show of shows) {
    generateTable(show);
  }
  