var imgs = [
    "helloPic1.jpg",
    "helloPic2.jpg",
    "helloPic1.jpg",
    "helloPic2.jpg",
    "helloPic1.jpg",
    "helloPic2.jpg",
    "helloPic1.jpg",
    "helloPic2.jpg"
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

var person= {
    Fname: "Alma",
    Lname: "Shacham",
    FullName: function(){//   הפעלת פונקציה בתוך אובייקט לכן נרשום קודם את שם האובייקט ואז נקודיים ופונקציה דרך נוספת במקום פונקציה וסוגריים היא ()=>
        return this.Fname + " " + this.Lname;
    } 
};

console.log(person.FullName())