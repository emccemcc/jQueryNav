var uiChange = $("li");
//This will change all li items as soon as the page loads
//uiChange.hover().fadeTo("slow",.25);


//This will cause the list item to dim when hovered over
//and lose transparency when the cursor is removed
//V note on below, it will also do that to any item in a dropdown list
uiChange.hover(function() {
  //add opacity
  $( this ).fadeTo("slow",.25, function(){});
  //change color
//  $( this ).addClass("colorChangeClass");
},
function(){
  //remove opacity
  $( this ).fadeTo("slow",1, function(){});
  //remove color
//  $( this ).removeClass("colorChangeClass");
});

//Each < li > should change background colors when clicked on.
$("li").click( function(){

  $( this ).toggleClass("colorChangeClass");
});
//-----------Q
//what would auto unclick look like?


//When the user clicks on a < li > , the word 'Clicked!' should appear inside it.

$("li").click( function(){
  $(this).text("CLicked!");
});
