//Javascript for SOO om Kombinatorik og sandsynlighed.

//Variabel der gør getElementById()-funktionen nemmere at skrive.
var getID = function(value) {return document.getElementById(value);};

//Funktion der kan gøre når <body> loader i HTML-dokumentet. Bruges under testing.
function onLoad() {
	//itLoop();	
	//recLoop();
}
//Funktion for iterativ metode. Kører ved klik på knap i html-siden.
function itLoop() {
	//Første variabel er det tal vi vil finde fakultatet af. itin for Iterativ Input.
	var itin;
	itin = parseFloat(document.index.itin.value);
	console.log(itin);
	
	//i er et arbitrært tal vi bruger til at tælle op.
	var i;
	
	//fact (for factorial) er det variabel vi bruger til at beregne værdien er itin!.
	var fact = 1;
	
	//Hvis itin ikke er defineret sættes en tilfældig værdi mellem 1-10.
	if(itin === undefined || itin === null) {
		itin = Math.ceil(Math.random()*10);
		console.log('Num gen is: ' + itin);
	}
	
	/* Da 0! og 1! begge = 1 defineres det uden for algoritmen.
	 * Hvis itin != 0 || 1 vil dette for-loop køre. Det tæller variablet 'fact' "op" så længe i, 
	 * som ved hver iteration bliver 1 større, er mindre end vores input. 
	 * fact opdateres ved at gange fact*i.
	 */
	if(itin == 0 || itin == 1) {
		fact = 1;
	}else{
		for(i=1; i<=itin; i++) {
			fact=fact*i;
		}
	}
	//Printer resultatet.
	console.log('The factorial of ' + itin + ' is ' + fact);
	getID('itDiv').innerHTML += 'The factorial of ' + itin + ' is ' + fact + "<br/>";
}