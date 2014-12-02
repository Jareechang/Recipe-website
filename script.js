$(document).ready(function(){

// GLOBAL VARIABLES ****************************************************

// switch to hide/show image
var switchcontrol=true;

//counter to keep track of numbers of items in ingredients list
var counter= $('#ingredients ul li').length;
console.log(counter)

//variable for ingredients h1 selector 
var $ingredientsh1 =$('#ingredients h1')



//A SELECTOR ARRAY FOR THE STEPS IN DIRECTION PANEL 
//step[0] = selecting step number 1 in direction panel
//....... 
//step[2] = selecting step number 3 in direction panel 

var step = [$('#directions div span h4:nth-child(1)'), $('#directions div span h4:nth-child(2)'), $('#directions div span h4:nth-child(3)')];
var togglestep = [["show()","hide()","hide()"],["hide()","show()","hide()"],["hide()","hide()","show()"]];

//counter to keep track of which toggle step to apply 
//arbitrary number step initially
var stepcount=4;

// A SELECTOR ARRAY FOR DIRECTION PANEL LIST ITEMS
//directionli[0] = selecting direction # 1
//....... 
//directionli[2] = selecting direciton #2
var directionli =[ $('#directions div ol li:nth-child(1)'), $('#directions div ol li:nth-child(3)'), $('#directions div ol li:nth-child(5)')]



//MISCELLANEOUS SECTION*************************************************

// animating the paragraphs before load up 
$('div p').animate({left: '-=100px'}, 500)
// possibly add a switch function for the different options 



//INGREDIENTS SECTION**************************************************INGREDIENTS SECTION START


//hiding the accordion menu when website is loaded
$("#ingredients").accordion({ header: "h1", collapsible: true, active: false });


$('#items li').click(function(){


$(this).hide();
counter--;

$('#directions h1').text("Directions")


//statement if all items are checked off the ingredients list
if( counter === 0 ){
 

$ingredientsh1.text("Let's start cooking!");
$ingredientsh1.css("color", "white")
$('#ingredients h4').fadeOut('slow');
$("#ingredients").accordion("destroy");



}

//statements if items are not checked off the ingredients list
else {
$ingredientsh1.text("You are still missing some key ingredients!");
$ingredientsh1.css("color","#F61D2F")
}



})

//INGREDIENTS SECTION**************************************************INGREDIENTS SECTION END







//DIRECTIONS SECTION****************************************************DIRECTIONS SECTION START


//collapsing the direction accordion initially
$("#directions").accordion({ header: "h1", collapsible: true, active: false });



//disabling directions accordion when all ingredients are not checked off-------------------------
$('#directions').accordion("disable")


$('#directions h1').click(function(){


if(counter === 0){

$('#directions').accordion("enable")


}

else {

	$(this).text("We can't cook without ingredients!")
}

})


$ingredientsh1.click(function(){

$('#directions h1').text("Directions")

})


//keep track of direction section---------------------------------------------------------------





step[0].click(function(){

stepcount = 0;

for(i=0;i<=2;i++){
eval("directionli" + "[" + i + "]" + "." + togglestep[stepcount][i])
step[0].css('color','white');
}

})



step[1].click(function(){

stepcount = 1;


for(i=0;i<=2;i++){
eval("directionli" + "[" + i + "]" + "." + togglestep[stepcount][i])
step[1].css('color','white');
}

})


step[2].click(function(){

stepcount = 2;

for(i=0;i<=2;i++){
eval("directionli" + "[" + i + "]" + "." + togglestep[stepcount][i])
step[2].css('color','white');
}

})




//DIRECTIONS SECTION****************************************************DIRECTIONS SECTION END

//options when clicked on the dietary menu bar 
$('div p').click(function(){

alert("To ensure we meet your dietary restrictions, we have provided an alternative list of ingredients")	
$('#ingredients').fadeOut('slow')

$('#ingredients').fadeIn('fast')


})

//IMAGES SECTION IN BANNER*********************************************** IMAGES SECTION IN BANNER START
for(i=2; i<=4; i++){

var $image= $(".image" +" " +">" + " " +"img:nth-child" + "(" + i + ")")

$image.hide()
}


//show/hide image when button is clicked 
$('.image h3').click(function(){
for(i=2; i<=4; i++){

var $image= $(".image" +" " +">" + " " +"img:nth-child" + "(" + i + ")")
$image.toggle('slow');


}



if (switchcontrol === true){
// indicates user has turned has clicked the button
//change h3 text to hide images
$('.image h3').text('Hide images')

//reset switch control to false
switchcontrol = false;

}

else {

//statement when the switchcontrol is 'false
$('.image h3').text('Show Images')
switchcontrol=true;
}


})

//IMAGES SECTION IN BANNER*********************************************** IMAGES SECTION IN BANNER END


});

