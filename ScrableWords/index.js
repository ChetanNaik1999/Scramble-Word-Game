console.log("Scrable Game");


let Guess=document.getElementById("Guess");
let text=document.getElementById("text");
let btn=document.getElementById("btn");
let sWords=["Python","Java","Go","PhP","Javasript","Django","Flask","NodeJs","Bootstrap","Angular","C++"];
let newWords="";
let RandomWord="";
// let Alword="";
let play=false;


btn.addEventListener("click",()=>{

    function createNewwords()
    {
        let ranWords=Math.floor(Math.random() * sWords.length);
        //  console.log(sWords[ranWords]);
        let newTempword=sWords[ranWords];
        // console.log(newTempword.split(""));
        return newTempword;
    }
    function scrambleWords(arr)
    {
      for( i=arr.length-1;i>=0;i--)
      {
       let temp=arr[i];
    //    console.log(temp);
       let j=Math.floor(Math.random()*(i+1));
       console.log(i);
       console.log(j);
       arr[i]=arr[j];
       arr[j]=temp;
      }
      return arr;
    }
 
    if(!play)
    {
        play=true;
        text.classList.toggle("hidden");   
        btn.innerHTML="Guess";
        newWords=createNewwords();
        RandomWord=scrambleWords(newWords.split(""));
        RandomWord=RandomWord.join("");
        Guess.innerHTML="Guess The Word => "+RandomWord;
      
    }
    else{
     
      
        Guess.innerHTML="Guess The Word "+RandomWord;
        btn.innerHTML="Click Here To Play Again";
        let tempWord=text.value;
        if(newWords===tempWord)
        {
            play=false;
            Guess.innerHTML=`You Are Guess Is Right Congratulations=> ${newWords} 
            <div>
            <img src="s.png" alt="smile.png" style="width:20px;height:20px;border-radius:50px">
            </div>
            `;
            btn.innerHTML="Next Guess";
            text.classList.toggle("hidden");
            text.value="";
        }
       
        else{
            play=true;
            Guess.innerHTML=`You are Guess Is Not Right=> ${RandomWord}
            <div>
            <img src="s2.png" alt="smile.png" style="width:30px;height:30px;border-radius:50px">
            </div>
            `;
            text.value="";
            // text.classList.toggle("hidden");   
            btn.innerHTML="Play Again";
        }
    
    }

});
