const getSaveWorks = () => {
    // try {
        return localStorage.getItem("works") !== null ? JSON.parse(localStorage.getItem("works")) : [];
    // }
    // catch (e) {
    //     return [];
    // }
};


const saveWorks = () => {
    localStorage.setItem("works", JSON.stringify(works));
}

const removeWork = (title) => {
    const index = works.findIndex(work => {
        return work.title === title;
    });
    if (index > -1) {
        works.splice(index, 1);
    }
    saveWorks();
}


const createDomWork = (title) => {
    const div = document.createElement('div');
    const divButton = document.createElement("div");
    divButton.setAttribute("class", "div-button");
    div.setAttribute("class", "div-work");
    const p = document.createElement('p');
    p.setAttribute("class", "work-title");
    p.textContent = title;
    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa fa-trash");
    const checkIcon = document.createElement("i"); 
    checkIcon.setAttribute("class", "fa fa-check");
    deleteIcon.addEventListener("click", () => {
        removeWork(title);
        div.remove();
    });
    let isLineThrough = false;
    checkIcon.addEventListener("click", () => {
        if (isLineThrough) {
            p.style.textDecoration = "none";
            isLineThrough = false;
        }
        else { 
            p.style.textDecoration = "line-through";
            isLineThrough = true;
        }
    });
    
    divButton.appendChild(checkIcon);
    divButton.appendChild(deleteIcon);
    div.appendChild(p);
    div.appendChild(divButton);
    return div;
}

const addWork = (title) => {
    // const title = document.querySelector("#add-work-input").value;
    const workContentDiv = document.querySelector("#works");
    workContentDiv.appendChild(createDomWork(title));
}

const makeList = (worksArray) => {
    works = getSaveWorks();
    if (document.querySelector("#add-work-input").value !== "") {
        works.push({
            title: document.querySelector("#add-work-input").value
        });
    }

    const workDiv = document.querySelector("#works");
    document.querySelectorAll(".div-work").remove;
    workDiv.innerHTML = "";
    works.forEach(work => {
        addWork(work.title);
    });
    document.querySelector("#add-work-input").value = "";
    saveWorks();
    console.log(works);
}

