
// function play(){
    //     $("td").text("X");
    
    // }
 var winningIndex = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6]];

var table=$("td");
//var qs = new Querystring();
var gameType;
gameType ="two-players";
console.log(gameType);
var player="X";
var play=true;
var score ={
    "X":0,"O":0,"Tie":0};
    $("#x-score").text(score["X"]);
$("#o-score").text(score["O"]);
$("#tie").text(score["Tie"]);
console.log(score["X"]);

$("#two-players").css("background-color","gray");
$("#easy").on("click",easyclicked);
$("#hard").on("click",hardclicked);
$("#two-players").on("click",twoplayersclicked);

function easyclicked(){
    gameType="easy";
    play=true;
    $("td").text("");
    $("button").css("background-color","white"); 
    $("#easy").css("background-color","gray"); 
}
function hardclicked(){
    gameType="hard";
    play=true;
    $("td").text("");
    $("button").css("background-color","white"); 
    $("#hard").css("background-color","gray"); 
}
function twoplayersclicked(){
    gameType="two-players";
    play=true;
    $("td").text("");
    $("button").css("background-color","white"); 
    $("#two-players").css("background-color","gray"); 
}


$("td").click(function () {
    if($(event.target).text()==""){
    if(gameType=="two-players"){
    var tdId=jQuery(this).attr("id");
    if($("#"+tdId).text()=="" && play==true){
    $("#"+tdId).text(player);}
    if(player=="X"){
    player="O";}
else{
    player="X"
}
winner();

}

if(gameType=="easy"){
    $(event.target).text("X");
   winner();
    random();
    winner();}

if(gameType=="hard"){
  
    $(event.target).text("X");
    winner();
    computerwins();
    winner();
}}});



function random(){
console.log("random");
var index=[];
index[0]=$("#one");
index[1]=$("#two");
index[2]=$("#three");
index[3]=$("#four");
index[4]=$("#five");
index[5]=$("#six");
index[6]=$("#seven");
index[7]=$("#eight");
index[8]=$("#nine");
var randomArray=[];
for (var i=0; i<table.length;i++){
    if( index[i].text()==""){
       randomArray.push(index[i]);
}
}

randomArray[Math.floor(Math.random()*randomArray.length)].text("O");
}


$(".playAgain").click(function () {
    play=true;
$("td").text("");


});
//$("td").on("click",play);
function winner(){
    var index=[];
index[0]=$("#one").text();
index[1]=$("#two").text();
index[2]=$("#three").text();
index[3]=$("#four").text();
index[4]=$("#five").text();
index[5]=$("#six").text();
index[6]=$("#seven").text();
index[7]=$("#eight").text();
index[8]=$("#nine").text();

for (var i=0; i<index.length;i++){
    console.log(index[i]);
}


if(index[0]==index[1] && index[1]==index[2]){
    if(index[0]!="" && play==true){
        score[index[0]]++;
        play=false; 
    alert("The winner is: "+index[0]);
}
}
 else
if(index[0]==index[4] && index[4]==index[8]){
    if(index[0]!="" && play==true){
        score[index[0]]++;
        play=false; 
        alert("The winner is: "+index[0]);
    }
}
else
if(index[2]==index[4] && index[4]==index[6]){
    if(index[2]!="" && play==true ){
        score[index[2]]++;
        play=false; 
        alert("The winner is: "+index[2]);}
} else
if(index[2]==index[5] && index[5]==index[8]){
    if(index[2]!="" && play==true){
        score[index[2]]++;
        play=false; 
        alert("The winner is: "+index[2]);}  
}else
if(index[1]==index[4] && index[4]==index[7]){
    if(index[1]!="" && play==true){
        score[index[1]]++;
        play=false; 
        alert("The winner is: "+index[1]);}
}else
if(index[0]==index[3] && index[3]==index[6]){
    if(index[0]!="" && play==true){
        score[index[0]]++;
        play=false; 
        alert("The winner is: "+index[0]);}
}else
if(index[3]==index[4] && index[4]==index[5]){
    if(index[3]!="" && play==true){
        score[index[3]]++;
        play=false; 
        alert("The winner is: "+index[3]);}
}else
if(index[6]==index[7] && index[7]==index[8]){
    if(index[6]!="" && play==true){
        score[index[6]]++;
        play=false; 
        alert("The winner is: "+index[6]);}}
        else
     if (!index.includes("")){
    score["Tie"]++;
    alert("Tie");
}
$("#x-score").text(score["X"]);
$("#o-score").text(score["O"]);
$("#tie").text(score["Tie"]);

}






function computerwins() {
    var index = [];
    index[0] = $("#one");
    index[1] = $("#two");
    index[2] = $("#three");
    index[3] = $("#four");
    index[4] = $("#five");
    index[5] = $("#six");
    index[6] = $("#seven");
    index[7] = $("#eight");
    index[8] = $("#nine");


    if (index[4].text() === "") {
        index[4].text("O");
    }else if(index[5].text()=="X" && index[7].text() && index[8].text()==""){

        index[8].text("O");
    }
     else {
        var tempArr = [];
        var tempArr2 = [];
        for (var i = 0; i < winningIndex.length; i++) {
            tempArr[0] = index[winningIndex[i][0]];
            tempArr[1] = index[winningIndex[i][1]];
            tempArr[2] = index[winningIndex[i][2]];
            tempArr2[0] = index[winningIndex[i][0]].text();
            tempArr2[1] = index[winningIndex[i][1]].text();
            tempArr2[2] = index[winningIndex[i][2]].text();
            //console.log(winning[i][0]);
            //console.log(winning[i][1]);
            //console.log(winning[i][2]);

            
if (!tempArr2.includes("X") && tempArr2.includes("")){
    {var countO=0;
for(var j=0;j<tempArr2.length;j++)
    if(tempArr2[j]=="O"){
        
        countO++;
if(countO==2){
    console.log("I am winning");
    var ind = tempArr2.indexOf("");
    tempArr[ind].text("O");
    return;
    }
    }
}
}}


for (var i = 0; i < winningIndex.length; i++) {
    tempArr[0] = index[winningIndex[i][0]];
    tempArr[1] = index[winningIndex[i][1]];
    tempArr[2] = index[winningIndex[i][2]];
    tempArr2[0] = index[winningIndex[i][0]].text();
    tempArr2[1] = index[winningIndex[i][1]].text();
    tempArr2[2] = index[winningIndex[i][2]].text();
if (tempArr2.includes("X") && tempArr2.includes("") && !tempArr2.includes("O")){
    {var countX=0;
    for(var j=0;j<tempArr2.length;j++)
if(tempArr2[j]=="X"){
countX++;
if(countX==2){              
 var ind = tempArr2.indexOf("");
 console.log("do not let the X win");
tempArr[ind].text("O");
return;
}
}
}
 }}
 for (var i = 0; i < winningIndex.length; i++) {
    tempArr[0] = index[winningIndex[i][0]];
    tempArr[1] = index[winningIndex[i][1]];
    tempArr[2] = index[winningIndex[i][2]];
    tempArr2[0] = index[winningIndex[i][0]].text();
    tempArr2[1] = index[winningIndex[i][1]].text();
    tempArr2[2] = index[winningIndex[i][2]].text();

            if (!tempArr2.includes("X") && tempArr2.includes("")) {
               // console.log(tempArr);
               console.log("try to win");
                var ind = tempArr2.indexOf("");
                tempArr[ind].text("O");
                return;
            }
        }
        random();
    }}
