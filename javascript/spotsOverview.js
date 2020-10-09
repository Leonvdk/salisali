const spotsContainer = document.querySelector('.spots-container')
let photoTile = document.createElement('li');

let spots = [
   {name: 'Costa da Caparica',
    image: './spotsOverviewImages/Caparica.jpg',
    sort: 'beachbreak',
    page: 'costa-da-caparica',
    description: `Costa da Caparica is porbably Lisbon's bussiest beach, with a set of piers that create plenty of left- and righthander waves.`},
    
    {name: 'São Pedro',
    image: './spotsOverviewImages/Sao-Pedro-do_Estoril.jpg',
    sort: 'beachbreak',
    page: 'sao-pedro',
    description: `This beachbreak is known for it's long righthand barrels.`},

    {name: 'Nazaré',
    image: './spotsOverviewImages/Nazare.jpg',
    sort: 'point',
    page: 'nazare',
    description: `As the biggest wave ever surfed on this planet, Nazaré isn't a spot for the faint hearted.`},
   
    {name: 'Arrifana',
    image: './spotsOverviewImages/arrifana.jpg',
    sort: 'beachbreaks & point',
    page: 'arrifana',
    description: `Arrifana is known for it's consistent surf and provides waves for every level.`},

    {name: 'Carcavelos',
    image: './spotsOverviewImages/carcavelos.jpg',
    sort: 'beachbreak',
    page: 'carcavelos',
    description: `Situated just under 10 miles from Lisbon, Carcavelos is a charming little place with everything that makes life good. Great wine, great food, and some of the best surf in a surf-rich country.`},

    {name: 'Guincho',
    image: './spotsOverviewImages/gunicho.jpg',
    sort: 'beachbreak',
    page: 'guincho',
    description: `Thirty minutes from Lisbon, Guincho is a long stretched beach with mellow surf in summer and punchy winter waves`}
]
console.log("length spots: ", spots.length)
for( let i = 0; i < spots.length; i++){
    spotsContainer.innerHTML += `<div class = "spot-tile">
    <span class = "spot-name">${spots[i].name}</span>
    <img class = "spot-image" src= ${spots[i].image}>
    <a href= "${spots[i].page}.html" class= spot-info>${spots[i].description}</a></div>`

}


