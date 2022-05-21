
/* Declaring the basic page and the thank you page */
const MarkPanel = document.getElementById('MarkPanel')
const ThankyouPanel = document.getElementById('ThankyouPanel')


/* Declaring every buttons */
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const buttonsubmit = document.getElementById('buttonsubmit')

/* Declaring a text that trigger if the user didn't select a number */
const submitvalidtext = document.getElementById('submitvalidtext')






/* function to deal with the mark button click */
function selectbutton() {
    /* Disable all active buttons before activating the clicked one */
    button1.classList.remove("active")
    button2.classList.remove("active")
    button3.classList.remove("active")
    button4.classList.remove("active")
    button5.classList.remove("active")
    /* Adding the active class to the clicked button */
    this.classList.add("active")
    console.log("clicked on",this) 
    console.log(this.classList.contains('active'))
}


/* function to deal with the submit button click*/
function submit() {
    /* if statements that cover every button from 1 to 5 */
    if (button1.classList.contains("active") == true) {
        document.getElementById("Notecontainer").innerHTML = "You selected 1 out of 5";
        MarkPanel.classList.add("hidden")
        ThankyouPanel.classList.remove("hidden")
        
    }

    if (button2.classList.contains('active') == true) {
        document.getElementById("Notecontainer").innerHTML = "You selected 2 out of 5";
        MarkPanel.classList.add("hidden")
        ThankyouPanel.classList.remove("hidden")
    }

    if (button3.classList.contains('active') == true) {
        document.getElementById("Notecontainer").innerHTML = "You selected 3 out of 5";
        MarkPanel.classList.add("hidden")
        ThankyouPanel.classList.remove("hidden")
    }

    if (button4.classList.contains('active') == true) {
        document.getElementById("Notecontainer").innerHTML = "You selected 4 out of 5";
        MarkPanel.classList.add("hidden")
        ThankyouPanel.classList.remove("hidden")
    }

    if (button5.classList.contains('active') == true) {
        document.getElementById("Notecontainer").innerHTML = "You selected 5 out of 5";
        MarkPanel.classList.add("hidden")
        ThankyouPanel.classList.remove("hidden")
    }

    /* fallback if no button is selected */
    else {
        console.log("No buttons selected")
        submitvalidtext.classList.remove("hidden")
    }



}

/* event listeners*/


button1.addEventListener("click", selectbutton)
button2.addEventListener("click", selectbutton)
button3.addEventListener("click", selectbutton)
button4.addEventListener("click", selectbutton)
button5.addEventListener("click", selectbutton)
buttonsubmit.addEventListener("click", submit)
