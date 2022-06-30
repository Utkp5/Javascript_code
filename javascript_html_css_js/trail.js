function color1() {
    document.getElementById("hello1").style.backgroundColor = "orange"  
}
function color2() {
    document.getElementById("hello2").style.backgroundColor = "lightblue"
}
function color3() {
    document.getElementById("hello3").style.backgroundColor = "green"
} 
function colorchng()
{

    let colorchange = document.getElementsByClassName("goodMorning")
    for (let i = 0; i < colorchange.length; i++) 
    {
        colorchange[i].style.backgroundColor = "crimson";
        colorchange[i].innerHTML = " Welcome Utkarsh"

    }
}