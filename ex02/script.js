const title = document.getElementById("title");
const message = document.getElementById("message");
const changeButton = document.getElementById("changeButton");
const activeButton = document.querySelector(".activeButton");

changeButton.addEventListener("click", function () {
    message.textContent = "The message was changed!";
    message.style.color = "blue";
});

activeButton.addEventListener("click", function () {
    activeButton.classList.add("active");
});
