var numberToFind = Math.floor(Math.random()*101);
var remainingAttempts = 7;
var monchoix = window.prompt("Proposez un nombre entre 0 et 100","");

while (remainingAttempts > 1){
	remainingAttempts --;
	if (monchoix < numberToFind){
		window.alert("Le chiffre a trouver est plus grand");
		monchoix = window.prompt("Vous posséder " + remainingAttempts + " restants.");
		}
	else if (monchoix > numberToFind){
		window.alert("Le Chiffre a trouver est plus petit");
		monchoix = window.prompt("Vous posséder " + remainingAttempts + " restants.");
		}
	else if (remainingAttempts == 1){
		window.alert("Vous avez perdu");
		window.alert("Le chiffre a trouver etait " + numberToFind + ".");
	}
	else{
		window.alert("Vous avez trouver le chiffre exact");
		window.alert("le chiffre a trouver était bien " + numberToFind + " !! Bien joué vous êtes doué !");
		remainingAttempts = 0;
	}
	
}