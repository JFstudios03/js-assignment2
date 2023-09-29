function changeName(){
    var user = {
        fname: prompt("Input your first name"),
        lname: prompt("Input your last name"),
        age: parseInt(prompt("Input your age")),
        gender: prompt("Input your gender e.g Male or Female"),
        relationshipStatus: prompt("Are you single, engaged or complicated?"),
    };

    if (user.fname == "" && user.lname == "") {
        document.getElementById("greeting").textContent="We will love to meet you!"
    } else {
        document.getElementById("greeting").textContent=`Hello, ${user.fname} ${user.lname}!`;

        document.getElementById("extra").textContent = `You are ${user.age} years old, a ${user.gender} and are ${user.relationshipStatus}. It's nice meeting you!`;
    }

}


function color() {
    // var color = document.querySelector("#color");
    var body = document.getElementById("bgcolor");
    var herocolor = document.querySelector(".hero")
    var herotextcolor = document.querySelector(".hero-text")
    var herosubtextcolor = document.querySelector(".hero-subtext")
    var copyrightcolor = document.querySelector(".copyright")
    let selectcolor = prompt("Select one of these colors\n\n1. Blue\n2. Red\n3. Green\n4. Brown/Maroon\n5. Black\n6. White");

    if (selectcolor == 1) {
        deepblue();
    } else if (selectcolor == 2) {
        red();
    } else if (selectcolor == 3) {
        green();
    } else if (selectcolor == 4) {
        brown();
    } else if (selectcolor == 5) {
        black();
    } else if (selectcolor == 6) {
        white();
    } else if (selectcolor == "") {
        alert("Sorry, please select one of the options.")
    }
    
    function deepblue() {
        
        body.style.background = "#73c2fb";
        herocolor.style.background = "#4682b4";
        herotextcolor.style.color = "white";
        herosubtextcolor.style.color = "white";
        copyrightcolor.style.color = "white";
        document.getElementById("hero-subtext").textContent = "The current background color is Blue";
    }
    function red() {
        
        body.style.background = "#e3242b";
        herocolor.style.background = "#990f02";
        herotextcolor.style.color = "white";
        herosubtextcolor.style.color = "white";
        copyrightcolor.style.color = "white";
        document.getElementById("hero-subtext").textContent = "The current background color is Red";
    }
    function green() {
        
        body.style.background = "#98bf64";
        herocolor.style.background = "#607d3b";
        herotextcolor.style.color = "white";
        herosubtextcolor.style.color = "white";
        copyrightcolor.style.color = "white";
        document.getElementById("hero-subtext").textContent = "The current background color is Green";
    }
    function brown() {
        
        body.style.background = "#80471c";
        herocolor.style.background = "#532915";
        herotextcolor.style.color = "white";
        herosubtextcolor.style.color = "white";
        copyrightcolor.style.color = "white";
        document.getElementById("hero-subtext").textContent = "The current background color is Brown";
    }
    function black() {
        
        body.style.background = "Black";
        // herocolor.style.background = "#4682b4";
        // herotextcolor.style.color = "white";
        // herosubtextcolor.style.color = "white";
        // copyrightcolor.style.color = "white";
        document.getElementById("hero-subtext").textContent = "The current background color is Black";
    }
    function white() {
        
        body.style.background = "White";
        // herocolor.style.background = "#4682b4";
        // herotextcolor.style.color = "white";
        // herosubtextcolor.style.color = "white";
        // copyrightcolor.style.color = "white";
        document.getElementById("hero-subtext").textContent = "The current background color is White";
    }
    // body.style.background = "black"
    // color.addEventListener("input", function(){
    //     console.log(color.value);
    // })
}


function hide() {
    const textToToggle = document.getElementById("hero-subtext");
    const toggleButton = document.getElementById("toggleButton");
    // let isTextVisible = true; // Flag to track text visibilit/y
    if (textToToggle.style.display == "block") {
      textToToggle.style.display = "none"; // Hide the text
      toggleButton.textContent = "Add Text"; // Change button text
    } else {
        textToToggle.style.display = "block"; // Show the text
        toggleButton.textContent = "Hide Text"; // Change button text
    }

     // const textToToggle = document.getElementById("hero-subtext");
    // const toggleButton = document.getElementById("toggleButton");

    // toggleButton.addEventListener("click", function () {
    //   textToToggle.style.display = textToToggle.style.display === "none" ? "block" : "none";
    //   toggleButton.textContent = textToToggle.style.display === "none" ? "Add Text" : "Hide Text";
    // });
}


//Passing Objects to functions
// var user = {
//     fname: "Jesuferanmi",
//     lname: "Agboola",
//     age: 20,
//     hobby: "None",
//     relationshipStatus: false,
// };

// console.log(user);