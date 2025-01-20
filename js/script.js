/*   Global Variables    */ 
const taskName=document.getElementById("taskName");
const numberPriority=document.getElementById("numberPriority");
let taskContainer=[];

//     Add task button
function addTask(){
    if (validatinNameInput() && validatinPriorityInput() ==true){
    const task = {
        name: taskName.value,
        priority: numberPriority.value,
    }
    taskContainer.push(task);
    newTask();
    clearTask();
        }else{   
        }
}
//     EventListener input validatin 
taskName.addEventListener("blur",validatinNameInput);
numberPriority.addEventListener("blur",validatinPriorityInput);

//     Create a new task 
function newTask() {
    let result = "";
    for (let i = 0; i < taskContainer.length; i++) {
        result += 
        `<tr>
              <td>`+ i + `</td>
              <td>`+ taskContainer[i].name + `</td>
              <td>`+ taskContainer[i].priority + `</td>
              <td><button class="btn btn-danger" onclick="deleteTask(`+i+`)">delete</button></td>
        </tr>`
        }
    document.getElementById("outputeTask").innerHTML = result;
}

//    clear input   
function clearTask() {
    taskName.value = "";
    numberPriority.value = "";
} 

//   Delete input   
function deleteTask(i){
    taskContainer.splice(i,1);
    newTask();
}

//    validatin  Task Name   
function validatinNameInput(){
    let regex=/^[Aa-zZ]/;
    if(regex.test(taskName.value)==true){
        document.getElementById("errorTask").innerHTML= "Correct";
        document.getElementById("errorTask").style.color="green";
        taskName.style.borderColor="green";
         return true;
    }
    else{
        document.getElementById("errorTask").innerHTML= "This is a required Name";
        document.getElementById("errorTask").style.color="red";
        taskName.style.borderColor="red";
        return false;
    }
}

//    validatin Priority Number   
function validatinPriorityInput(){
    let regex=/^[A-Z]/;
    if(regex.test(numberPriority.value)==true){
        document.getElementById("errorPriority").innerHTML= "Correct";
        document.getElementById("errorPriority").style.color="green";
        numberPriority.style.borderColor="green";
         return true;
    }
    else{
        document.getElementById("errorPriority").innerHTML= "Please make a selection";
        document.getElementById("errorPriority").style.color="red";
        numberPriority.style.borderColor="red";
        return false;
    }
}
