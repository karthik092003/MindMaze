let rand
let randomColor
const num =["one","two","three","four","five","six","seven","eight","nine"]
let sequence =[]
let userSequence =[]
let begin = false
level=0
let flag = true
let user
const users = []
const levelCleared = []
document.getElementById("button-3").addEventListener("click",function(){
    user = document.getElementById("in").value
    console.log(user)
    document.getElementById("T").style.display="none"
    document.getElementById("g").style.display="flex"
    if(flag){
        start()
        flag=false
        begin=false
    }
    
})
function start(){
     document.addEventListener("keypress",function (){
    if(!begin){
        begin=true
        document.getElementById("level-title").innerText="Level" + level
        nextSequence()
    }
})
}
   




function nextSequence(){
    userSequence=[]
    level++
    document.getElementById("level-title").innerText="Level " + level
    rand=Math.floor(Math.random()*9)
    random=num[rand]
    sequence.push(random)
    $("#" + random).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/green.mp3");
    audio.play();
}
document.getElementById("one").addEventListener("click",function (){
    $("#one").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/green.mp3");
    audio.play();
    
    action("one")
    verify(userSequence.length-1)
})
document.getElementById("two").addEventListener("click",function (){
    $("#two").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/green.mp3");
    audio.play();
   
    action("two")
    verify(userSequence.length-1)
})
document.getElementById("three").addEventListener("click",function (){
    $("#three").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/green.mp3");
    audio.play();
    
    action("three")
    verify(userSequence.length-1)
})
document.getElementById("four").addEventListener("click",function (){
    $("#four").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/green.mp3");
    audio.play();
   
    action("four")
    verify(userSequence.length-1)
})
document.getElementById("five").addEventListener("click",function (){
    $("#five").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/green.mp3");
    audio.play();
    
    action("five")
    verify(userSequence.length-1)
})
document.getElementById("six").addEventListener("click",function (){
    $("#six").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/green.mp3");
    audio.play();
   
    action("six")
    verify(userSequence.length-1)
})
document.getElementById("seven").addEventListener("click",function (){
    $("#seven").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/green.mp3");
    audio.play();
   
    action("seven")
    verify(userSequence.length-1)
})
document.getElementById("eight").addEventListener("click",function (){
    $("#eight").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/green.mp3");
    audio.play();

    action("eight")
    verify(userSequence.length-1)
})
document.getElementById("nine").addEventListener("click",function (){
    $("#nine").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/green.mp3");
    audio.play();
   
    action("nine")
    verify(userSequence.length-1)
})
function action(num){
    let temp = num
    userSequence.push(temp) 
}
function verify(lvl){
    if(sequence[lvl]===userSequence[lvl]){
        console.log("yes")
        if(sequence.length===userSequence.length){
            setTimeout(function(){
                nextSequence()
            },1000)
        }
    }
    else{
        console.log("no")
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        document.getElementById("level-title").innerText="press any key to start"
        document.getElementById("g").style.display="none"
        document.getElementById("ch").style.display="flex"
        Restart()
        document.getElementById("l").addEventListener("click",function(){
            document.getElementById("ch").style.display="none"
            document.getElementById("lb").style.display="flex"
            document.getElementById("lh").addEventListener("click",function(){
                document.getElementById("lb").style.display="none"
                document.getElementById("T").style.display="flex"
            })
        })
        document.getElementById("h").addEventListener("click",function(){
            document.getElementById("ch").style.display="none"
            document.getElementById("T").style.display="flex"
        })
        
        
    }
}
function Restart(){

var ulElement = document.getElementById("u");
var liElements = ulElement.getElementsByTagName("li");
var liArray = Array.from(liElements);
liArray.forEach(function(li) {
  ulElement.removeChild(li);
});

var ulElement = document.getElementById("lvl");
var liElements = ulElement.getElementsByTagName("li");
var liArray = Array.from(liElements);
liArray.forEach(function(li) {
  ulElement.removeChild(li);
});

    users.push(user)
    levelCleared.push(level-1)
    console.log(users)
    console.log(levelCleared)
    insertionSort(levelCleared,users)
    console.log(users)
    console.log(levelCleared)
    for(let i=users.length-1;i>=0;i--){
        let temp = document.createElement("li")
        let text = document.createTextNode(users[i])
        temp.appendChild(text)
        document.getElementById("u").appendChild(temp)
        let temp1 = document.createElement("li")
        let text1 = document.createTextNode(levelCleared[i])
        temp1.appendChild(text1)
        document.getElementById("lvl").appendChild(temp1)
    }
    level=0
    sequence=[]
    flag=true
}




function insertionSort(lvl,us) {
    for (let i = 1; i < lvl.length; i++) {
        let currentlvl = lvl[i];
        let currentuser = us[i]
        let j = i - 1;
        
        while (j >= 0 && lvl[j] > currentlvl) {
            lvl[j + 1] = lvl[j];
            us[j+1] = us[j]
            j--;
        }
        
        lvl[j + 1] = currentlvl;
        us[j+1] = currentuser;
    }
    return lvl;
}

