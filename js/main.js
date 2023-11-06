
const taskElems = document.querySelectorAll('.task__element')
for (let i =0; i < taskElems.length; i++){

    taskElems[i].addEventListener("click", function(event) {
        const elem = event.currentTarget
        elem.style.textDecoration = "line-through"        
    });
}
