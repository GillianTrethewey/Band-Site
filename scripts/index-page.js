const commentsForm = document.querySelector(".comment__form");
let commentsList = document.querySelector(".comments__list");
const api = new BandSiteApi("bf62226c-3d12-401b-ab50-b43718267b8d");

const renderComments = async () => {
  const databaseComments = await api.getComments();
  const sortedComments = [...databaseComments].sort(
    (a, b) => b.timestamp - a.timestamp
  );
  commentsList.innerHTML = "";
  sortedComments.forEach((comment) => {
    displayComment(comment);
  });
};

const commentLikeImageListener = (commentLike) => {
  commentLike.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let id = e.target.id;
    try {
      const updatedLikeComment = await api.likeComment(id);
      renderComments();
    } catch (error) {
      console.log("comment like failed: ", error);
    }
  });
};

const deleteButtonListener = (deleteButton) => {
  deleteButton.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let id = e.target.id;
    try {
      const deleteComment = await api.deleteComment(id);
      renderComments();
    } catch (error) {
      console.log("comment delete failed: ", error);
    }
  });
};

const buildCommentsPage = async () => {
  try {
    renderComments();

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
      e.stopPropagation();
      shouldValidate = true;
      validateInputs();
      if (isFormValid) {
        try {
          newCommentObj = {
            name: e.target.name.value,
            comment: e.target.comment.value,
          };

          const updatedComment = await api.postComment(newCommentObj);
          renderComments();
        } catch (error) {
          console.log("comment update failed: ", error);
        }

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

  let commentLikeDeleteContainer = document.createElement("div");
  commentLikeDeleteContainer.classList.add("comment__like-delete-container");

  let commentLikeContainer = document.createElement("div");
  commentLikeContainer.classList.add("comment__like-container");

  let commentLikeImage = document.createElement("img");
  commentLikeImage.classList.add("comment__like-image");
  commentLikeImage.src = "./assets/icons/SVG/icon-like.svg";
  commentLikeImage.alt = "thumbs up icon";
  commentLikeImage.setAttribute("id", comment.id);
  commentLikeContainer.appendChild(commentLikeImage);

  let commentLikeCount = document.createElement("p");
  commentLikeCount.classList.add("comment__like-count");
  commentLikeCount.innerText = comment["likes"];
  commentLikeCount.setAttribute("id", comment.id);
  commentLikeContainer.appendChild(commentLikeCount);

  let commentDeleteButton = document.createElement("button");
  commentDeleteButton.classList.add("comment__button");
  commentDeleteButton.classList.add("comment__delete-button");
  commentDeleteButton.innerText = "DELETE";
  commentDeleteButton.setAttribute("id", comment.id);

  commentLikeDeleteContainer.appendChild(commentLikeContainer);
  commentLikeDeleteContainer.appendChild(commentDeleteButton);

  commentLikeImageListener(commentLikeImage);
  deleteButtonListener(commentDeleteButton);

  commentContainer.appendChild(commentLikeDeleteContainer);

  commentCard.appendChild(commentGroup);
  commentsList.appendChild(commentCard);
};
