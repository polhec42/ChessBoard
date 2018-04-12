var steviloPotez = 1;

function pawn(x, colour) {
    /*
    - Hodi eno polje naprej razen če se še ni premaknil
    - Jemlje v stran
    */
    
	/*
	Colour parameter ~ 0 za belega in 1 za črnega => 
	s tem onemogočimo goljufanje da klikneš belega kmeta in se zato spremeni v črnega, saj zdaj preveri katera barva je bila
	nazadnje premaknjena
	*/
	
    //Beli je na potezi
    if ((steviloPotez % 2 != 0) && (colour == 0)) {
        moznePoteze = [];
        if (x > 70) {
            moznePoteze[0] = x - 10;
            moznePoteze[1] = x - 20;
            if (x % 10 != 1) {
                if (document.getElementById(x - 11).innerHTML.search(/black_/) > 60) {
                    moznePoteze.push(x - 11);
                }
            }
            if (x % 10 != 8) {
                if (document.getElementById(x - 9).innerHTML.search(/black_/) > 60) {
                    moznePoteze.push(x - 9);
                }
            }
            /* Tukaj dodaj jemanje
			- Pogledaš če je križnih poljih slučajno prazno (''), saj bomo poljem ki imajo našo figuro dodali neki .innerHTML
			- 
			
			
			*/
            //dodamo onclick za vsako polje, preko katerega lahko dostopamo do možnih potez
            for (i = 0; i < moznePoteze.length; i++) {
                var td = document.getElementById(moznePoteze[i].toString());
                td.setAttribute('onclick', 'novoPoljeBeli(' + moznePoteze[i] + ', ' + x + ', "pawn");');
                // td.className = 'blue';
            }

            console.log(moznePoteze);
        }
        else {
            moznePoteze[0] = x - 10;
            //Jemanje figur
            /*
			var vseFigure = document.getElementsByTagName("IMG");
			    for(n = 0; n < vseFigure.length; n++){
			        if((parseInt(vseFigure[n].id) == (x-11))){}
			        moznePoteze.push(x - 11);
			    }
			}*/
            if (x % 10 != 1) {
                if (document.getElementById(x - 11).innerHTML.search(/black_/) > 60) {
                    moznePoteze.push(x - 11);
                }
            }
            if (x % 10 != 8) {
                if (document.getElementById(x - 9).innerHTML.search(/black_/) > 60) {
                    moznePoteze.push(x - 9)
                }
            }

            /*
                if (parseInt(document.getElementsByTagName("IMG").id) == (x-11)) {
                    moznePoteze.push(x - 11);
                }
                if (document.getElementById((x - 9).toString()).innerHTML.search(/black_/) == '') {
                    moznePoteze.push(x - 9);
                }
                */

            for (i = 0; i < moznePoteze.length; i++) {

                var td = document.getElementById(moznePoteze[i].toString());
                td.setAttribute('onclick', 'novoPoljeBeli(' + moznePoteze[i] + ', ' + x + ', "pawn");');
                //td.className = 'blue';
            }

            console.log(moznePoteze);

        }

    }
        //Črni je na potezi
		
    else if ((steviloPotez % 2 == 0) && (colour == 1)) {
        moznePoteze = [];
        if (x < 30) {
            moznePoteze[0] = x + 10;
            moznePoteze[1] = x + 20;

            if (x % 10 != 8) {
                if (document.getElementById(x + 11).innerHTML.search(/white/) > 60) {
                    moznePoteze.push(x + 11);
                }
            }
            if (x % 10 != 1) {
                if (document.getElementById(x + 9).innerHTML.search(/white_/) > 60) {
                    moznePoteze.push(x + 9)
                }
            }

            //dodamo onclick za vsako polje, preko katerega lahko dostopamo do možnih potez
            for (i = 0; i < moznePoteze.length; i++) {

                    var td = document.getElementById(moznePoteze[i].toString());
                    td.setAttribute('onclick', 'novoPoljeCrni(' + moznePoteze[i] + ', ' + x + ', "pawn");');
                    //td.className = 'blue';
                }
            
            console.log(moznePoteze);
        }
        else {
            moznePoteze[0] = x + 10;
            if (x % 10 != 8) {
                if (document.getElementById(x + 11).innerHTML.search(/white_/) > 60) {
                    moznePoteze.push(x + 11);
                }
            }
            if (x % 10 != 1) {
                if (document.getElementById(x + 9).innerHTML.search(/white_/) > 60) {
                    moznePoteze.push(x + 9)
                }
            }

            for (i = 0; i < moznePoteze.length; i++) {

                    var td = document.getElementById(moznePoteze[i].toString());
                    td.setAttribute('onclick', 'novoPoljeCrni(' + moznePoteze[i] + ', ' + x + ', "pawn");');
                    // td.className = 'blue';
                
                }

            console.log(moznePoteze);
        }
    }
    
}
function rook(x, colour) {
	//Beli Rook
    if ((steviloPotez % 2 != 0) && (colour == 0)) {
        moznePoteze = [];

        //Išče vse možne poteze
        for (i = x - 10; i >= 11; i -= 10) {
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60 ){
                moznePoteze.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }

        for (i = x + 10; i <= 88; i += 10) {
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                moznePoteze.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }

        for (i = x + 1; (i % 10) <= 8; i++) {
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                moznePoteze.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }

        for (i = x - 1; (i % 10) >= 1; i--) {
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                moznePoteze.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }

        //Onclick handlerji 
        for (i = 0; i < moznePoteze.length; i++) {
            var td = document.getElementById(moznePoteze[i].toString());
            td.setAttribute('onclick', 'novoPoljeBeli(' + moznePoteze[i] + ', ' + x + ', "rook");');
            // td.className = 'blue';
        }
        console.log(moznePoteze);

    }

    //Crni Rook
    if ((steviloPotez % 2 != 1) && (colour == 1)) {
        moznePoteze = [];
  
        //Išče vse možne poteze
        for (i = x - 10; i >= 11; i -= 10) {
            if (document.getElementById(i).innerHTML == "") {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                moznePoteze.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }

        for (i = x + 10; i <= 88; i += 10) {
            if (document.getElementById(i).innerHTML == "") {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                moznePoteze.push(i)
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                break;
            }
        }
		for (i = x + 1; (i % 10) <= 8; i++) {
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
			    moznePoteze.push(i);
                break;
            }
        }

        for (i = x - 1; (i % 10) >= 1; i--) {
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {

                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
			    moznePoteze.push(i);
                break;
            }
        }

        //Onclick handlerji 
        for (i = 0; i < moznePoteze.length; i++) {
            var td = document.getElementById(moznePoteze[i].toString());
            td.setAttribute('onclick', 'novoPoljeCrni(' + moznePoteze[i] + ', ' + x + ', "rook");');
            // td.className = 'blue';
        }

        console.log(moznePoteze);

    }
}
function knight(x, colour) {
    /*
    Mozne poteze: 


    */
    //Beli konj
    if (steviloPotez % 2 != 0 && colour == 0) {
        var moznePoteze = [
            x - 19,
            x - 8,
            x + 12,
            x + 21,
            x + 19,
            x + 8,
            x - 12,
            x - 21
        ];

        var moznaPolja = [];

        for (i = 0; i < moznePoteze.length; i++) {
            for (j = 10; j <= 80; j += 10) {
                for (k = 1; k <= 8; k++) {
                    moznaPolja.push(j + k);
                }
            }
            for (n = 0; n < moznaPolja.length; n++) {
                if (moznePoteze[i] == moznaPolja[n]) {
                    if (document.getElementById(moznePoteze[i]).innerHTML.search(/white/) > 60) {
                        continue;
                    }
                    else {

                        var td = document.getElementById(moznePoteze[i].toString());
                        td.setAttribute('onclick', 'novoPoljeBeli(' + moznePoteze[i] + ', ' + x + ', "knight");');
                    }
                }
            }
        }
        console.log(moznePoteze);
    }

    //Crni konj
    if (steviloPotez % 2 == 0 && colour == 1) {
        var moznePoteze = [
            x - 19,
            x - 8,
            x + 12,
            x + 21,
            x + 19,
            x + 8,
            x - 12,
            x - 21
        ];

        var moznaPolja = [];

        for (i = 0; i < moznePoteze.length; i++) {
            for (j = 10; j <= 80; j += 10) {
                for (k = 1; k <= 8; k++) {
                    moznaPolja.push(j + k);
                }
            }


            for (n = 0; n < moznaPolja.length; n++) {
                if (moznePoteze[i] == moznaPolja[n]) {
                    if (document.getElementById(moznePoteze[i]).innerHTML.search(/black/) > 60) {
                        continue;
                    }
                    else {

                        var td = document.getElementById(moznePoteze[i].toString());
                        td.setAttribute('onclick', 'novoPoljeCrni(' + moznePoteze[i] + ', ' + x + ', "knight");');
                    }
                }
            }
        }
		
         console.log(moznePoteze);
    }
   
}
function bishop(x, colour) {
    //Beli bishop
	
	/*
    if (steviloPotez % 2 != 0 && colour == 0) {
        var moznePoteze = [];

        var moznaPolja = [];

        
            for (j = 10; j <= 80; j += 10) {
                for (k = 1; k <= 8; k++) {
                    moznaPolja.push(j + k);
                    
                }
            }
            var a;
            for (n = 0; n < moznaPolja.length; n++) {
                
                if (a == moznaPolja[n]) {

                }
            }
        
    }
    //console.log(moznePoteze);
	*/
	
	//Beli Bishop
    if ((steviloPotez % 2 != 0) && (colour == 0)) {
        moznePoteze = [];

        //Išče vse možne poteze
		//Diagonala - SV
        for (i = x - 9; (i % 10 <= 8) && (i >= 10); i -= 9) {
			//Ker loop vrtimo večkrat ker imam dva pogoja, se moramo prepričati, da ni element s tem indexom null
			if(document.getElementById(i) != null){
				if ((document.getElementById(i).innerHTML == "")) {
					moznePoteze.push(i);
				}
				else if (document.getElementById(i).innerHTML.search(/black/) > 60 ){
					moznePoteze.push(i);
					break;
				}
				else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
					break;
				}
			}
		}
		//Diagonala - JZ
        for (i = x + 9; (i <= 88) && (i % 10 >= 1); i += 9) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                moznePoteze.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }
		}
		//Diagonala - SZ
        for (i = x - 11; ((i % 10) >= 1) && (i >= 10); i-=11) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                moznePoteze.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
			}
        }
		//Diagonala - JV
        for (i = x +11; ((i % 10) <= 8) && (i <=88); i+=11) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                moznePoteze.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }
		}

        //Onclick handlerji 
        for (i = 0; i < moznePoteze.length; i++) {
            var td = document.getElementById(moznePoteze[i].toString());
            td.setAttribute('onclick', 'novoPoljeBeli(' + moznePoteze[i] + ', ' + x + ', "bishop");');
            // td.className = 'blue';
        }

        console.log(moznePoteze);

    }
	else if ((steviloPotez % 2 != 1) && (colour == 1)) {
        moznePoteze = [];

        //Išče vse možne poteze
		//Diagonala - SV
        for (i = x - 9; (i % 10 <= 8) && (i >= 10); i -= 9) {
			//Ker loop vrtimo večkrat ker imam dva pogoja, se moramo prepričati, da ni element s tem indexom null
			if(document.getElementById(i) != null){
				if ((document.getElementById(i).innerHTML == "")) {
					moznePoteze.push(i);
				}
				else if (document.getElementById(i).innerHTML.search(/black/) > 60 ){

					break;
				}
				else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
					moznePoteze.push(i);
					break;
				}
			}
		}
		//Diagonala - JZ
        for (i = x + 9; (i <= 88) && (i % 10 >= 1); i += 9) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {

                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                moznePoteze.push(i);
				break;
            }
        }
		}
		//Diagonala - SZ
        for (i = x - 11; ((i % 10) >= 1) && (i >= 10); i-=11) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                moznePoteze.push(i);
				break;
            }
			}
        }
		//Diagonala - JZ
        for (i = x +11; ((i % 10) <= 8) && (i <=88); i+=11) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                moznePoteze.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {

                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                moznePoteze.push(i);
				break;
            }
        }
		}

        //Onclick handlerji 
        for (i = 0; i < moznePoteze.length; i++) {
            var td = document.getElementById(moznePoteze[i].toString());
            td.setAttribute('onclick', 'novoPoljeCrni(' + moznePoteze[i] + ', ' + x + ', "bishop");');
            // td.className = 'blue';
        }

        console.log(moznePoteze);
 }
	
	
}
function king(x, colour) {
   
    //Beli king
    if (steviloPotez % 2 != 0 && colour == 0) {
        
        var moznePoteze = [
            x + 10,
            x - 10,
            x + 1,
            x - 1,
            x + 9,
            x - 9,
            x + 11,
            x - 11
        ];

        var moznaPolja = [];

        for (i = 0; i < moznePoteze.length; i++) {
            for (j = 10; j <= 80; j += 10) {
                for (k = 1; k <= 8; k++) {
                    moznaPolja.push(j + k);
                }
            }

            for (n = 0; n < moznaPolja.length; n++) {

                if (moznePoteze[i] == moznaPolja[n]) {

                    if (document.getElementById(moznePoteze[i]).innerHTML.search(/white/) > 60) {
                        continue;
                    }
                    else {

                        var td = document.getElementById(moznePoteze[i].toString());
                        td.setAttribute('onclick', 'novoPoljeBeli(' + moznePoteze[i] + ', ' + x + ', "king");');
                    }
                }


            }
        }
       
    }
    //Črni king
    if (steviloPotez % 2 == 0 && colour == 1) {

        var moznePoteze = [
            x + 10,
            x - 10,
            x + 1,
            x - 1,
            x + 9,
            x - 9,
            x + 11,
            x - 11
        ];

        var moznaPolja = [];

        for (i = 0; i < moznePoteze.length; i++) {
            for (j = 10; j <= 80; j += 10) {
                for (k = 1; k <= 8; k++) {
                    moznaPolja.push(j + k);
                }
            }
            
            for (n = 0; n < moznaPolja.length; n++) {

                if (moznePoteze[i] == moznaPolja[n]) {

                    if (document.getElementById(moznePoteze[i]).innerHTML.search(/black/) > 60) {
                        continue;;
                    }
                    else {

                        var td = document.getElementById(moznePoteze[i].toString());
                        td.setAttribute('onclick', 'novoPoljeCrni(' + moznePoteze[i] + ', ' + x + ', "king");');
                    }
                }
            }

        }


    }
    
    console.log(moznePoteze);
}



function queen(x, colour) {
	var potezeQueen = [];
	//Beli Rook-del Queen
    if ((steviloPotez % 2 != 0) && (colour == 0)) {


        //Išče vse možne poteze
        for (i = x - 10; i >= 11; i -= 10) {
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60 ){
                potezeQueen.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }

        for (i = x + 10; i <= 88; i += 10) {
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                potezeQueen.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }

        for (i = x + 1; (i % 10) <= 8; i++) {
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                potezeQueen.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }

        for (i = x - 1; (i % 10) >= 1; i--) {
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                potezeQueen.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }

        //Onclick handlerji 
        for (i = 0; i < potezeQueen.length; i++) {
            var td = document.getElementById(potezeQueen[i].toString());
            td.setAttribute('onclick', 'novoPoljeBeli(' + potezeQueen[i] + ', ' + x + ', "queen");');
            // td.className = 'blue';
        }


    }
	//Crni Rook del Queena
    else if ((steviloPotez % 2 != 1) && (colour == 1)) {
        
  
        //Išče vse možne poteze
        for (i = x - 10; i >= 11; i -= 10) {
            if (document.getElementById(i).innerHTML == "") {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                potezeQueen.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }

        for (i = x + 10; i <= 88; i += 10) {
            if (document.getElementById(i).innerHTML == "") {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                potezeQueen.push(i)
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                break;
            }
        }
		for (i = x + 1; (i % 10) <= 8; i++) {
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
			    potezeQueen.push(i);
                break;
            }
        }

        for (i = x - 1; (i % 10) >= 1; i--) {
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {

                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
			    moznePoteze.push(i);
                break;
            }
        }

        //Onclick handlerji 
        for (i = 0; i < potezeQueen.length; i++) {
            var td = document.getElementById(potezeQueen[i].toString());
            td.setAttribute('onclick', 'novoPoljeCrni(' + potezeQueen[i] + ', ' + x + ', "queen");');
            // td.className = 'blue';
        }
		}
	//Beli Bishop-del Queena
    if ((steviloPotez % 2 != 0) && (colour == 0)) {


        //Išče vse možne poteze
		//Diagonala - SV
        for (i = x - 9; (i % 10 <= 8) && (i >= 10); i -= 9) {
			//Ker loop vrtimo večkrat ker imam dva pogoja, se moramo prepričati, da ni element s tem indexom null
			if(document.getElementById(i) != null){
				if ((document.getElementById(i).innerHTML == "")) {
					potezeQueen.push(i);
				}
				else if (document.getElementById(i).innerHTML.search(/black/) > 60 ){
					potezeQueen.push(i);
					break;
				}
				else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
					break;
				}
			}
		}
		//Diagonala - JZ
        for (i = x + 9; (i <= 88) && (i % 10 >= 1); i += 9) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                potezeQueen.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }
		}
		//Diagonala - SZ
        for (i = x - 11; ((i % 10) >= 1) && (i >= 10); i-=11) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                potezeQueen.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
			}
        }
		//Diagonala - JV
        for (i = x +11; ((i % 10) <= 8) && (i <=88); i+=11) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                potezeQueen.push(i);
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                break;
            }
        }
		}

        //Onclick handlerji 
        for (i = 0; i < potezeQueen.length; i++) {
            var td = document.getElementById(potezeQueen[i].toString());
            td.setAttribute('onclick', 'novoPoljeBeli(' + potezeQueen[i] + ', ' + x + ', "queen");');
            // td.className = 'blue';
        }

        
    }
	
	//Črni Bishop del Queena
	else if ((steviloPotez % 2 != 1) && (colour == 1)) {
        

        //Išče vse možne poteze
		//Diagonala - SV
        for (i = x - 9; (i % 10 <= 8) && (i >= 10); i -= 9) {
			//Ker loop vrtimo večkrat ker imam dva pogoja, se moramo prepričati, da ni element s tem indexom null
			if(document.getElementById(i) != null){
				if ((document.getElementById(i).innerHTML == "")) {
					potezeQueen.push(i);
				}
				else if (document.getElementById(i).innerHTML.search(/black/) > 60 ){

					break;
				}
				else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
					potezeQueen.push(i);
					break;
				}
			}
		}
		//Diagonala - JZ
        for (i = x + 9; (i <= 88) && (i % 10 >= 1); i += 9) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {

                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                potezeQueen.push(i);
				break;
            }
        }
		}
		//Diagonala - SZ
        for (i = x - 11; ((i % 10) >= 1) && (i >= 10); i-=11) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {
                
                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                potezeQueen.push(i);
				break;
            }
			}
        }
		//Diagonala - JZ
        for (i = x +11; ((i % 10) <= 8) && (i <=88); i+=11) {
		if(document.getElementById(i) != null){
            if (document.getElementById(i).innerHTML == 0) {
                potezeQueen.push(i);
            }
            else if (document.getElementById(i).innerHTML.search(/black/) > 60) {

                break;
            }
            else if (document.getElementById(i).innerHTML.search(/white/) > 60) {
                potezeQueen.push(i);
				break;
            }
        }
		}

        //Onclick handlerji 
        for (i = 0; i < potezeQueen.length; i++) {
            var td = document.getElementById(potezeQueen[i].toString());
            td.setAttribute('onclick', 'novoPoljeCrni(' + potezeQueen[i] + ', ' + x + ', "queen");');
            // td.className = 'blue';
        }

        
	
	}
    console.log(potezeQueen);
}




//Funkcije za premik figur

function novoPoljeBeli(novoPolje, staroPolje, vrstaFigure){
    //Funkcija ki premakne potezo ko kliknemo poje
    console.log(novoPolje);
    if(vrstaFigure == "pawn"){
        if (staroPolje - 10 == novoPolje && document.getElementById(novoPolje).innerHTML == "") {
            //premakni naprej
            steviloPotez++;
            document.getElementById(staroPolje).innerHTML = "";
            document.getElementById(novoPolje).innerHTML = "<img onclick='" + vrstaFigure + "(" + novoPolje + ", 0)' height='75px' width='75px' src='images/white_" + vrstaFigure + ".png'>";

        }
        else if ((staroPolje - 11 == novoPolje || staroPolje - 9 == novoPolje) && document.getElementById(novoPolje).innerHTML != "") {
            //Vzemi
            steviloPotez++;
            document.getElementById(staroPolje).innerHTML = "";
            document.getElementById(novoPolje).innerHTML = "<img onclick='" + vrstaFigure + "(" + novoPolje + ", 0)' height='75px' width='75px' src='images/white_" + vrstaFigure + ".png'>";

        }
        else if (staroPolje - 20 == novoPolje && document.getElementById(novoPolje).innerHTML == "" && document.getElementById(novoPolje + 10).innerHTML == "" && (staroPolje > 68)) {
            //premakni 2 naprej
            steviloPotez++;
            document.getElementById(staroPolje).innerHTML = "";
            document.getElementById(novoPolje).innerHTML = "<img onclick='" + vrstaFigure + "(" + novoPolje + ", 0)' height='75px' width='75px' src='images/white_" + vrstaFigure + ".png'>";

        }
       

    }

    else if (vrstaFigure == "king") {
        steviloPotez++;
        document.getElementById(staroPolje).innerHTML = "";
        document.getElementById(novoPolje).innerHTML = "<img name='beliKing' onclick='" + vrstaFigure + "(" + novoPolje + ", 0)' height='75px' width='75px' src='images/white_" + vrstaFigure + ".png'>";

    }
    else {
        steviloPotez++;
        document.getElementById(staroPolje).innerHTML = "";
        document.getElementById(novoPolje).innerHTML = "<img onclick='" + vrstaFigure + "(" + novoPolje + ", 0)' height='75px' width='75px' src='images/white_" + vrstaFigure + ".png'>";

    }
    
   
    
    for (i = 1; i <= 8; i++) {
        for (j = 1; j <= 8; j++) {
            var td = document.getElementById((i * 10 + j).toString());
            td.setAttribute('onclick', '');

            if (document.getElementsByName("crniKing").length == 0) {
                var myDiv = document.getElementById("konecIgre");
                myDiv.className = "beliZmaga";
                document.getElementById("zmagovalec").style = "opacity: 1";
            }
            if (document.getElementsByName("beliKing").length == 0) {
                var myDiv2 = document.getElementById("konecIgre");
                myDiv2.className = "crniZmaga";
                document.getElementById("zmagovalec").style = "opacity: 1";
            }
            if (i % 2 == j % 2) {
                td.className = 'white';
            } else {
                td.className = 'black';
            }
        }
    }

   
    
}
function novoPoljeCrni(novoPolje, staroPolje, vrstaFigure){
    //Funkcija ki premakne potezo ko kliknemo poje
    console.log(novoPolje);

    
    if (vrstaFigure == "pawn") {
        if (staroPolje + 10 == novoPolje && document.getElementById(novoPolje).innerHTML == "") {
            //premakni naprej
            steviloPotez++;
            document.getElementById(staroPolje).innerHTML = "";
            document.getElementById(novoPolje).innerHTML = "<img onclick='" + vrstaFigure + "(" + novoPolje + ", 1)' height='75px' width='75px' src='images/black_" + vrstaFigure + ".png'>";

        }
        else if ((staroPolje + 11 == novoPolje || staroPolje + 9 == novoPolje) && document.getElementById(novoPolje).innerHTML != "") {
            //Vzemi
            steviloPotez++;
            document.getElementById(staroPolje).innerHTML = "";
            document.getElementById(novoPolje).innerHTML = "<img onclick='" + vrstaFigure + "(" + novoPolje + ", 1)' height='75px' width='75px' src='images/black_" + vrstaFigure + ".png'>";

        }
        else if (staroPolje + 20 == novoPolje && document.getElementById(novoPolje).innerHTML == "" && document.getElementById(novoPolje - 10).innerHTML == "" && (staroPolje < 29)) {
            //premakni 2 naprej
            steviloPotez++;
            document.getElementById(staroPolje).innerHTML = "";
            document.getElementById(novoPolje).innerHTML = "<img onclick='" + vrstaFigure + "(" + novoPolje + ", 1)' height='75px' width='75px' src='images/black_" + vrstaFigure + ".png'>";

        }

        
    }

    else if (vrstaFigure == "king") {
        steviloPotez++;
        document.getElementById(staroPolje).innerHTML = "";
        document.getElementById(novoPolje).innerHTML = "<img name='crniKing' onclick='" + vrstaFigure + "(" + novoPolje + ", 1)' height='75px' width='75px' src='images/black_" + vrstaFigure + ".png'>";

    }
    else {
        steviloPotez++;
        document.getElementById(staroPolje).innerHTML = "";
        document.getElementById(novoPolje).innerHTML = "<img onclick='" + vrstaFigure + "(" + novoPolje + ", 1)' height='75px' width='75px' src='images/black_" + vrstaFigure + ".png'>";

    }
    

    for (i = 1; i <= 8; i++) {
        for (j = 1; j <= 8; j++) {
            var td = document.getElementById((i * 10 + j).toString());
            td.setAttribute('onclick', '');

            if (document.getElementsByName("crniKing").length == 0) {
                var myDiv = document.getElementById("konecIgre");
                myDiv.className = "beliZmaga";
                document.getElementById("zmagovalec").style = "opacity: 1";
            }
            if (document.getElementsByName("beliKing").length == 0) {
                var myDiv2 = document.getElementById("konecIgre");
                myDiv2.className = "crniZmaga";
                document.getElementById("zmagovalec").style = "opacity: 1";
            }
            if (i % 2 == j % 2) {
                td.className = 'white';
            } else {
                td.className = 'black';
            }
        }
    }
}

	
	
