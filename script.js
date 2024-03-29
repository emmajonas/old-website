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

// When the user scrolls down 20px from the top of the document, show the button

window.addEventListener('scroll', () => {
    scrollFunction();
});

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
