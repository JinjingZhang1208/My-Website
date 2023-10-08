function toggleClass() {
    const element = document.querySelector("#commentInput");
    element.classList.toggle("zoom-comment-box");
}

function addComment(event) {
    if (event.key === "Enter" || event.type === "click") {
        const commentInput = document.querySelector("#commentInput");
        // remove whitespace characters from the beginning and end of a string.
        const commentText = commentInput.value.trim();

        if (commentText !== "") {
            const commentList = document.querySelector("#commentList");
            const newComment = document.createElement("div");
            newComment.textContent = commentText;
            commentList.appendChild(newComment);
            commentInput.value = "";
        }
    }
}

document.querySelector("#addCommentButton").addEventListener("click", addComment);
document.querySelector("#commentInput").addEventListener("keypress", addComment);
document.querySelector("#toggleClassButton").addEventListener("click", toggleClass);