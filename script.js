function toggleClass() {
    const element = document.querySelector("#commentInput");
    element.classList.toggle("zoom-comment-box");
}

function addYellowBackground() {
    const body = document.body;
    body.classList.add("yellow-background");
}

function removeYellowBackground() {
    const body = document.body;
    body.classList.remove("yellow-background");
}

const changeColorButton = document.querySelector("#changeColorButton");

changeColorButton.addEventListener("click", function () {
    const body = document.body;

    if (body.classList.contains("yellow-background")) {
        removeYellowBackground();
    } else {
        addYellowBackground();
    }
});

function addComment(event) {
    if (event.key === "Enter" || event.type === "click") {
        const commentInput = document.querySelector("#commentInput");
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