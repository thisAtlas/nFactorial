//Javascript for SOO om Kombinatorik og sandsynlighed.

//Variabel der gør getElementById()-funktionen nemmere at skrive.
var getID = function(value) {return document.getElementById(value);};

//Funktion der kan gøre når <body> loader i HTML-dokumentet. Bruges under testing.
function onLoad() {
	//itLoop();
	
}
//Funktion for iterativ metode. Kører ved klik på knap i html-siden.
function itLoop() {
	//Første variabel er det tal vi vil finde fakultatet af. itIn for Iterativ Input.
	var itIn;
	itIn = parseFloat(document.itIndex.itIn.value);
	console.log('itIn: ' + itIn);
	
	//i er et arbitrært tal vi bruger til at tælle op.
	var i;
	
	//fact (for factorial) er det variabel vi bruger til at beregne værdien er itIn!.
	var fact = 1;
	
	//Hvis itIn ikke er defineret sættes en tilfældig værdi mellem 1-10.
	if(itIn === undefined || itIn === null) {
		itIn = Math.ceil(Math.random()*10);
		console.log('Num gen is: ' + itIn);
	}
	
	/* Da 0! og 1! begge = 1 defineres det uden for algoritmen.
	 * Hvis itIn != 0 || 1 vil dette for-loop køre. Det tæller variablet 'fact' "op" så længe i, 
	 * som ved hver iteration bliver 1 større, er mindre end vores input. 
	 * fact opdateres ved at gange fact*i.
	 */
	if(itIn == 0 || itIn == 1) {
		fact = 1;
	}else{
		for(i=1; i<=itIn; i++) {
			fact=fact*i;
		}
	}
	//Printer resultatet.
	console.log('The factorial of ' + itIn + ' is ' + fact);
	getID('itDiv').innerHTML += 'The factorial of ' + itIn + ' is ' + fact + "<br/>";
}
/* //Den rekursive metode, set i opgaven. Bruges ikke på denne side.
function recursion(input) {
	if(input == 0) {
		return 1;
	} else {
		return input * recursion(input - 1);
	}
}
*/