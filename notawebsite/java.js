    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            }
            else{
                entry.target.classList.remove('show')
            }
        })  
    });


    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) =>  observer.observe(el));

var headersToAnimate = ["This is not the End","Credits to Seafoamboy for the Animations","Credits also to Hololive EN","And to everyone who supported me in this Journey,","Thank you!","...",".....","What are you waiting for?","...",".....","hmm?","...", ".....","Oh, you're still here?","...",".....","Well, I guess I'll just leave you with this","...",".....","So a queen is of course a girl right?","At least in ancient times","and pawns can turn into a queen","so all pawns must be girls too","...","and pawn can turn into any piece","except the king","...","that means all the pieces beside the king","is a girl","...","....."];
const placeholder = "ㅤ";
var startReversAnimationAfter = 500; //ms

function reverseAnimation(headerIndex){
  var i = headersToAnimate[headerIndex].length -1, delay = 0;
  for (; i >= 0 ; i--, delay++) {
    let string = headersToAnimate[headerIndex].substr(0, i);
    setTimeout('document.getElementById("Header").innerHTML = \''+placeholder + string + '\';', 100 * delay);
  }
  
   setTimeout(function(){ animateHeaders(headerIndex + 1)}, 100 * delay + startReversAnimationAfter);
}
function animateHeaders(headerIndex){
  var i =0;
  if(headerIndex ==  headersToAnimate.length){
    headerIndex = 0;
  }
  for (; i < headersToAnimate[headerIndex].length; i++) {
    let string = headersToAnimate[headerIndex][i]
    setTimeout('document.getElementById("Header").innerHTML += \'' + string + '\';', 100 * i );
  }
 
 setTimeout(function(){reverseAnimation(headerIndex)}, 100 * i + startReversAnimationAfter);
}

animateHeaders(0)