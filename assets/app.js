/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

const mesi = (mese) => {
    switch(mese) {
        case 1: return 'Gennaio';
        case 2: return 'Febbraio';
        case 3: return 'Marzo';
        case 4: return 'Aprile';
        case 5: return 'Maggio';
        case 6: return 'Giugno';
        case 7: return 'Luglio';
        case 8: return 'Agosto';
        case 9: return 'Settembre';
        case 10: return 'Ottobre';
        case 11: return 'Novembre';
        case 12: return 'Dicembre';
        default: return 'Mese non valido';
    }
}
const currentLocation = window.location.pathname.split("/")[window.location.pathname.split().findLastIndex((e) => e == "/")]
if (currentLocation == "") {
    var totalDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    document.getElementById('mese').innerHTML = `Questi sono i 3 prodotti piu venduti a <strong>${mesi(new Date().getMonth()+1)}</strong>`

    var data = [];
    for (var i = 1; i <= totalDays; i++) {
        data.push({ day: i.toString(), bicchieri: Math.floor(Math.random() * 50), astucci: Math.floor(Math.random() * 50), penne: Math.floor(Math.random() * 50)}); 
    }


    new Morris.Area({
        element: 'chart',
        data: data,
        xkey: 'day',
        ykeys: ['bicchieri', 'astucci', 'penne'],
        labels: ['Bicchieri', 'Astucci', 'Penne'],
        parseTime: false,
        lineColors: ['#198754', '#2A9FD6', '#C19A6B'],
    });
}
//window.addEventListener("DOMContentLoaded", () => {
//    let imgs = ["{{asset('/imgs/astuccio.jpeg')}}", "{{asset('imgs/astuccio1.jpeg')}}", "{{asset('imgs/bicchiere.jpeg')}}", "{{asset('imgs/bicchiere1.jpeg')}}", "{{asset('imgs/martello.jpeg')}}", "{{asset('imgs/apenna.jpeg')}}", "{{asset('imgs/penna1.jpeg')}}"]
//    const products = document.querySelector(".products")

//    for (i=0; i<imgs.length; i++)
//    {
//        const div = document.createElement("div")
//        const img = document.createElement("img")
//        img.src = imgs[i]
//        div.appendChild(img)
//        products.appendChild(div)
//    }
  
//})


