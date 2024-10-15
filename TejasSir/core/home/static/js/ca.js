function ca_1() {
    document.getElementById('ca_contant').style.display = 'block';
    document.getElementById('ca_contant2').style.display = 'none';
    document.getElementById('ca_contant3').style.display = 'none';
    document.getElementById('ca_contant4').style.display = 'none';

    document.getElementById('pro_line').style.background='#000';
    document.getElementById('pro_line2').style.borderRadius='0px';
    document.getElementById('pro_line3').style.borderRadius='0px';
    document.getElementById('pro_line4').style.borderRadius='0px';
    document.getElementById('pro_line').style.borderTopRightRadius='50px'
    document.getElementById('pro_line').style.borderEndEndRadius='50px'
    document.getElementById('pro_line2').style.background='rgba(0, 0, 0, 0.2)';
    document.getElementById('pro_line3').style.background='rgba(0, 0, 0, 0.2)';
    document.getElementById('pro_line4').style.background='rgba(0, 0, 0, 0.2)';


}


function ca_2() {
    document.getElementById('ca_contant').style.display = 'none';
    document.getElementById('ca_contant2').style.display = 'block';
    document.getElementById('ca_contant3').style.display = 'none';
    document.getElementById('ca_contant4').style.display = 'none';

    document.getElementById('pro_line2').style.background='#000';
    document.getElementById('pro_line2').style.borderTopRightRadius='50px'
    document.getElementById('pro_line2').style.borderEndEndRadius='50px'
    document.getElementById('pro_line').style.borderRadius='0px';
    document.getElementById('pro_line2').style.borderRadius='0px';
    document.getElementById('pro_line3').style.borderRadius='0px';
    document.getElementById('pro_line4').style.borderRadius='0px';
    document.getElementById('pro_line').style.background='#000';
    document.getElementById('pro_line3').style.background='rgba(0, 0, 0, 0.2)';
    document.getElementById('pro_line4').style.background='rgba(0, 0, 0, 0.2)';
    document.getElementById('ca_numbers').innerText = 2;

}

function ca_3() {
    document.getElementById('ca_contant').style.display = 'none';
    document.getElementById('ca_contant2').style.display = 'none';
    document.getElementById('ca_contant3').style.display = 'block';
    document.getElementById('ca_contant4').style.display = 'none';

    document.getElementById('pro_line3').style.background='#000';
    document.getElementById('pro_line3').style.borderTopRightRadius='50px'
    document.getElementById('pro_line3').style.borderEndEndRadius='50px'
    document.getElementById('pro_line').style.borderRadius='0px';
    document.getElementById('pro_line2').style.borderRadius='0px';
    document.getElementById('pro_line4').style.borderRadius='0px';
    document.getElementById('pro_line').style.background='#000';
    document.getElementById('pro_line2').style.background='#000';
    document.getElementById('pro_line4').style.background='rgba(0, 0, 0, 0.2)';
    
}

function ca_4() {
    document.getElementById('ca_contant').style.display = 'none';
    document.getElementById('ca_contant2').style.display = 'none';
    document.getElementById('ca_contant3').style.display = 'none';
    document.getElementById('ca_contant4').style.display = 'block';

    document.getElementById('pro_line4').style.background='#000';
    document.getElementById('pro_line4').style.borderTopRightRadius='50px'
    document.getElementById('pro_line4').style.borderEndEndRadius='50px'
    document.getElementById('pro_line').style.borderRadius='0px';
    document.getElementById('pro_line2').style.borderRadius='0px';
    document.getElementById('pro_line3').style.borderRadius='0px';
    document.getElementById('pro_line').style.background='#000';
    document.getElementById('pro_line2').style.background='#000';
    document.getElementById('pro_line3').style.background='#000';
    

}





function r_a_ca_2(){
    if (document.getElementById('ca_contant').style.display='block'){
        ca_2();
    }  
}

function r_a_ca_3(){
    if (document.getElementById('ca_contant2').style.display='block'){
        ca_3();
    }  
}
function r_a_ca_4(){
    if (document.getElementById('ca_contant3').style.display='block'){
        ca_4();
    }  
}
function r_a_ca_1(){
    if (document.getElementById('ca_contant4').style.display='block'){
        ca_1();
    }  
}





function l_a_ca_4(){
    if (document.getElementById('ca_contant').style.display='block'){
        ca_4();
    }  
}

function l_a_ca_1(){
    if (document.getElementById('ca_contant2').style.display='block'){
        ca_1();
    }  
}
function l_a_ca_2(){
    if (document.getElementById('ca_contant3').style.display='block'){
        ca_2();
    }  
}
function l_a_ca_3(){
    if (document.getElementById('ca_contant3').style.display='block'){
        ca_3();
    }  
}
function l_a_ca_4(){
    if (document.getElementById('ca_contant4').style.display='block'){
        ca_4();
    }  
}





