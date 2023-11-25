/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function showmore() {
    var x=document.getElementById("but1");
    var y=document.getElementById("imgs");
    var z=document.getElementById("but2");
    if(y.style.display==="none")
    {
      x.style.display="none";
      y.style.display="flex";
      y.style.flexDirection="row";
      z.style.display="block";
      y.style.textAlign="center";
    }
    else{
      x.style.display="flex";
      y.style.display="none";
      z.style.display="none";
      x.style.textAlign="center";
      y.style.textAlign="center";
    }
  }