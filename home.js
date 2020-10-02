let input = document.querySelector('#homeSearch');
let currentInput = input.value;
let htmlDropdown = document.querySelector('#searchDropdown');
showSpots = [];

let spots = ['Cascais', 'Costa da Caparica', 'Nazaré', 'Belém', 'Cova do Vapor', 'Carcavelos', 'Bicas'];                 // Array with all spots

input.addEventListener("input", function dropdown(){
    
    searchDropdown =  "";
    currentInput = input.value;
    
    
    console.log("currentInput: ",currentInput)
    for(let i = 0; i < spots.length; i++){
        if(spots[i].toLocaleLowerCase().includes(currentInput.toLocaleLowerCase())){
            htmlDropdown.style.visibility = "visible";                                // Display the updated list to the user
            let spotsLink = spots[i].split(" ").join("-")                             // Replace spaces in spot -names for "-" to create links
            searchDropdown +=  ` <a class = "dropdownOptions" href= ${spotsLink}.html>${spots[i]}</a>` 
            console.log("searchDropdown: ", searchDropdown)
            htmlDropdown.innerHTML = searchDropdown;}
        
        
        if(currentInput.length == 0 || !(searchDropdown.toLocaleLowerCase().includes(currentInput.toLocaleLowerCase()))){
            htmlDropdown.style.visibility = "hidden"}                                // Hide dropdown while input doesn't match spots
    }  
})

