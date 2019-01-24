var form = document.querySelector("form")
var imageURL = document.getElementById("imageURL")
var topText = document.getElementById("toptext")
var bottomText = document.getElementById("bottomtext")
var button = document.getElementById("button")
var box = document.getElementById("box")


form.addEventListener("submit", function(event){
    event.preventDefault();
    generate();
})


//for the generate function && quote use the ` next to 1


function generate(){
    var inserted = ` 
<div class="memesbox1">
    <div class="top-text">
        <h1 id="top">${topText.value}</h1>
    </div>
    <div>
        <img id="boximg" src=${imageURL.value}>
    </div>
    <div class="bottom-text">
   
        <h1 id="bottom">${bottomText.value}</h1>
    </div>
</div>
`
    box.insertAdjacentHTML('beforeend', inserted);

    imageURL.value = "";
    topText.value = "";
    bottomText.value = "";
}
