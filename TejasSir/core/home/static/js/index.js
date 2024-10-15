function  home_to_manu() {

    document.getElementById('mc1u3').style.display='none'
    document.getElementById('mc1u3_click').style.display='block'
    document.getElementById('mc1m3').style.display='none'
    document.getElementById('mc1m3_click').style.display='block'

}

function  manu_to_home() {

    document.getElementById('mc1u3').style.display='block'
    document.getElementById('mc1u3_click').style.display='none'
    document.getElementById('mc1m3').style.display='block'
    document.getElementById('mc1m3_click').style.display='none'

}



function home_to_footer() {
    
    document.getElementById('main_footer').style.display='none'
    document.getElementById('main_footer_click').style.display='block'

} 

function footer_to_home() {
    
    document.getElementById('main_footer').style.display='block'
    document.getElementById('main_footer_click').style.display='none'

} 