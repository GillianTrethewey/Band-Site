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

const displayComment = (comment) => {
  let commentCard = document.createElement("div");
  commentCard.classList.add("comment-card");

  // Group contains Photo, Name-Date, Comment
  let commentGroup = document.createElement("div");
  commentGroup.classList.add("comment__group");

  let commentPhotoContainer = document.createElement("div");
  commentPhotoContainer.classList.add("comment__photo-container");
  commentGroup.appendChild(commentPhotoContainer);

  let commentPhoto = document.createElement("img");
  commentPhoto.classList.add("comment__photo");
  commentPhotoContainer.appendChild(commentPhoto);

  // contains Name-Date, Comment
  let commentContainer = document.createElement("div");
  commentContainer.classList.add("comment__container");
  commentGroup.appendChild(commentContainer);

  let commentNameDateContainer = document.createElement("div");
  commentNameDateContainer.classList.add("comment__name-date-container");
  commentContainer.appendChild(commentNameDateContainer);

  let commentName = document.createElement("p");
  commentName.innerText = comment["name"];
  commentName.classList.add("comment__name");
  commentNameDateContainer.appendChild(commentName);

  let commentDate = document.createElement("p");
  commentDate.classList.add("comment__date");
  commentDate.innerText = comment["date"];
  commentNameDateContainer.appendChild(commentDate);

  let commentText = document.createElement("p");
  commentText.innerText = comment["comment"];
  commentContainer.appendChild(commentText);

  commentCard.appendChild(commentGroup);
  commentsList.appendChild(commentCard);
};

comments.map((comment) => displayComment(comment));

const commentsForm = document.querySelector(".comment__form");

// input and form validation
// add listeners on input and textarea fields
let nameInput = document.querySelector("input[name='name']");
let commentInput = document.querySelector("textarea[name='comment']");

nameInput.isValid = () => !!nameInput.value;
commentInput.isValid = () => !!commentInput.value;

const inputFields = [nameInput, commentInput];

const isValidText = (text) => {
  const re = /[\s\S]*[\w\W]*[\d\D]*/;
  return re.test(String(text)).toLowerCase();
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {

  if (!shouldValidate) return;

  isFormValid = true;

  inputFields.forEach((input) => {
    input.classList.remove("invalid");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
    }
  });
};

commentsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {

    let newDate = new Date();
    let month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    let date = newDate.getDate().toString().padStart(2, "0");
    let year = newDate.getFullYear().toString();
    let currDate = `${month}/${date}/${year}`;

    let newCommentObj = {
      name: e.target.name.value,
      date: currDate,
      comment: e.target.comment.value,
    };

    comments.unshift(newCommentObj);

    comments.innerText = "";
    commentsList.innerText = "";

    comments.map((comment) => displayComment(comment));

    e.target.reset();
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));