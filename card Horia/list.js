
function addListToMain() {
    event.preventDefault();
    let controlsInput = document.getElementById("controlsInput");
    let mainContainer = document.getElementById("mainContainer")

    if(controlsInput.value.trim() == "") {
        alert("Please insert something!")
        
    
    } else {
        let newDiv = document.createElement("div")
        mainContainer.appendChild(newDiv);
        newDiv.classList.add("create-div");

        let topDiv = document.createElement("div");
        newDiv.appendChild(topDiv);
        topDiv.classList.add("top-div");

        let titleContainer = document.createElement("div");
        titleContainer.classList.add("title__container");
        topDiv.appendChild(titleContainer);


        let divTitle = document.createElement("h2");
        divTitle.innerText = `Title: ${controlsInput.value}`;
        divTitle.classList.add("h2__div")
        titleContainer.appendChild(divTitle);

        let removeListContainer = document.createElement("div");
        removeListContainer.classList.add("remove__list__container");
        topDiv.appendChild(removeListContainer);



        let removeList = document.createElement("button");
        removeList.innerText = "Remove List";
        removeList.classList.add("remove__list__button")
        removeListContainer.appendChild(removeList);

        // removeList.addEventListener("click", function() {
        //     newDiv.remove();
        // });


        addRemoveListEvent(removeList, newDiv);
        



        let bottomDiv = document.createElement("div");
        newDiv.appendChild(bottomDiv);
        bottomDiv.classList.add("bottom__div");


        let secondInputContainer = document.createElement("div");
        bottomDiv.appendChild(secondInputContainer);
        secondInputContainer.classList.add("second__input__container");



        let newInput = document.createElement("input");
        secondInputContainer.appendChild(newInput);
        newInput.classList.add("second__input")
        newInput.type = "text";
        newInput.placeholder = 'Insert your list';


        let secondAddButtonContainer = document.createElement("div");
        secondAddButtonContainer.classList.add("second__add__button__container");
        bottomDiv.appendChild(secondAddButtonContainer);



        let addSecondListButton = document.createElement("button");
        addSecondListButton.innerText = "Add Item";
        addSecondListButton.classList.add("second__button");
        secondAddButtonContainer.appendChild(addSecondListButton);

        addSecondListButton.addEventListener("click", function() {
            if(newInput.value.trim() != "") {
            
            let newUl = document.createElement("ul");
            let newItem = document.createElement("li"); 
            let removeItem = document.createElement("span"); 

            newItem.classList.add("list__item");
            newUl.classList.add("list__ul")
            newDiv.appendChild(newUl);
            newUl.appendChild(newItem);
            newItem.innerText = newInput.value;


            removeItem.innerText = "x";
            removeItem.classList.add("remove__each__item");
            newItem.appendChild(removeItem);


            removeItem.addEventListener('click', function() {
                newItem.remove();
            })

            newInput.value = "";
        }  else {
            alert("Insert something!")
        }
        });
   


        controlsInput.value = "";

        
    }
}

function addRemoveListEvent(removeList, newDiv) {
    removeList.addEventListener("click", function() {
    newDiv.remove();
    });
}





