const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//define the function addtask here
function addTask(){
    if(inputBox.value == ""){
        alert("you must add a task!")
    }
    else{
        let li = document.createElement("li"); //creating an html elemnt with the tag li and storing the element in the li variable 
        li.innerHTML = inputBox.value;  //what ever text we add in the input field will be displayed  here
        listContainer.appendChild(li); //the li should be displayed under the listcontainer
        let span = document.createElement("span"); //add cross icon in span tag
        span.innerHTML = "\u00d7"; //cross icon code
        li.appendChild(span) //dispaly span
    }
    inputBox.value = "";  //clear input field after adding text
    saveData();           //whenver any task is added this saveData will be called and it will save the updated contain
}

//js for click function
listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){   
        e.target.classList.toggle("checked"); //it checks if we have clicked on LI then it will check classname
        saveData();                           //  save whenever task is checked
    }
    else if(e.target.tagName === "SPAN"){      //if the clicked element is SPAN then it will delete the li (task)
        e.target.parentElement.remove();
        saveData();                           //save whenever task is deleted
    }
}, false);

//function to store task in browser 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)  //set a name(data) and value we want to save in our browser(listcontainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");  //display data whenever we open website again 
}
showTask();  //call function 