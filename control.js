

dominoes = [
    {d1: 22},
    {d2: 23},
    {d3: 24},
    {d4: 25},
    {d5: 26},
    {d6: 27},
   {d7: 32},
    {d8: 33},
    {d9: 34},
    {d10: 35},
    {d11: 36},
    {d12:37},
    {d13: 42},
   {d14: 43},
    {d15:44},
    {d16: 45},
    {d17: 46},
    {d18: 47},
    {d19: 52},
    {d20: 53},
    {d21: 54},
    {d22: 55}, 
    {d23: 56},
    {d24: 57},
    {d25: 62},
    {d26: 63},
    {d27: 64},
    {d28: 65},
    {d29: 66},
    {d30: 67},
    {d31: 72},
    {d32: 73},
    {d33: 74},
    {d34: 75},
    {d35: 76},
    {d36:77}
    ]
    let letters = 
    ["a","a","a","a","a","a","a","a","a","b","b","c","c","d","d","d","d","e","e","e","e","e","e","e","e","e","e","e","e","f","f","g","g","g","h","h","i","i","i","i","i","i","i","i","i","j","k","l","l","l","l",
    "m","m","n","n","n","n","n","n","o","o","o","o","o","o","o","o","p","p","q","r","r","r","r","r","r","s","s","s","s","t","t","t","t","t","t","u","u","u","u","v","v","w","w","x","y","y","z"];

    let dominoHand = [];
    let domHandValues=[];
    let domHandFirst = [];
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
    

//Initial domino allocation 5

function randomNumberDom() {
    return Math.abs(Math.floor(Math.random() * dominoes.length));
  }

//generate first domino hand
  
  for(let i=0; i<4; i++){
    console.log("generation running");
 
    let rand =randomNumberDom();
    
    dominoHand.push(dominoes[randomNumberDom()]);
    dominoes.splice(rand,1);
    console.log("dominoesrandomnumber", dominoes[rand]);
    console.log("dominoHand", dominoHand)
  }
 
  for(let i= 0; i<dominoHand.length; i++){
    domHandValues.push(...Object.values(dominoHand[i]));
  }
  
  console.log("value of dominoHand", Object.values(dominoHand[0]));
  dominoHand.map((i)=>i.value);
  console.log("domHandValues", domHandValues);
  domHandFirst.concat.apply = [...domHandValues];
  console.log("domHandFirst", domHandFirst.join(","));

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
    if(this.responseText.length !==14){
      firstWordValid =true; 
      document.querySelector(".word1Instruct").innerHTML = "Valid Word"
      document.querySelector(".buttons1").style["display"] = "none";
      console.log("firstWordValid", firstWordValid, wordText1)
    }else{
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
    if(this.responseText.length !==14){
      secondWordValid =true; 
      document.querySelector(".word2Instruct").innerHTML = "Congratulations, you completed a tile!";
  
      document.querySelector(".buttons2").style["display"] = "none";
      console.log("secondWordValid", secondWordValid, secondWord)
    }else{
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


//submitText

/*

    document.querySelector(".submit2").addEventListener("click", function(){
        console.log("text1", document.querySelector(".text2").value);
        secondWord = document.querySelector(".text2").value
    })*/




    
