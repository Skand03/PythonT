

let position = 1 ;


function main_slider_photo_1() {
    

    document.getElementById('slider').style.display = 'block';
    document.getElementById('slider_2').style.display = 'none';
    document.getElementById('slider_3').style.display = 'none';
    document.getElementById('slider_4').style.display = 'none';
    document.getElementById('slider_5').style.display = 'none';
    document.getElementById('slider_6').style.display = 'none';


    document.getElementById('slider_button').classList.add("b_button")
    document.getElementById('slider_button').classList.remove("w_button")

    document.getElementById('slider_button_2').classList.remove("b_button")
    document.getElementById('slider_button_2').classList.add("w_button")

    document.getElementById('slider_button_3').classList.remove("b_button")
    document.getElementById('slider_button_3').classList.add("w_button")

    document.getElementById('slider_button_4').classList.remove("b_button")
    document.getElementById('slider_button_4').classList.add("w_button")

    document.getElementById('slider_button_5').classList.remove("b_button")
    document.getElementById('slider_button_5').classList.add("w_button")

    document.getElementById('slider_button_6').classList.remove("b_button")
    document.getElementById('slider_button_6').classList.add("w_button")

    document.getElementById('nums').innerText = 1;

    position=1;

    setTimeout(main_slider_photo_2, 2000);

}


function main_slider_photo_2() {

    document.getElementById('slider').style.display = 'none';
    document.getElementById('slider_2').style.display = 'block';
    document.getElementById('slider_3').style.display = 'none';
    document.getElementById('slider_4').style.display = 'none';
    document.getElementById('slider_5').style.display = 'none';
    document.getElementById('slider_6').style.display = 'none';



    document.getElementById('slider_button').classList.remove("b_button")
    document.getElementById('slider_button').classList.add("w_button")

    document.getElementById('slider_button_2').classList.add("b_button")
    document.getElementById('slider_button_2').classList.remove("w_button")

    document.getElementById('slider_button_3').classList.remove("b_button")
    document.getElementById('slider_button_3').classList.add("w_button")

    document.getElementById('slider_button_4').classList.remove("b_button")
    document.getElementById('slider_button_4').classList.add("w_button")

    document.getElementById('slider_button_5').classList.remove("b_button")
    document.getElementById('slider_button_5').classList.add("w_button")

    document.getElementById('slider_button_6').classList.remove("b_button")
    document.getElementById('slider_button_6').classList.add("w_button")

    document.getElementById('nums').innerHTML = 2;

    position=2;

    setTimeout(main_slider_photo_3, 2000);

}



function main_slider_photo_3() {

    document.getElementById('slider').style.display = 'none';
    document.getElementById('slider_2').style.display = 'none';
    document.getElementById('slider_3').style.display = 'block';
    document.getElementById('slider_4').style.display = 'none';
    document.getElementById('slider_5').style.display = 'none';
    document.getElementById('slider_6').style.display = 'none';


    document.getElementById('slider_button').classList.remove("b_button")
    document.getElementById('slider_button').classList.add("w_button")

    document.getElementById('slider_button_2').classList.remove("b_button")
    document.getElementById('slider_button_2').classList.add("w_button")

    document.getElementById('slider_button_3').classList.add("b_button")
    document.getElementById('slider_button_3').classList.remove("w_button")

    document.getElementById('slider_button_4').classList.remove("b_button")
    document.getElementById('slider_button_4').classList.add("w_button")

    document.getElementById('slider_button_5').classList.remove("b_button")
    document.getElementById('slider_button_5').classList.add("w_button")

    document.getElementById('slider_button_6').classList.remove("b_button")
    document.getElementById('slider_button_6').classList.add("w_button")

    document.getElementById('nums').innerHTML = 3;

    position=3;

    setTimeout(main_slider_photo_4, 2000);

}



function main_slider_photo_4() {

    document.getElementById('slider').style.display = 'none';
    document.getElementById('slider_2').style.display = 'none';
    document.getElementById('slider_3').style.display = 'none';
    document.getElementById('slider_4').style.display = 'block';
    document.getElementById('slider_5').style.display = 'none';
    document.getElementById('slider_6').style.display = 'none';


    document.getElementById('slider_button').classList.remove("b_button")
    document.getElementById('slider_button').classList.add("w_button")

    document.getElementById('slider_button_2').classList.remove("b_button")
    document.getElementById('slider_button_2').classList.add("w_button")

    document.getElementById('slider_button_3').classList.remove("b_button")
    document.getElementById('slider_button_3').classList.add("w_button")

    document.getElementById('slider_button_4').classList.add("b_button")
    document.getElementById('slider_button_4').classList.remove("w_button")

    document.getElementById('slider_button_5').classList.remove("b_button")
    document.getElementById('slider_button_5').classList.add("w_button")

    document.getElementById('slider_button_6').classList.remove("b_button")
    document.getElementById('slider_button_6').classList.add("w_button")

    document.getElementById('nums').innerHTML = 4;

    position=4;

    setTimeout(main_slider_photo_5, 2000);

}




function main_slider_photo_5() {

    document.getElementById('slider').style.display = 'none';
    document.getElementById('slider_2').style.display = 'none';
    document.getElementById('slider_3').style.display = 'none';
    document.getElementById('slider_4').style.display = 'none';
    document.getElementById('slider_5').style.display = 'block';
    document.getElementById('slider_6').style.display = 'none';


    document.getElementById('slider_button').classList.remove("b_button")
    document.getElementById('slider_button').classList.add("w_button")

    document.getElementById('slider_button_2').classList.remove("b_button")
    document.getElementById('slider_button_2').classList.add("w_button")

    document.getElementById('slider_button_3').classList.remove("b_button")
    document.getElementById('slider_button_3').classList.add("w_button")

    document.getElementById('slider_button_4').classList.remove("b_button")
    document.getElementById('slider_button_4').classList.add("w_button")

    document.getElementById('slider_button_5').classList.add("b_button")
    document.getElementById('slider_button_5').classList.remove("w_button")

    document.getElementById('slider_button_6').classList.remove("b_button")
    document.getElementById('slider_button_6').classList.add("w_button")

    document.getElementById('nums').innerHTML = 5;

    position=5;

    setTimeout(main_slider_photo_6, 2000);

}



function main_slider_photo_6() {

    document.getElementById('slider').style.display = 'none';
    document.getElementById('slider_2').style.display = 'none';
    document.getElementById('slider_3').style.display = 'none';
    document.getElementById('slider_4').style.display = 'none';
    document.getElementById('slider_5').style.display = 'none';
    document.getElementById('slider_6').style.display = 'block';


    document.getElementById('slider_button').classList.remove("b_button")
    document.getElementById('slider_button').classList.add("w_button")

    document.getElementById('slider_button_2').classList.remove("b_button")
    document.getElementById('slider_button_2').classList.add("w_button")

    document.getElementById('slider_button_3').classList.remove("b_button")
    document.getElementById('slider_button_3').classList.add("w_button")

    document.getElementById('slider_button_4').classList.remove("b_button")
    document.getElementById('slider_button_4').classList.add("w_button")

    document.getElementById('slider_button_5').classList.remove("b_button")
    document.getElementById('slider_button_5').classList.add("w_button")

    document.getElementById('slider_button_6').classList.add("b_button")
    document.getElementById('slider_button_6').classList.remove("w_button")

    document.getElementById('nums').innerHTML = 6;

    position=6;

    setTimeout(main_slider_photo_1, 2000);

}


function sli_sta() {
    setTimeout(main_slider_photo_2, 2000);
}









// ######################################################################################################################################################################################################################
// ######################################################################################################################################################################################################################
// ######################################################################################################################################################################################################################



// SLIDER -----  2




function slider_1 () {
    let sli_2_po = 1;

    document.getElementById('s2').style.backgroundImage = "url('images/bg_6 1.png')";
    document.getElementById('left_arrow').innerHTML = '<h2 onclick="right_click_3()" >&#8592;</h2>';
    document.getElementById('right_arrow').innerHTML = '<h2 onclick="left_click_2()" >&#8594;</h2>';

}

function slider_2 () {
    let sli_2_po = 2;

    document.getElementById('s2').style.backgroundImage = "url('images/slider 2.jpg')";
    document.getElementById('left_arrow').innerHTML = '<h2 onclick="right_click_1()" >&#8592;</h2>';
    document.getElementById('right_arrow').innerHTML = '<h2 onclick="left_click_3()" >&#8594;</h2>';

}

function slider_3 () {
    let sli_2_po = 3;

    document.getElementById('s2').style.backgroundImage = "url('images/slider 3.jpg')";
    document.getElementById('left_arrow').innerHTML = '<h2 onclick="right_click_2()" >&#8592;</h2>';
    document.getElementById('right_arrow').innerHTML = '<h2 onclick="left_click_1()" >&#8594;</h2>';

}



function left_click_1 () {
    slider_1 ();
}
function left_click_2 () {
    slider_2 ();
}
function left_click_3 () {
    slider_3 ();
}





function right_click_1 () {
    slider_1 ();
}
function right_click_2 () {
    slider_2 ();
}
function right_click_3 () {
    slider_3 ();
}





