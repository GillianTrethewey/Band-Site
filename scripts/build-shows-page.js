let showsTable = document.querySelector(".shows__table");
const api = new BandSiteApi("bf62226c-3d12-401b-ab50-b43718267b8d");

const buildShowsPage = async () => {
  try {
    const shows = await api.getShows();
    
    const obj = { date: "DATE", venue: "VENUE", location: "LOCATION" };
    generateHeaderTablet(obj);
    shows.map((e) => generateTable(e));
  } catch (error) {
    console.log("Error in build-shows-page.js: ", error);
  }
};

buildShowsPage();

const generateHeaderTablet = (data) => {
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

  let buttonElement = document.createElement("button");
  buttonElement.innerText = "BUY TICKETS";
  buttonElement.classList.add("show__button");
  buttonElement.classList.add("show__button--placeholder");
  tabletHeader.appendChild(buttonElement);

  showsTable.appendChild(tabletHeader);
};

const generateTable = (data) => {
  let showCard = document.createElement("div");
  let dateHeading = document.createElement("h3");
  let dateData = document.createElement("p");
  let venueHeading = document.createElement("h3");
  let venueData = document.createElement("p");
  let locationHeading = document.createElement("h3");
  let locationData = document.createElement("p");

  showCard.classList.add("show__card");
  dateHeading.classList.add("show__heading");
  dateData.classList.add("show__date");
  venueHeading.classList.add("show__heading");
  venueData.classList.add("show__venue");
  venueHeading.classList.add("show__heading");
  locationHeading.classList.add("show__heading");
  locationData.classList.add("show__location");

  dateHeading.innerText = "DATE";
  dateData.innerText = new Date(data.date).toDateString();
  venueHeading.innerText = "VENUE";
  venueData.innerText = data.place;
  locationHeading.innerText = "LOCATION";
  locationData.innerText = data.location;

  showCard.appendChild(dateHeading);
  showCard.appendChild(dateData);
  showCard.appendChild(venueHeading);
  showCard.appendChild(venueData);
  showCard.appendChild(locationHeading);
  showCard.appendChild(locationData);

  // use mousedown and mouseup to improve speed of rendering vs click

  showCard.addEventListener("mousedown", () => {
    showCard.classList.add("show__card--active");
    showCard.classList.remove("show__card--hover");
    showCard.classList.remove("show__card--nohover");
  });

  showCard.addEventListener("mouseup", () => {
    const activeShowCards = document.querySelectorAll(".show__card");

    activeShowCards.forEach((show) => {
      if (show !== showCard) {
        show.classList.remove("show__card--active");
        show.classList.add("show__card--hover");
      }
    });
  });

  showsTable.appendChild(showCard);

  let buttonElement = document.createElement("button");
  buttonElement.innerText = "BUY TICKETS";
  buttonElement.classList.add("show__button");
  showCard.appendChild(buttonElement);
};
