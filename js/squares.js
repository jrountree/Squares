var html = '';
var red;
var green;
var blue;
var rgbColor;

$("#userInput").submit(function(event){
	event.preventDefault();
	
	//$('#squares').detach();
	var x = $("#number").val();

	if (!isNaN(x)) {


			for (var i = 0; i < x; i += 1) {
			 red = Math.floor(Math.random() * 256 );
			 green = Math.floor(Math.random() * 256 );
			 blue = Math.floor(Math.random() * 256 );
			 rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
			 html += '<div class="block" style="background-color:' + rgbColor + '"></div>';  //actual square

			}

//:::::::::  Animate Blocks In :::::::::::: //
		//Javascript version:
			//document.getElementById("squares").innerHTML = html;
		//jQuery version:
			$('#squares').html(html);


			//Rotation fucntion
			jQuery.fn.rotate = function(degrees) {
				$(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
			             '-moz-transform' : 'rotate('+ degrees +'deg)',
			             '-ms-transform' : 'rotate('+ degrees +'deg)',
			             'transform' : 'rotate('+ degrees +'deg)'});
				return $(this);
				};

				$('.rotate').click(function() {
				    rotation += 5;
				    $(this).rotate(rotation);
			});


			//Block Animation In	
			$('.block').css({ opacity: 0,
							  height: 0,});
			$('.block').animate({ opacity: 1,
								  height: 50,
								  width: 50,
								  }, 300);
			$('.block').rotate(0);

//:::::::Mouse Effects ::::::::://

			//Mouse Over Block Effects
			$('.block').mouseover(function(event){
				var colorBack = $(this).css('background-color');
				$(this).rotate(10);
				$(this).css('background', 'black');
				$(this).animate({ height: 75,
								  width: 75,
								  margin: 10,
								  }, 300);			
				});

			//Mouse Leave Block Effects
			$('.block').mouseleave(function(){
				$(this).css('background', function(){
					red = Math.floor(Math.random() * 256 );
			 		green = Math.floor(Math.random() * 256 );
			 		blue = Math.floor(Math.random() * 256 );
			 		rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
			 		return rgbColor;
				});
				$(this).rotate(0);
				$(this).animate({ height: 50,
								  width: 50,
								  margin: 20,
								  }, 300);
			});

			//Mouse Click
			$('.block').click(function(){
				$(this).css('background', 'red');
				$(this).animate({ height: 85,
								  width: 85,
								  margin: 2,
								}, 50);
				$(this).rotate(30);
				$(this).toggle(400, 'swing');
			});

			
		} else {

			$('#squares').html(x + " is not a number");
		}

});
