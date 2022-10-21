

dominoes = [
    {d1: 22},
    {d2: 23},
    {d3: 24},
    {d4: 25},
    {d5: 26},
   {d6: 32},
    {d7: 33},
    {d8: 34},
    {d9: 35},
    {d10: 36},
   {d11: 43},
    {d12:44},
    {d13: 45},
    {d14: 46},
    {d15: 53},
    {d16: 54},
    {d17: 55}, 
    {d18: 56},
    {d19: 62},
    {d20: 63},
    {d21: 64},
    {d22: 65},
    {d23: 66},

    ]
    let letters = 
    ["a","a","a","a","a","a","a","a","a","b","b","c","c","d","d","d","d","e","e","e","e","e","e","e","e","e","e","e","e","f","f","g","g","g","h","h","i","i","i","i","i","i","i","i","i","j","k","l","l","l","l",
    "m","m","n","n","n","n","n","n","o","o","o","o","o","o","o","o","p","p","q","r","r","r","r","r","r","s","s","s","s","t","t","t","t","t","t","u","u","u","u","v","v","w","w","x","y","y","z"];
    
    let gridValues = [
      {tile1:0}, {tile2:0}, {tile3:0}, {tile4:0}, {tile5:0}, {tile6:0}, {tile7:0}, {tile8:0}, {tile9:0}, {tile10:0}, {tile11:0}, {tile12:0}
    ]


    let dominoHand = [];
    let domHandValues=[];
    let domHandKeys = [];
    let chosenKey = [];
    let domKey = "";
    let domHandFirst = [];
    let doms = [".dom1", ".dom2", ".dom3", ".dom4"];
    let domLeft = "";
    let domRight = "";
    let selectedDomino = false;
    let letterHand = [];
    let firstWord = ""; 
    let secondWord = ""; 
    let firstWordValid = false;
    let secondWordValid = false;
    let tiles = [".tile1", ".tile2", ".tile3", ".tile4", ".tile5", ".tile6", ".tile7", ".tile8", ".tile9", ".tile10", ".tile11", ".tile12", ".tile13", ".tile14", ".tile15"]
    let wordText = "";
    let wordNumber = 0;
    let wordText1 = ""
    let wordText2 = ""
    let firstProg = false; 
    let lettersUsed1 = [];
    let lettersUsed2 = [];
    let pngName = "";
    let chosenName = "";
    let chosenValue = 0;
    let domindex = 0;
    //first & second digits of domino
    let order = 0;
    let chosen1=0;
 
  let chosen2 = 0;
    let chosenNums = [];
    let gridTiles = [".domGrid1", ".domGrid2", ".domGrid3", ".domGrid4", ".domGrid5", ".domGrid6", ".domGrid7", ".domGrid8", ".domGrid9", ".domGrid10", ".domGrid11", ".domGrid12"]

    let firstGo=true;
    let tilePlaced = false;

    

//Initial domino allocation 5

function randomNumberDom() {
    return Math.abs(Math.floor(Math.random() * dominoes.length));
  }

//generate first domino hand
  
  for(let i=0; i<4; i++){
    console.log("generation running");
 
    let rand =randomNumberDom();
    ranDomino = dominoes[randomNumberDom()]
    dominoHand.push(ranDomino);
    dominoes.splice(rand,1);
    console.log("dominoes.length", dominoes.length)
    console.log("dominoesrandomnumber", dominoes[rand]);
    console.log("dominoHand", dominoHand)
  }



  //displayDominoes
  for(let i = 0; i<dominoHand.length; i++){
    selectedDomino = false;
    domHandKeys.push(...Object.keys(dominoHand[i]));
    //console.log("domHandKeys after push", domHandKeys);
    domHandKeys.map((i)=>i.key);

    let pngName =
 "<img src = Images/" +
    domHandKeys[i] +
    '.png  style="width:30px;height:60px;">';
    
   document.querySelector(doms[i]).innerHTML = pngName;
   console.log("doms[i].innerHTML before queryselector", doms[i].value);
 // pngNames.push(pngName);
    console.log("pngName", pngName);
    console.log("chosenName", chosenName);

}
    //user selects domino




//get selectedDominoValue/
let selDomValue = function(){
for(let j = 0; j<dominoHand.length; j++){ 

  if(selectedDomino==false){
    document.querySelector(doms[j]).addEventListener("click", function(){
      domHandValues.push(...Object.values(dominoHand[j]));
      chosenKey.push(...Object.keys(dominoHand[j]));
      console.log("chosenKey", chosenKey);
      
  
      console.log("value of dominoHand", Object.values(dominoHand[0]));
      ///let jvalue = dominoHand.map((j)=>j.value);
      //console.log("jvalue", jvalue);
      console.log("domHandValues", domHandValues);
      console.log("domHandVlaues tostraing", toString(domHandValues.join(",")));
      domKey = String(chosenKey);
      chosen1 = String(domHandValues[0])[0];
      chosen2 = String(domHandValues[0])[1];
      //domHandFirst.concat.apply = [...domHandValues];
      console.log("chosen1, chosen2", chosen1, chosen2);
      let chosenValue = String(chosen1+chosen2);
      console.log("domKey", domKey);
      chosenName =  
      "<img src = Images/" +
       domHandKeys[j] +
      '.png style="width:60px;height:120px;">';
      document.querySelector(".chosenDom").innerHTML = chosenName;
      document.querySelector(doms[j]).innerHTML = "";
      doms.splice(j,1);
      chosenValue = Object.values(dominoHand[j]);
      document.querySelector(".word1Instruct").innerHTML = `Make a word with ${chosen1} letters`
      document.querySelector(".word2Instruct").innerHTML = `Make a word with ${chosen2} letters`
      //function printChosenOne(){
      //  return chosen1};
    })    
  }
  }
}
selDomValue();
//selectDomino();
console.log("dominoHand outside function", dominoHand);
console.log("dominovalues outside function, chosenvalue",  chosenNums[0], chosenValue);
console.log("chosen1 outside function", chosen1);
//console.log("printChosenOne", printChosenOne());
console.log("domHandValuesnew", domHandValues)
console.log("domHandValuestostring"), String(domHandValues[0]);

  /*
  for(let j = 0; j<dominoHand.length; j++){
  if(selectedDomino==false){
    if(selectedDomino==false){
      document.querySelector(doms[j]).addEventListener("click", function(){
    //May or may not need below


   // domHandValues.push(...Object.values(dominoHand[j]))
   console.log("domHandValues in function", domHandValues);
    console.log("order", order)

    
    console.log("selecteddom false", selectedDomino);
  document.querySelector(doms[j]).addEventListener("click", function(){
    console.log("j", j)*/
    /*
    chosenName =  
    "<img src = Images/" +
     domHandKeys[j] +
    '.png style="width:60px;height:120px;">';
    chosenValue = Object.values(dominoHand[j]);
  
    console.log("chosenValue afterdefined", chosenValue)
   */


    
   

    //document.querySelector(doms[i]).innerHTML = pngName;
    console.log("dominoHand after splice", dominoHand);
    console.log("chosenvalue after splice", dominoHand);
    console.log("selecteddom", selectedDomino);
    



console.log("selecteddom after function", selectedDomino);
selectedDomino=true;


  //generate first letter hand 
  function randomNumberLet() {
    return Math.abs(Math.floor(Math.random() * letters.length));
  }

  for(let i=0; i<15; i++){
    let randLetter =randomNumberLet();
    letterHand.push(letters[randLetter]);
}
console.log("letterHand", letterHand);

//populate letter tiles
for(let i=0; i<letterHand.length; i++){
  document.querySelector(tiles[i]).innerHTML = `${letterHand[i]}`;

}
//console.log("get tile 1 value", document.querySelector(".tile1").value);

//decide if eventlistener for 1st or second wordTextBox



//Make Word 1st field




for(let i = 0; i<15; i++){
document.querySelector(tiles[i]).addEventListener("click", function(){
  if(wordNumber!==2){
    console.log("wordNumber in 1", wordNumber);
  wordText1+=letterHand[i];
  lettersUsed1.push(tiles[i])
  document.querySelector(".wordText1").innerHTML = wordText1;
  document.querySelector(".buttons1").style["display"] = "inline-block";
  console.log("wordText1 after created", document.querySelector(".wordText1").innerHTML);

  document.querySelector(tiles[i]).style["display"]= "none"; 
  
}

});

};
redo1();
//redo first word
function redo1(){
  console.log("redo1 running")
document.querySelector(".redo1").addEventListener("click", function(){
  document.querySelector(".wordText1").innerHTML = "";
 lettersUsed1.forEach((item)=>document.querySelector(`${item}`).style["display"] = "inline-block");
 wordText1 = "";
 lettersUsed1=[];
});
};


//Create 2nd Word





  console.log("wordNumber in function two", wordNumber)
  
  for(let i = 0; i<15; i++){

  document.querySelector(tiles[i]).addEventListener("click", function(){

    if(wordNumber ==2){
    wordText2+=letterHand[i];
    lettersUsed2.push(tiles[i]); 
    console.log("lettersUsed2")
    document.querySelector(".wordText2").innerHTML = wordText2;
    document.querySelector(".buttons2").style["display"] = "inline-block";
  
    document.querySelector(tiles[i]).style["display"]= "none"; 
//if undo display all tiles, reset everything
    
    //check if answer 1 submitted
    
  }})
  }
  
redo2();
  function redo2(){
    document.querySelector(".redo2").addEventListener("click", function(){
      document.querySelector(".wordText2").innerHTML = "";
      console.log("lettersused2 in function for it", lettersUsed2);
      wordText2= "";
      
      lettersUsed2.forEach((item)=>document.querySelector(item).style["display"] = "inline-block");
      lettersUsed2 = [];
      wordNumber=2;
    });
  }


//Word API from Wiktionary

//Word1

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
    console.log("xhr responsetext", xhr.responseText);
    console.log("xhr responsetext", xhr.responseText[0]);
          var parser = new DOMParser();  
      doc = parser.parseFromString(this.responseText, 'text/xml'); 
  
    doc = parser.parseFromString(this.responseText, 'text/xml'); 
    if(this.responseText.length !==14&&document.querySelector(".wordText1").innerHTML.length==chosen1){
      firstWordValid =true; 
      document.querySelector(".word1Instruct").innerHTML = "Valid Word"
      document.querySelector(".buttons1").style["display"] = "none";
      console.log("firstWordValid", firstWordValid, wordText1)
    }else if(document.querySelector(".wordText1").innerHTML.length!==Number(chosen1)){
      
      console.log("wordtext1length, chosen1.length", document.querySelector(".wordText1").innerHTML.length, chosen1);
      document.querySelector(".word1Instruct").innerHTML = `The word doesn't have the right amount of letters. It needs ${chosen1} letters. Try Again.`
      document.querySelector(".wordText1").innerHTML = "";
 lettersUsed1.forEach((item)=>document.querySelector(`${item}`).style["display"] = "inline-block");
 wordText1 = "";
 lettersUsed1=[];
 wordNumber = 1;
 document.querySelector(".word2Instruct").style["display"] = "none";
    }
    else{
      firstWordValid  = false;
      document.querySelector(".word1Instruct").innerHTML = "Not a Valid Word. Try Again."
      document.querySelector(".wordText1").innerHTML = "";
 lettersUsed1.forEach((item)=>document.querySelector(`${item}`).style["display"] = "inline-block");
 wordText1 = "";
 lettersUsed1=[];
 wordNumber = 1;
 console.log("wordNumber", wordNumber)
    }


	}
});


console.log("firstWord", firstWord);

document.querySelector(".submit1").addEventListener("click", function(){

  firstWord = document.querySelector(".wordText1").value
  console.log("firstWord after 1st defined", firstWord);
    console.log("submit1 clicked")
    wordText1 = 0;
    wordNumber = 2;
    //make text for 2nd word appear
    document.querySelector(".word2Instruct").style["display"] = "Inline-block";



xhr.open("GET", `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${document.querySelector(".wordText1").innerHTML}`);
xhr.setRequestHeader("X-RapidAPI-Key", "9befc1d2a6msh43bf070da1abde6p1d37c1jsn616d294fe695");
xhr.setRequestHeader("X-RapidAPI-Host", "lingua-robot.p.rapidapi.com");

xhr.send(data);
});



//API Submit 2nd word
const data2 = null;

const xhr2 = new XMLHttpRequest();
xhr2.withCredentials = true;

xhr2.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
    console.log("xhr responsetext", xhr.responseText);
    //console.log("xhr responsetext", xhr.responseText[0]);
          var parser = new DOMParser();  
      doc = parser.parseFromString(this.responseText, 'text/xml'); 
  
    doc = parser.parseFromString(this.responseText, 'text/xml'); 
    console.log("this.responseText", this.responseText);
    if(this.responseText.length !==14 &&document.querySelector(".wordText2").innerHTML.length==chosen2){
      secondWordValid =true; 
      document.querySelector(".word2Instruct").innerHTML = "Congratulations, you completed a tile!";
      document.querySelector(".presentDom").innerHTML = "<strong>Click on a space in the domino grid on the top to place your tile. Remember: dominoes can only be placed next to each other if they have the same number of dots on their connecting sides.</strong>"
      document.querySelector(".buttons2").style["display"] = "none";
      console.log("secondWordValid", secondWordValid, secondWord);
      selectDomGrid();
      //flag to ensure domino can't be placed twice
      tilePlaced = false;
    }else if(document.querySelector(".wordText2").innerHTML.length!==Number(chosen2)){
      
      console.log("wordtext1length, chosen1.length", document.querySelector(".wordText2").innerHTML.length, chosen2);
      document.querySelector(".word2Instruct").innerHTML = `The word doesn't have the right amount of letters. It needs ${chosen2} letters. Try Again.`
      document.querySelector(".word2Instruct").style["display"] = "inline-block";
      document.querySelector(".wordText2").innerHTML = "";
 lettersUsed2.forEach((item)=>document.querySelector(`${item}`).style["display"] = "inline-block");
 wordText1 = "";
 lettersUsed2=[];
 wordNumber = 2;
 }
    
    
    else{
      secondWordValid  = false;
      document.querySelector(".word2Instruct").innerHTML = "Not a Valid Word. Try Again."
      document.querySelector(".wordText2").innerHTML = "";
      console.log("lettersused2 in function for it", lettersUsed2);
      wordText2= "";
      
      lettersUsed2.forEach((item)=>document.querySelector(item).style["display"] = "inline-block");
      lettersUsed2 = [];
      wordNumber=2;
     
    }

	}
});
console.log("secondWord", secondWord);
document.querySelector(".submit2").addEventListener("click", function(){
  //document.querySelector(".submit2").innerHTML = "Do word again"
  secondWord = document.querySelector(".wordText2").value

  console.log("second Word after 1st defined", secondWord);
    console.log("submit2 clicked")
    wordText2 = 0;
    wordNumber = 1;


xhr2.open("GET", `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${document.querySelector(".wordText2").innerHTML}`);
xhr2.setRequestHeader("X-RapidAPI-Key", "9befc1d2a6msh43bf070da1abde6p1d37c1jsn616d294fe695");
xhr2.setRequestHeader("X-RapidAPI-Host", "lingua-robot.p.rapidapi.com");

xhr2.send(data2);
})

function selectDomGrid(){
  if(tilePlaced ==false){
  for(let i=0; i<gridTiles.length; i++){
    document.querySelector(gridTiles[i]).addEventListener("click", function(){
      console.log("domTile selected");
      if(i>=4 && i<=7){
      pngName =
      "<img src = Images/" +
         domKey +
         '.png  style="width:30px;height:60px;">'}else
         {console.log("pngName with rotation");
      pngName =
          "<img src = Images/" +
             domKey +
             '.png  style="width:30px;height:60px;transform:rotate(-90deg);margin-top:-15px;">'

         }
      document.querySelector(gridTiles[i]).innerHTML = pngName;
      let chosenString = String(chosen1)+String(chosen2);
      console.log("chosenString", chosenString);
      gridValueTemp = gridValues[i];
   gridValues.gridValueTemp = chosenString;
   console.log("gridValues.gridValueTemp", gridValues.gridValueTemp);
   console.log("gridvaluesi", gridValues[i]);
   console.log("object.values(gridtiles", Object.values(gridValues[i]));
   tilePlaced = true;

    })
  }
  
}
}


//submitText

/*

    document.querySelector(".submit2").addEventListener("click", function(){
        console.log("text1", document.querySelector(".text2").value);
        secondWord = document.querySelector(".text2").value
    })*/




    
