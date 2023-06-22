var count=0;
function subscribebutton(){
    var valueformbutton=document.getElementById("button").value
    if(valueformbutton="Subscribe")
    {
        document.getElementById("message").innerHTML="Subscribed"
        document.getElementById("button").setAttribute("value","Subscribed")
        document.getElementById("buttonicon").style.display="inline"
        document.getElementById("dropdownicon").style.display="inline"

    }
    ++count;
    if(count>1)
    {
        document.getElementById("Container").style.display="block"
    }
}
function discont()
{
    document.getElementById("container").style.display="none"
}
function replaceicon(iconval)
{
    if(iconval=="All")
    {
        document.getElementById("buttonicon").src="./ring bell.png"
    }
     else if(iconval=="per")
    {
        document.getElementById("buttonicon").src="./mute bell.png"
    }
     else {

     }
}