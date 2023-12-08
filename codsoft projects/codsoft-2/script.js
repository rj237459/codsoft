const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value === '')
    {
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        let s2=document.createElement('button');
        s2.innerHTML="Edit";
        li.appendChild(span);
        li.appendChild(s2);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName==="BUTTON"){
        let li=document.createElement("li");
        const newText=prompt("Edit task:",li.textContent);

        if(newText!==null)
        {
            li.innerHTML=newText;
            listContainer.appendChild(li);
            let span=document.createElement('span');
            span.innerHTML="\u00d7";
            let s2=document.createElement('button');
            s2.innerHTML="Edit";
            li.appendChild(span);
            li.appendChild(s2);
            e.target.parentElement.remove();
        }
        saveData();

    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();