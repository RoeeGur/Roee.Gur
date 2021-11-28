
 var Z = ("Roee") 
  console.log(Z);

  var imgs = [
    "1.jpg",
    "2.jpg",
    "1.jpg",
    "2.jpg",
    "1.jpg",
    "2.jpg",
    "1.jpg",
    "2.jpg",
    
];

  var i=0;

function play() { //my loop
    console.log("I'm in");
    setTimeout( ()=> {
        document.getElementById("HelloAnim").src=imgs[i];
        i++;
        if( i< imgs.length) { //תנאי של הרקורסיה
            play();
        }
        else{
          i=0;  
        } 
    }, 500);
}