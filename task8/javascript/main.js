// get elements from html

var theInput = document.querySelector(".add-task input"),
    addButton = document.querySelector(".add-task .plus"),
    tasksContainer = document.querySelector(".tasks-content"),
    tasksCompleted = document.querySelector(".tasks-completed span");


window.onload = function () {

    theInput.focus();
};

addButton.onclick = function() {

    if(theInput.value === "" && (theInput.value.trim()).length == 0) {

        swal("Enter Task!");
    }
    else {

        theInput.value.trim().length;
        console.log(theInput.value.trim().length);

        // get there's no task span [empty tasks]

        var noTaskMsg = document.querySelector(".no-tasks-message");

        // sheck if there is tasks or not

        if (document.body.contains(noTaskMsg)) {

            noTaskMsg.remove();

        };
        
        // create main sapn of tasks contant
        var mainSpan = document.createElement("span");

        // create main sapn of tasks contant
        var checkbx = document.createElement("input");

        // checkbx.setAttribute("type", "checkbox");

        // create text node of the input value
        var text = document.createTextNode(theInput.value);

        // create task description span
        var taskdesc = document.createElement("span");

        // create task span [delete]
        var deleteElement = document.createElement("span");

        var deleteText = document.createTextNode("Delete");

        //append the text into task desc span
        taskdesc.appendChild(text);


        // append input to main
         mainSpan.appendChild(checkbx);

         // set tye of input checkbox after appending
        checkbx.setAttribute("type", "checkbox");

        checkbx.setAttribute("id", "selec");

        // checkbx.setAttribute("checked", "false");

        // append task desc into main span
        mainSpan.appendChild(taskdesc);

        

        // give it lining class
        taskdesc.className = "lining";

        // give the main span class
        mainSpan.className = "task-box";

        deleteElement.appendChild(deleteText);


        deleteElement.className = "delete";

        mainSpan.appendChild(deleteElement);

        tasksContainer.appendChild(mainSpan);
        // mainSpan.appendChild(checkbx);
        

        theInput.value = ""; 
        

    }

    theInput.focus(); 
    
};

document.addEventListener("click", function (e) {

    
    if (e.target.className == "delete") {

        if (!confirm("Are You Sure To Delete Task ?")) {

            data.preventDefault();
        }
        else {

            e.target.parentNode.remove();

        }

    }

    // add finished class by clicking the word

    // if (e.target.classList.contains("task-box")) {

    //     e.target.classList.toggle("finished");
    // }

  
    //first
    var sel = document.getElementById("selec");

        sel.addEventListener("click", function() {

            tasksContainer.firstElementChild.classList.add("finished");

        });


    // second
    // var sel = document.getElementById("selec");

    // for (var i = 0; i < sel.length; i++) {

    //     sel[i].addEventListener('click', function (data) {
    //         // this.style.backgroundColor = 'yellow'; // this=>tr

    //         console.log(sel[i]);
    //         if (this.classList.contains("task-box"))
    //         data.target.classList.toggle("finished");


    //         //console.log("This : " + this.nodeName);// "TR"
    //         //console.log("Target : " + data.target.nodeName);// "TD | TH"
    //     });
    // }

}); 





