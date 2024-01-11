const commentsForm = document.querySelector(".comment__form");
let commentsList = document.querySelector(".comments__list");
const api = new BandSiteApi("bf62226c-3d12-401b-ab50-b43718267b8d");

const renderSortedComments = async () => {
  try {
    const databaseComments = await api.getComments();
    const sortedComments = [...databaseComments].sort(
      (a, b) => b.timestamp - a.timestamp
    );

    sortedComments.forEach((comment) => {
      displayComment(comment);
    });
  } catch(error) {
    console.log('render sorted comments failed: ', error);
  }
}

const buildCommentsPage = async () => {
  try {
    renderSortedComments();

    let nameInput = document.querySelector("input[name='name']");
    let commentInput = document.querySelector("textarea[name='comment']");

    nameInput.isValid = () => !!nameInput.value;
    commentInput.isValid = () => !!commentInput.value;

    const inputFields = [nameInput, commentInput];

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

    commentsForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      shouldValidate = true;
      validateInputs();
      if (isFormValid) {
        try {
          newCommentObj = {
            name: e.target.name.value,
            comment: e.target.comment.value,
          };

          await api.postComment(newCommentObj);
          const databaseComments = await api.getComments();
          const sortedComments = [...databaseComments].sort(
            (a, b) => b.timestamp - a.timestamp
          );

          sortedComments.forEach((comment) => {
            displayComment(comment);
          });
        } catch (error) {
          console.log("comment update failed: ", error);
        }

        comments.innerText = "";
        commentsList.innerText = "";

        e.target.reset();
        return;
      }
    });

    inputFields.forEach((input) =>
      input.addEventListener("input", validateInputs)
    );
  } catch (error) {
    console.log("Error in build-shows-page.js: ", error);
  }
};

buildCommentsPage();

const displayComment = (comment) => {
  let newDate = new Date(comment.timestamp);
  let month = (newDate.getMonth() + 1).toString().padStart(2, "0");
  let date = newDate.getDate().toString().padStart(2, "0");
  let year = newDate.getFullYear().toString();
  let currDate = `${month}/${date}/${year}`;

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
  commentDate.innerText = currDate;
  commentNameDateContainer.appendChild(commentDate);

  let commentText = document.createElement("p");
  commentText.classList.add("comment__text");
  commentText.innerText = comment["comment"];
  commentContainer.appendChild(commentText);

  commentCard.appendChild(commentGroup);
  commentsList.appendChild(commentCard);
};
