// 3 (a)
/* create an array of strings */
let Tasks = ["Work", "Eat", "Study"];

// 3 (b)
/*  create an addTasksFunction
    recieves a string as a parameter called task
    it adds task to the array
    it prints a message in the console
    it returns the number of elements in array */
let addTask = (task) => {
    Tasks.push(task);
    console.log(task + " has been added to my Tasks")
    return Tasks.length;
}

addTask("Sleep")

// 3 (c)
/* create a listAllTasks function
    goes through all tasks in the array
    print each array item in the console*/
let listAllTasks = () => {
    Tasks.forEach((element) => {
        console.log(element)
    });
}

listAllTasks();

// 3 (d)
/*  create a deleteTask function
    it recieves task parameter
    it remove this parameter from array
    it prints in the console a message about deletion
    returns number of elements left in array */
let deleteTask = (task) => {
    let index = Tasks.indexOf(task);
    if( index > -1){
    Tasks.splice(index,1); // deletion
    console.log(task + " has been deleted from my Tasks list.")
    }else{
        console.log(task + " not found in my Tasks.")
    }
   
    return Tasks.Length;
}

deleteTask("Eat");

