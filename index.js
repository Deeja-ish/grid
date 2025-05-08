function changeColour(){
    let body = document.querySelector("body")
    if(body.classList.contains("dark_theme")){
        body.classList.remove("dark_theme")
    }else{
        body.classList.add("dark_theme")
    }
}
document.querySelector(".dark").addEventListener("click", changeColour)
function joinBookClub(){
    let name = prompt("Enter your Full Name:")
    alert("Hello " + name + ", Welcome to Khadija's Book Club")
}
document.querySelector("#book").addEventListener("click", joinBookClub)  
   
