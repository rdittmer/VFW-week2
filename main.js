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

})