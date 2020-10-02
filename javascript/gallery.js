function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  var allImages = "";
  
  for (var i = 0; i < 25; i++) {
    var width = getRandomSize(200, 400);
    var height = getRandomSize(200, 400);
    allImages += '<img src="https://images.pexels.com/photos/1681148/pexels-photo-1681148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/' + width + '/' + height + '" alt="beaches and surf spots">';
  }
  
  photos.innerHTML = allImages