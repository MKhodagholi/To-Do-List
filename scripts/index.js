let works = [];

const addButton = document.querySelector("#add-work-button");

addButton.addEventListener("click", () => {
    addWork(document.querySelector("#add-work-input").value);
    makeList();
});

makeList();