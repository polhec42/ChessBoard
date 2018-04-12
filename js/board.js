var myTableDiv = document.getElementById("myTable");
var table = document.createElement('TABLE');
var tableBody = document.createElement('TBODY');
table.appendChild(tableBody);
     
for (var i=1; i<=8; i++){
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
      
    for (var j=1; j<=8; j++){
        var td = document.createElement('TD');

        if (i % 2 != j % 2) {
            td.className = "black";
            td.id = i.toString() + j.toString();
           
        }
        else {
            td.className = "white";
            td.id = i.toString() + j.toString();
			
        }

        tr.appendChild(td);
    }
}
myTableDiv.appendChild(table);

function addImage() {
    //Rooks
    document.getElementById("88").innerHTML = "<img       onclick='rook(88, 0)' height='75px' width='75px' src='images/white_rook.png'>";
    document.getElementById("81").innerHTML = "<img       onclick='rook(81, 0)' height='75px' width='75px' src='images/white_rook.png'>";
    document.getElementById("18").innerHTML = "<img       onclick='rook(18, 1)' height='75px' width='75px' src='images/black_rook.png'>";
    document.getElementById("11").innerHTML = "<img       onclick='rook(11, 1)' height='75px' width='75px' src='images/black_rook.png'>";

    //Knights
    document.getElementById("87").innerHTML = "<img   onclick='knight(87, 0)' height='75px' width='75px' src='images/white_knight.png'>";
    document.getElementById("82").innerHTML = "<img   onclick='knight(82, 0)' height='75px' width='75px' src='images/white_knight.png'>";
    document.getElementById("17").innerHTML = "<img   onclick='knight(17, 1)' height='75px' width='75px' src='images/black_knight.png'>";
    document.getElementById("12").innerHTML = "<img   onclick='knight(12, 1)' height='75px' width='75px' src='images/black_knight.png'>";

    //Bishops 
    document.getElementById("86").innerHTML = "<img   onclick='bishop(86, 0)' height='75px' width='75px' src='images/white_bishop.png'>";
    document.getElementById("83").innerHTML = "<img   onclick='bishop(83, 0)' height='75px' width='75px' src='images/white_bishop.png'>";
    document.getElementById("16").innerHTML = "<img   onclick='bishop(16, 1)' height='75px' width='75px' src='images/black_bishop.png'>";
    document.getElementById("13").innerHTML = "<img   onclick='bishop(13, 1)' height='75px' width='75px' src='images/black_bishop.png'>";

    //Queens
    document.getElementById("84").innerHTML = "<img     onclick='queen(84, 0)' height='75px' width='75px' src='images/white_queen.png'>";
    document.getElementById("14").innerHTML = "<img     onclick='queen(14, 1)' height='75px' width='75px' src='images/black_queen.png'>";

    //Kings
    document.getElementById("85").innerHTML = "<img  name='beliKing' onclick='king(85, 0)' height='75px' width='75px' src='images/white_king.png'>";
    document.getElementById("15").innerHTML = "<img  name='crniKing' onclick='king(15, 1)' height='75px' width='75px' src='images/black_king.png'>";

    //Pawns
	document.getElementById("71").innerHTML = "<img       onclick='pawn(71, 0)' height='75px' width='75px' src='images/white_pawn.png'>";
    document.getElementById("72").innerHTML = "<img       onclick='pawn(72, 0)' height='75px' width='75px' src='images/white_pawn.png'>";
    document.getElementById("73").innerHTML = "<img       onclick='pawn(73, 0)' height='75px' width='75px' src='images/white_pawn.png'>";
    document.getElementById("74").innerHTML = "<img       onclick='pawn(74, 0)' height='75px' width='75px' src='images/white_pawn.png'>";
    document.getElementById("75").innerHTML = "<img       onclick='pawn(75, 0)' height='75px' width='75px' src='images/white_pawn.png'>";
    document.getElementById("76").innerHTML = "<img       onclick='pawn(76, 0)' height='75px' width='75px' src='images/white_pawn.png'>";
    document.getElementById("77").innerHTML = "<img       onclick='pawn(77, 0)' height='75px' width='75px' src='images/white_pawn.png'>";
    document.getElementById("78").innerHTML = "<img       onclick='pawn(78, 0)' height='75px' width='75px' src='images/white_pawn.png'>";

    document.getElementById("21").innerHTML = "<img       onclick='pawn(21, 1)' height='75px' width='75px' src='images/black_pawn.png'>";
    document.getElementById("22").innerHTML = "<img       onclick='pawn(22, 1)' height='75px' width='75px' src='images/black_pawn.png'>";
    document.getElementById("23").innerHTML = "<img       onclick='pawn(23, 1)' height='75px' width='75px' src='images/black_pawn.png'>";
    document.getElementById("24").innerHTML = "<img       onclick='pawn(24, 1)' height='75px' width='75px' src='images/black_pawn.png'>";
    document.getElementById("25").innerHTML = "<img       onclick='pawn(25, 1)' height='75px' width='75px' src='images/black_pawn.png'>";
    document.getElementById("26").innerHTML = "<img       onclick='pawn(26, 1)' height='75px' width='75px' src='images/black_pawn.png'>";
    document.getElementById("27").innerHTML = "<img       onclick='pawn(27, 1)' height='75px' width='75px' src='images/black_pawn.png'>";
    document.getElementById("28").innerHTML = "<img       onclick='pawn(28, 1)' height='75px' width='75px' src='images/black_pawn.png'>";
}