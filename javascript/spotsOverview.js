const spotsContainer = document.querySelector('.spots-container')
let photoTile = document.createElement('li');

let spots = [
   {name: 'Costa da Caparica',
   image: 'https://www.portuguesewaves.com/wp-content/uploads/2018/03/Caparica-Primaver-Surf-Fest.jpg',
    sort: 'beachbreak',
    page: 'costa-da-caparica',
    description: `Costa da Caparica is porbably Lisbon's bussiest beach, with a set of piers that create plenty of left- and righthander waves.`},
    
    {name: 'São Pedro',
    image: 'https://www.outdoyo.com/media/filer_public/bf/42/bf425799-0636-4dda-83a0-8015fcca51dd/4c3b8317-0438-4103-80a6-d82b8ac629f2.jpg',
    sort: 'beachbreak',
    page: 'sao-pedro',
    description: `This beachbreak is known for it's long righthand barrels.`},

    {name: 'Nazaré',
    image: 'https://i.pinimg.com/originals/74/19/5c/74195c913472d0262087a8cf5228cb75.jpg',
    sort: 'point',
    page: 'nazare',
    description: `As the biggest wave ever surfed on this planet, Nazaré isn't a spot for the faint hearted.`},
   
    {name: 'Arrifana',
    image: 'https://www.surf-forecast.com/system/images/2840/large/Arrifana.jpg?1308395035',
    sort: 'beachbreaks & point',
    page: 'arrifana',
    description: `Arrifana is known for it's consistent surf and provides waves for every level.`},

    {name: 'Carcavelos',
    image: 'https://cdn1.theinertia.com/wp-content/uploads/2020/02/carc-1.jpg',
    sort: 'beachbreak',
    page: 'carcavelos',
    description: `Situated just under 10 miles from Lisbon, Carcavelos is a charming little place with everything that makes life good. Great wine, great food, and some of the best surf in a surf-rich country.`},

    {name: 'Guincho',
    image: 'https://www.karmasurfretreat.com/wp-content/uploads/2019/02/guincho-wellen-perfekt-zum-surfen.jpg',
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


