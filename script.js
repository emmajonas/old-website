let state = 0;
function changePlus(){
    if(state == 0){
        document.getElementById("menuButton").innerHTML = "-";
        state = 1;
    }
    else{
        document.getElementById("menuButton").innerHTML = "+";
        state = 0;
    }
}