const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// aval mige age khali bod in payam ro bede=(you must...)
function addTask(){
    if(inputBox.value === ''){
        alert("You must write somthing!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appenedChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        //age ghablan bode deletesh mikone
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
} ,false);