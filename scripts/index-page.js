let comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },

  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// Iterate through hard-coded comments

let commentsList = document.querySelector(".comments__list");

const displayComments = (comment) => {
  let commentCard = document.createElement("div");
  commentCard.className = "comment__card";

  // Group contains Photo, Name-Date, Comment
  let commentGroup = document.createElement("div");
  commentGroup.className = "comment__group";

  let commentPhotoContainer = document.createElement("div");
  commentPhotoContainer.className = "comment__photo-container";
  commentGroup.appendChild(commentPhotoContainer);

  let commentPhoto = document.createElement("img");
  commentPhoto.className = "comment__photo";
  commentPhotoContainer.appendChild(commentPhoto);

  // contains Name-Date, Comment
  let commentContainer = document.createElement("div");
  commentContainer.className = "comment__container";
  commentGroup.appendChild(commentContainer);

  let commentNameDateContainer = document.createElement("div");
  commentNameDateContainer.className = "comment__name-date-container";
  commentContainer.appendChild(commentNameDateContainer);

  let commentName = document.createElement("p");
  commentName.innerText = comment["name"];
  commentName.className = "comment__name";
  commentNameDateContainer.appendChild(commentName);

  let commentDate = document.createElement("p");
  commentDate.className = "comment__date";
  commentDate.innerText = comment["date"];
  commentNameDateContainer.appendChild(commentDate);

  let commentText = document.createElement("p");
  commentText.innerText = comment["comment"];
  commentContainer.appendChild(commentText);

  commentCard.appendChild(commentGroup);
  commentsList.appendChild(commentCard);
};

for (const comment of comments) {
  displayComments(comment);
}

const commentsForm = document.querySelector(".comment__form");
commentsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newDate = new Date();
  let month = (newDate.getMonth() + 1).toString().padStart(2, "0");

  let currDate = `${month}/${newDate.getDate()}/${newDate.getFullYear()}`;
  let newComment = {
    name: e.target.name.value,
    date: currDate,
    comment: e.target.comment.value,
  };

  // newest comment on top
  comments.unshift(newComment);

  // clear prior to looping through comments
  comments.innerText = "";
  commentsList.innerText = "";

  for (const comment of comments) {
    displayComments(comment);
  }

  e.target.reset();
});
