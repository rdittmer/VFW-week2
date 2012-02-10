// Ryan Dittmer
// Project 2
// VFW 1201
// Add Bill js 

window.addEventListener( "DOMContentLoaded", function(){

	function storeData()
	{
		var id         = Math.floor( Math.random( 1 * 100001 ) );
		var item       = {};
		
		item.billtype  = ["Bill Type:"  , $('billtype').value];
		item.payto     = ["Pay To:"     , $('payto').value];
		item.payamount = ["Pay Amount:" , $('payamount').value];
		item.paywith   = ["Pay With:"   , paywithValue];
		item.paydate   = ["Pay Date:"   , $('paydate').value];
		item.notes     = ["Notes"       , $('notes').value];
		
		localStorage.setItem( id, JSON.stringify( item ) );
		alert( "Bill Added!" );
	}

	function getSelectedRadio()
	{
		var radios = document.forms[0].paytype;
		
		for ( var i = 0; i < radios.length; i++ )
		{
			if ( radios[i].checked )
				paywithValue = radio[i].value;
		}
	}
	
	function getData()
	{
		toggleControls( "on" );
		if( localStorage.length === 0 ){
			alert( "You currently have no saved bills." );
		}
		var makeDiv  = document.createElement( 'div' );
		makeDiv.setAttribute( "id", "items" );
		var makeList = document.createElement( 'ul' );
		makeDiv.appendChild( makeList );
		document.body.appendChild( makeDiv );
		$( 'items' ).style.display = "block";
		for( var i=0, len=localStorage.length; i<len; i++ ){
			var makeli      = document.createElement( 'li' );
			var linksLi     = document.createElement( 'li' );
			makeList.appendChild( makeli );
			var key         = localStorage.key( i );
			var value       = localStorage.getItem( key );
			var obj         = JSON.parse( value );
			var makeSubList = document.createElement( 'ul' );
			makeli.appendChild(makeSubList);
			for( var n in obj ){
				var makeSubli       = document.createElement( 'li' );
				makeSubList.appendChild( makeSubli );
				var optSubText      = obj[n][0] + " " + obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild( linksLi );
			} 
			makeItemLinks( localStorage.key( i ), linksLi ); 
		}
	}
	
	function toggleControls( n )
	{
		switch( n )
		{
			case "on":
				$('billForm').style.display = "none";
				$('clear').style.display    = "inline";
				$('displayData').style.display = "none";
				$('addNew').style.display = "inline";
				break;
				
			case "off":
				$('billForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayData').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
				
			default:
				return false;	
		}
	}
	
	function clearLocal(){
		if( localStorage.length === 0 ){
			alert( "You have no saved bills." );
		}else{
			localStorage.clear();
			alert( "All bills have been deleted!" );
			window.location.reload();
			return false;
		}
	}
	
	var paywithValue;
	
	var displayLink = $( 'displayData' );
	displayLink.addEventListener( "click", getData );
	var clearLink   = $( 'clear' );
	clearLink.addEventListener( "click", clearLocal );
	var save        = $( 'submit' );
	save.addEventListener( "click", storeData );
	
});