
var winningIndex = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6]];
var gameType;
gameType ="two-players";
var play=true;
var player="X";
var score ={"X":0, "O":0, "Tie":0};
$("#x-score").text(score["X"]);
$("#o-score").text(score["O"]);
$("#tie").text(score["Tie"]);
$("#two-players").css("background-color","gray");
$(".mode-button").on("click",modeclicked);

function modeclicked(event)
{
$("button").css("background-color","white"); 
$(event.target).css("background-color","gray");
gameType=$(event.target).attr("id");
console.log(gameType);
play=true;
$("td").text("");
reset_score();
}

function reset_score()
{
score["X"]=0;
score["O"]=0;
score["Tie"]=0;
$("#x-score").text(score["X"]);
$("#o-score").text(score["O"]);
$("#tie").text(score["Tie"]);
}


$("td").click(function() 
{
    if(play===true)
    {
    if($(event.target).text()=="")
    {
    if(gameType=="two-players")
    {
    if($(event.target).text()=="" )
    {
    $(event.target).text(player);
     }
    if(player=="X")
    {
    player="O";
    }
    else{
    player="X"
    }}

    winner();
    if(gameType=="easy"){
    $(event.target).text("X");
    winner();  
    random();
    winner();
   }

    if(gameType=="hard" || gameType=="intermediate"){
    $(event.target).text("X");
    winner();
    computerwins();
    winner();
      }}}});

function random(){
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
for (var i=0; i<index.length;i++)
{
    if( index[i].text()=="")
{
       randomArray.push(index[i]);
}}
randomArray[Math.floor(Math.random()*randomArray.length)].text("O");
winner();
}

$(".playAgain").click(function () {
    play=true;
$("td").text("");
});

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

for (var i=0;i<winningIndex.length;i++){
    var index1=index[winningIndex[i][0]];
    var index2=index[winningIndex[i][1]];
    var index3=index[winningIndex[i][2]];
if(index1==index2 && index2==index3){
    if(index1 !="" && play==true){
            score[index1]++;
            play=false; 
            alert("The winner is: "+index1);
}}}

if (!index.includes("") && play==true ){
    score["Tie"]++;
            play=false; 
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
        // I think this position is the best
    }
    else
    if(index[5].text()=="X" && index[7].text()=="X" && index[8].text()=="" && gameType=="hard")
    {
        index[8].text("O");
        return;
/*
__|__|__
__|__|X
__|X |X

this condition will check if the x has two possibilities

    */  

     }
     else 
     {
        var tempArr = [];
        var tempArr2 = [];

        for (var i = 0; i < winningIndex.length; i++) {
            tempArr[0] = index[winningIndex[i][0]];
            tempArr[1] = index[winningIndex[i][1]];
            tempArr[2] = index[winningIndex[i][2]];
            tempArr2[0] = index[winningIndex[i][0]].text();
            tempArr2[1] = index[winningIndex[i][1]].text();
            tempArr2[2] = index[winningIndex[i][2]].text();
            if(index[8].text()=="X" && index[4].text()=="X" && index[2].text()=="" && gameType=="hard")
            {
                index[2].text("O");
                return; 
            } 
if (!tempArr2.includes("X") && tempArr2.includes(""))
    {
var countO=0;
for(var j=0;j<tempArr2.length;j++)
    if(tempArr2[j]=="O")
    {
         //this condition will check if there is two O  and  will win if there is  
        countO++;
if(countO==2)
    {
    console.log("I am winning");
    var ind = tempArr2.indexOf("");
    tempArr[ind].text("O");
    return;
    }}}}}


for (var i = 0; i < winningIndex.length; i++) {
    tempArr[0] = index[winningIndex[i][0]];
    tempArr[1] = index[winningIndex[i][1]];
    tempArr[2] = index[winningIndex[i][2]];
    tempArr2[0] = index[winningIndex[i][0]].text();
    tempArr2[1] = index[winningIndex[i][1]].text();
    tempArr2[2] = index[winningIndex[i][2]].text();
if (tempArr2.includes("X") && tempArr2.includes("") && !tempArr2.includes("O")){
        //this condition will check if there is two X 
    {var countX=0;
    for(var j=0;j<tempArr2.length;j++)
if(tempArr2[j]=="X"){
countX++;
if(countX==2){              
 var ind = tempArr2.indexOf("");
 console.log("do not let the X win");
tempArr[ind].text("O");
return;
}}}}}

 for (var i = 0; i < winningIndex.length; i++) {
    tempArr[0] = index[winningIndex[i][0]];
    tempArr[1] = index[winningIndex[i][1]];
    tempArr[2] = index[winningIndex[i][2]];
    tempArr2[0] = index[winningIndex[i][0]].text();
    tempArr2[1] = index[winningIndex[i][1]].text();
    tempArr2[2] = index[winningIndex[i][2]].text();

            if (!tempArr2.includes("X") && tempArr2.includes("")) {
                 // if there is two O and there is no X try to win 
               console.log("try to win");
                var ind = tempArr2.indexOf("");
                tempArr[ind].text("O");
                return;
            }}
        random();
    }
