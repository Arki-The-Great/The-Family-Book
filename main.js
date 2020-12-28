var reasons = [
    "My Sister",
    "Myself",
    "My Dad",
    "My Mom",
  ];
  
  var images = [
    "Pic1.jpg",
    "Pic2.jpg",
    "Pic4.jpg",
    "Pic3.png"
  ];

  
  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
}
   