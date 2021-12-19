// Object - What hiking spot would we advise the customer to try 
// Values
//		Been hiking before ? - yes/no 
//		Go Hiking In: Connacht, Ulster, Munster or Leinster ?
//		Hills, Flatter ground or don't mind ?
//		Afraid of heights or caves ?
//		Time: Do you have a few hours or a full day ?

// hide buttons below first stage so they will only open as they are called
function hideButtons(){
	// only show the first stage 
	document.getElementById("B2").style.display = "none";	
	document.getElementById("B3").style.display = "none";	
	document.getElementById("B4").style.display = "none";	
	document.getElementById("B5").style.display = "none";	
	document.getElementById("B6").style.display = "none";	
	document.getElementById("L1").style.display = "none";	
	document.getElementById("L2").style.display = "none";	
	document.getElementById("return2").style.display = "none";
}

// declare - true false 
var connacht = false;
var ulster = false;
var munster = false;
var leinster = false;
// easy / hard
var easy = false;
// caves heights
var caves = false;
var heights = false;
// time available
var day = false;
// output 
var msg = ("");
let return2 = ("");

// Testing
console.log(connacht);
console.log(ulster);
console.log(munster);
console.log(leinster);
console.log(easy);
console.log(caves);
console.log(heights);
console.log(day);

// first stage
function B1action(){
	// hide current element/block 
	document.getElementById("B1").style.display = "none";
	// show next element/block
	document.getElementById("B2").style.display = "block";
}

// second stage
//		Been hiking before ? - yes/no 
// Yes
function B2option1(){
	//easy = false;
	B2action();
}
// No
function B2option2(){
	easy = true;
	B2action();
}
// Hide second stage and show third stage
function B2action(){
	// hide current element/block 
	document.getElementById("B2").style.display = "none";
	// show next element/block
	document.getElementById("B3").style.display = "block";
}
// third stage
//		Go Hiking In: Connacht, Ulster, Munster, Leinster or Don't mind ?
// Connacht
function B3option1(){
	connacht = true;
	B3action();
}
// Ulster
function B3option2(){
	ulster = true;
	B3action();
}
// Munster
function B3option3(){
	munster = true;
	B3action();
}
// Leinster
function B3option4(){
	leinster = true;
	B3action();
}
// Don't mind
function B3option5(){
	connacht = true;
	B3action();
}
// Hide third stage and show fourth stage
function B3action(){
	//hide current element/block 
	document.getElementById("B3").style.display = "none";
	//show next element/block
	document.getElementById("B4").style.display = "block";
}
//fourth stage
//		Hills, Flatter ground or don't mind ?
// Hills
function B4option1(){
	B4action();
}
// Flatter Ground
function B4option2(){
	easy = true;
	B4action();
}
// Don't mind
function B4option3(){
	B4action();
}
// Hide fouth stage and show fifth stage
function B4action(){
	//hide current element/block 
	document.getElementById("B4").style.display = "none";
	//show next element/block
	document.getElementById("B5").style.display = "block";
}
//fifth stage
//		Afraid of heights or caves ?
// No heights
function B5option1(){
	heights = true;
	B5action();
}
// No caves
function B5option2(){
	caves = true;
	B5action();
}
// Don't mind
function B5option3(){
	easy = false;
	B5action();
}
// Hide fifth stage and show sixth stage
function B5action(){
	//hide current element/block 
	document.getElementById("B5").style.display = "none";
	//show next element/block
	document.getElementById("B6").style.display = "block";
}
//sixth stage
//		Time: Do you have a few hours or a full day ?
// a few hours
function B6option1(){
	//day = false;
	B6action();
}
// a good few hours
function B6option2(){
	//day = false;
	B6action();
}
// Almost the day
function B6option3(){
	day = true;
	B6action();
}
// Hide sixth stage, call functions to decide on advice to user and show advice to user
function B6action(){
	// call if statements
	decide();
	// calls advice2user
	advice2user();
	//hide current element/block 
	document.getElementById("B6").style.display = "none";
	//show next element/block
	document.getElementById("return2").style.display = "block";
	
// Testing 2
console.log(connacht);
console.log(ulster);
console.log(munster);
console.log(leinster);
console.log(easy);
console.log(caves);
console.log(heights);
console.log(day);
console.log("msg = "+msg);
}

// This function creates output to user and sends it to HTML
function advice2user(){
	// creating output to user
	output="We would advise that your next hiking adventure is in: "+ msg +". <br />";
	// output sent to index.html file
	document.getElementById("return2").innerHTML+=output;
}

// decide - if statements 
function decide(){
	if( connacht ){
		if( caves ){
			Inishbofin();
		}
		else if( heights ){
			Inis();
		}
		else if( easy ){
			Carrow();
		}
		else if( easy == false ){
			Patrick();
		}
	}
	else if( munster ){
		if( caves ){
			Burren();
		}
		else if( heights ){
			Carrauntoohil();
		}
		else if( easy ){
			Dingle();
		}
		else if( easy == false ){
			Carrauntoohil();
		}
	}
	else if( ulster ){
		if( heights ){
			Donard();
		}
		else if( easy ){
			Pilgrim();
		}
		else if( easy == false ){
			Glenveagh();
		}
	}
	else if( leinster ){
		if( heights ){
			Lugnaquilla();
		}
		else if( easy ){
			Gateway();
		}
		else if( easy == false ){
			Glendalough();
		}
	}
	else{
		alert("Please Try Again");
	}
}

// These fuctions fill in msg
// Connacht
// Croagh Patrick - 4.5 miles - 5 hours
function Patrick(){
	msg = ("Croagh Patrick");
	page3();
}
// Carrowtiege – The Children of Lir Loop - The hike is flat and approachable
// 6.2 miles - 2.5 hours
function Carrow(){
	msg = ("Carrowtiege – The Children of Lir Loop");
	page3();
}
// Inishbofin Loop - caves coves Pirate Queen Grace O’Malley
// Distance:Respectively: 8 km/8 km/5 km (5 mi/5 mi/3 mi) - 2.5/2.5/2 hours
function Inishbofin(){
	msg = ( "Inishbofin Loop - Pirate Queen Grace O’Malley" );
	page3();
}
// Dún Aonghasa - Inis Mór - 45min
function Inis(){
	msg = ("Dun Aonghasa - Inis Mor");
	page3();
}
// Ulster
// Slieve Donard in the Mourne Mountains - hills - 5.5 miles - 5 hours
function Donard(){
	msg = ("Slieve Donard in the Mourne Mountains");
	page2();
}
// The Pilgrim's Path at Slieve League clifs - 3.5 miles - 2.5 hours
function Pilgrim(){
	msg = ("The Pilgrim's Path at Slieve League");
	page2();
}
// Mt Errigal in Glenveagh National Park - 5 miles - 4 hours
function Glenveagh(){
	msg = ("Mt Errigal in Glenveagh National Park");
	page2();
}
// Munster
// Carrauntoohil - 8.7 miles - 7 hours
function Carrauntoohil(){
	msg = ("Carrauntoohil");
	page2();
}
// Mullaghmore, The Burren - 4 miles - 2-3 hours
function Burren(){
	msg = ("Mullaghmore, The Burren");
	page2();
}
// The Saint’s Road on the Dingle Peninsula - easy - 11 miles - 5.5-6 hours
function Dingle(){
	msg = ("The Saint’s Road on the Dingle Peninsula");
	page2();
}
// Leinster
// Glendalough in the Wicklow Mountains - Hike Pilgrim Path St Kevin’s Way - 18 miles - 1 day
function Glendalough(){
	msg = ("Glendalough in the Wicklow Mountains - Hike Pilgrim Path St Kevin’s Way");
	page3();
}
// Lugnaquilla - The Highest Mountain in Wicklow - 10 miles - 7 hours
function Lugnaquilla(){
	msg = ("Lugnaquilla - The Highest Mountain in Wicklow");
	page3();
}
// Gateway – Glendalough Loop - 3.15 miles - 1.27hrs
function Gateway(){
	msg = ("Gateway – Glendalough Loop");
	page3();
}

// Show link to info page
function page3(){
	document.getElementById("L1").style.display = "block";	
}

function page2(){
	document.getElementById("L2").style.display = "block";
}

// jQuery to hide and show top of game page - edited show time from 2000 to 800
$( "#hider" ).click(function() {
  $( "span:last-child" ).hide( "fast", function() {
    // Use arguments.callee so we don't need a named function
    $( this ).prev().hide( "fast", arguments.callee );
  });
});
$( "#shower" ).click(function() {
  $( "span" ).show( 800 );
});
