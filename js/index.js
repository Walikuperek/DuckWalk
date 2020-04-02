// imgCounter
var numer = 0;

// Moving the Duck
var x = 0;
var speed = 37;

// Going backwards ? true : false
var back = false;

var duckWalkId = document.getElementById("Duck-Walk-full-width");
duckWalkId.style.position = 'fixed';
duckWalkId.style.top = '340px';
// duckWalkId.style.backgroundColor = '#323232';
// duckWalkId.

var DuckDraw = function() {
//######################################
//#[_134_|______innerWidth______|_134_]#
//######################################
    if (x >= window.innerWidth - 134) {
        back = true;
    }


// <--*-->
    if (!back) {
        duckWalkId.style.transform = 'rotateY(180deg)';
        x += speed;
    } else {
        if (x <= 134) {
            duckWalkId.style.transform = 'rotate(180deg)';
            x += speed;
            back = false;
        } else {
            duckWalkId.style.transform = 'rotateY(0deg)';
            x -= speed;
        }
    }

// SPEED
    duckWalkId.style.left = x + 'px';


    // update img
    numer++;
    if (numer > 4) numer = 1;

    duckWalkId.innerHTML = "<img src=\"DuckWalk/img/" + numer + ".PNG\" />";

    // 
    duckWalkId.style.transform = 'rotateZ(' + x + 'deg)';    
}
DuckDraw();
window.setInterval(DuckDraw, 200);
