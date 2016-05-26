// document.addEventListener( "DOMContentLoaded", function() {
//
// 	var firstButton = document.getElementById( "first-button" );
// 	var secondButton = document.getElementById( "second-button" );
//
// 	firstButton.addEventListener( "click", function() {
// 		firstButton.disabled = true;
// 		firstButton.innerHTML = "Off!";
// 		firstButton.style.backgroundColor = "red";
//
// 		secondButton.disabled = false;
// 		secondButton.innerHTML = "On!";
// 		secondButton.style.backgroundColor = "blue";
// 	} );
//
// 	secondButton.addEventListener( "click", function() {
// 		secondButton.disabled = true;
// 		secondButton.innerHTML = "Off!";
// 		secondButton.style.backgroundColor = "red";
//
// 		firstButton.disabled = false;
// 		firstButton.innerHTML = "On!";
// 		firstButton.style.backgroundColor = "blue";
// 	} );
//
//
// } );


$( document ).ready( function() {

	// $( "#first-button" ).on( "click", function() {
	// 	$( this ).attr( "disabled", "disabled" )
	// 		.text( "Off!" )
	// 		.css( "background-color", "red" );
	//
	// 	$( "#second-button" ).attr( "disabled", false )
	// 		.text( "On!" )
	// 		.css( "background-color", "blue" );
	// } );
	//
	// $( "#second-button" ).on( "click", function() {
	// 	$( this ).attr( "disabled", "disabled" )
	// 		.text( "Off!" )
	// 		.css( "background-color", "red" );
	//
	// 	$( "#first-button" ).attr( "disabled", false )
	// 		.text( "On!" )
	// 		.css( "background-color", "blue" );
	// } );

	$( "button" ).on( "click", function() {
		$( this ).attr( "disabled", "disabled" )
			.text( "Off!" )
			.css( "background-color", "red" );
		
		$( "button" ).not( this )
			.attr( "disabled", false )
			.text( "On!" )
			.css( "background-color", "blue" );
	} );
	
	
	$( "#input" ).on( "keyup", function() {
		console.log( $( this ).val() );
	} );

	$( "#input" ).on( "blur", function() {
		console.log( "Lost focus" );
	} );

	$( "#input" ).on( "focus", function() {
		console.log( "Focused!" );
	} );

	$( "#hider" ).on( "click", function() {
		$( this ).hide();

		setTimeout( function() {
			$( "#hider" ).show();
		}, 1000 );
	} );

	setTimeout( function() {
		$( "body" ).append( "<h1 id='goner'>I've been appended</h1>");
	}, 1000 );

	setTimeout( function() {
		$( "#goner" ).remove();
	}, 1500 );

});