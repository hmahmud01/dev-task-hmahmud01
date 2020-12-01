function openCart() {
  var screen = window.innerWidth;
  console.log(screen);
  if (screen < 400){
    document.getElementById("mySidenav").style.width = "295px";
    $("#overlay").addClass("active");  
  }else{
    document.getElementById("mySidenav").style.width = "375px";
    $("#overlay").addClass("active");
  }  
}
  
function closeCart() {
  document.getElementById("mySidenav").style.width = "0";
  $("#overlay").removeClass("active");
}

function openCart2() {
  var screen = window.innerWidth;
  console.log(screen);
  if (screen < 400){
    document.getElementById("mySidenav2").style.width = "295px";
    $("#overlay").addClass("active");  
  }else{
    document.getElementById("mySidenav2").style.width = "375px";
    $("#overlay").addClass("active");
  }  
}
  
function closeCart2() {
  document.getElementById("mySidenav2").style.width = "0";
  $("#overlay").removeClass("active");
}