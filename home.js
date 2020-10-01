let input = document.querySelector('#homeSearch');
let currentInput = input.value;
let htmlDropdown = document.querySelector('#searchDropdown');
showSpots = [];

const spots = ['Caiscais', 'Costa da Caparica', 'Nazaré', 'Belém', 'Cova do Vapor', 'Carcavelos', 'Bicas'];                 // Array with all spots

input.addEventListener("input", function dropdown(){
    
    searchDropdown =  "";
    currentInput = input.value;
    
    
    console.log("currentInput: ",currentInput)
    for(let i = 0; i < spots.length; i++){
        if(spots[i].toLocaleLowerCase().includes(currentInput.toLocaleLowerCase())){
            htmlDropdown.style.visibility = "visible"                                // Display the updated list to the user
            searchDropdown +=  "<hr>" + spots[i] 
            console.log("searchDropdown: ", searchDropdown)
            htmlDropdown.innerHTML = searchDropdown;}
        
        
        if(currentInput.length == 0 || !(searchDropdown.toLocaleLowerCase().includes(currentInput.toLocaleLowerCase()))){
            htmlDropdown.style.visibility = "hidden"}                                // Hide dropdown while input doesn't match spots
        
    }

        
})

// User types one character and we search an array to find all matching options
    


// When the user types we need to listen to the typing event
// Upon typing a letter call the function
// Loop through the array of options
// check all matching options (search helper methods)
// repaint the dom with all of the matching options
