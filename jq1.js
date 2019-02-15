//js for ques 1
var btn1=function()
{
	$(document).ready(function() {
	console.log("hello world")
	});
}

//js for ques 2
var btn2=function()
{
  $(document).ready(function()
  {$("#test").addClass("load");
    });
}

//js for ques 3
var btn3=function()
{
  $(document).ready(function()
  {$("[class$=new]").css({'color':'blue'})
    });
}

//js for ques 4
var btn4=function()
{
  $(document).ready(function(){
    $("#submitButtonId").attr("disabled", "disabled");
  });
}

//js for ques 5
var btn5=function()
{
  $(document).ready(function(){
    $(".target").css("font-size","50px");
  });
}

//js for ques 6
var btn6=function()
{
  $('div.change').each(function() {

  // Create a new element and assign it attributes from the current element
  var NewElement = $("<p />");
  $.each(this.attributes, function(i, attrib){
    $(NewElement).attr(attrib.name, attrib.value);
  });

  // Replace the current element with the new one and carry over the contents
  $(this).replaceWith(function () {
    return $(NewElement).append($(this).contents());
    });
  });
}

//js for ques 7
var btn7=function()
{
  $(document).ready(function(){
   var node=$("#btn7").html()
  $("#btn7").append(node)
  });
}

//js for ques 8
function btn8()
{
  $(document).ready(function(){
  $("#message").append('<br /><p id="link">Click Here</p>');
  $("#link").on("click", function(e) {
    alert('Testing Click Event.');
    });
  });
}

//js for ques 9
$('#select9').on('change', function()
{
  // alert( this.value );
  var selected=this.value;
  console.log(selected);
  // $("#div9").after(selected)
   $("#div9").append(selected)
});

//js for ques 10
$("#select10").hover(function()
{
  console.log("in")
  $(".menuDiv").css({"display":"block","z-index":"1"})},
  function(){
  console.log("out")
  $(".menuDiv").css({"display":"none"})
}); 

//js for ques 11
$('#openlink11').on("click", function(e)
{
    e.preventDefault();
     alert('This link is disabled.'); 
});

//js for ques 12
$(document).ready(function()
{
  $('#parent').on("click", function(e) {
  //e.stopPropagation();
  alert('Parents Clicked!');
  });
  $('#child').on('click', function(e) {
    // clicked on descendant div
      e.stopPropagation();
      alert('child Clicked!');
  });
});

//js for ques 13
$("#btn13").click(function()
{

    var large = null;
    var hi = 0;
    $(".div13").each(function(){
      var h = $(this).height();
      if(h > hi){
         hi = h;
         large = $(this);
      }
    });
    large.css("background-color", "lightgrey");

});

//js for ques 14
$("#btn14").click(function()
{
  $(document).ready(function(){
  var large = null;
  $("td").each(function(){
    var h = $(this).text();
    if(parseInt(h) > 10){
       large = $(this);  
    }
    large.css("background-color", "lightpink"); 
    large.css("color", "white");    
    });
  });
});

//js for ques 15
  $("#btn15").click(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/todos/1", success: function(result){
      $("#div1").html(JSON.stringify(result));
    }});
  });


//js for ques 16
$(document).ready(function () 
{
  $(".btn16").click(function(){
  bid=$(this).attr("id");
  bid="#row"+bid;
  $.ajax({url:"https://jsonplaceholder.typicode.com/todos/1",success: function(result){
    $(bid).remove();
    }});
  });
});

//js for ques 17
var array = new Array("bug.jpg","mother.jpg","rose.jpg","nature3.jpg");

$(document).ready(function()
{
  var i = 0;
  $("#slider").css("background-image", "url(" + array[i] + ")");
  setInterval(function () {
    i++;
          if (i == array.length) {
            i = 0;
          }
          $("#slider").fadeOut("slow", function () {
              $(this).css("background-image", "url(" + array[i] + ")");
              $(this).fadeIn("slow");
          });
    }, 500);
});

