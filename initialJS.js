var uiChange = $("li");
//This will change all li items as soon as the page loads
//uiChange.hover().fadeTo("slow",.25);


//This will cause the list item to dim when hovered over
//and lose transparency when the cursor is removed
$("li").hover(function() {
  $( this ).fadeTo("slow",.25, function(){});
},
function(){
  $( this ).fadeTo("slow",1, function(){});
});
//^note on above, it will also do that to any item in a dropdown list

//to-do list
//Each < li > should change background colors when clicked on.
//When the user clicks on a < li > , the word 'Clicked!' should appear inside it.
