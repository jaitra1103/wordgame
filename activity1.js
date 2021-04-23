score=0;
function update(){
    score=score+1;
    document.getElementById("scoredisplay").innerHTML="score"+score;
}
function save(){
localStorage.setItem("Score",score);  
}
