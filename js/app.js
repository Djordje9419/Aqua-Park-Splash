$(document).ready(function(){

    $('#burger').on('click',function(){

        $('.sajdNav').toggleClass('sajdNavPrikaz');

    })

    $('#zatvoriSajd').on('click',function(){

        $('.sajdNav').toggleClass('sajdNavPrikaz');

    })

    $('.hideError').hide();

    $('#uspehTekst').hide();

    $('.closeMe').on('click',function(){

        $('.sajdNav').removeClass('sajdNavPrikaz');

    })

    $('#reserve').click(function(e){
        e.preventDefault();
    })

    // Spustanje menija tacno kada nestane loader

    $('#spusti').animate({top: '0px'},3100);


    $('.skip').click(function(e){
        e.preventDefault();

        if($(this).attr('id') === 'correct'){
            
            $('.disc').slideDown();
            $('.noDisc').hide();

        }

        else{

            $('.disc').hide();
            $('.noDisc').slideDown();

        }

    })

    // Okretanje slika

    $(window).scroll(function () {
        let hopTop = $('#prices').offset().top,
          hopHeight = $('#prices').outerHeight(),
          windowHeight = $(window).height(),
          windowScroll = $(this).scrollTop();
        if (windowScroll > (hopTop + hopHeight - windowHeight) + 300) {
          $('#gallery').css('transform', 'translateX(0px)');
        }
      });

    //Disable buttone

    $('#correct').on('click',function(){

        $(this).attr('disabled','true');
        $('#wrong').attr('disabled','true');

    });

    $('#wrong').on('click',function(){

        $(this).attr('disabled','true');
        $('#correct').attr('disabled','true');

    });

    //Spinner


    

    setTimeout(function(e){
        $('.spinner').fadeOut();
        $('body').show();
        $('body').addClass('body1');
    }, 2200);

    
    
    

    //Idi gore skroz

    $('#goingTop').on('click',function() {

        $('html').animate({scrollTop: 0}, 400);

    });

    $('.hideDisc').hide();

    // Skrolovanje

    $(window).scroll(function(){

        const udaljenost = $(this).scrollTop();

        if(udaljenost > 80) {

            $('nav').addClass('navChange');

        } else {
            
            $('nav').removeClass('navChange');

        }


    })

    // Pokretanje funkcije na klik za submit

    $('#reserve').on('click',validate);

    $('.daNe').on('change', izbaciDropdown);

})


// Forma


function izbaciDropdown() {

    console.log(this.value)

    if(this.value === 'yes'){

        let deca = ['1','2','3','4'];

        let dropDown = '<select id="birajDecu"><option value="0">How many kids ?</option>';

        for(let i = 0 ; i < deca.length ; i++) {

            dropDown += `<option value='${deca[i]}'>${deca[i]}</option>'`;

        }

        dropDown += '</select>';

        document.getElementById('listaDece').innerHTML = dropDown;

    }

    else {

        document.getElementById('listaDece').innerHTML = '';

    }


}


function validate(e) {

    e.preventDefault();

    let nizGresaka = [];

    let punoIme = document.getElementById('fullName');

    let mail = document.getElementById('yourMail');

    let telefon = document.getElementById('yourPhone');

    let radioDugmad = document.getElementsByName('yesNo');

    let agree = document.getElementById('agreed');


    let punoImeIzraz = /^[A-Z][a-zšđžćč]+\s[A-Z][a-zšđžćč]+(\s[A-Z][a-zšđžćč]+){0,2}$/;

    let mailIzraz = /^[a-z][a-z\.\_\-\d]+\@[a-z]+(\.[a-z]{2,4}){1,2}$/;

    let telefonIzraz = /^06[\d][\d]{6,7}$/;


    let greskaIme = document.getElementById('imeError');

    let greskaMail = document.getElementById('mailError');

    let greskaFon = document.getElementById('phoneError');

    let greskaAgree = document.getElementById('agreeError');

    let greskaDeca = document.getElementById('prikazDeceGreska');

    let greskaRadio = document.getElementById('radioError');


    
    function prikaziGreske(polje, izraz, greskaZaPrikaz) {

        if(izraz.test(polje.value)) {

            greskaZaPrikaz.style.display = 'none';

        }

        else {

            greskaZaPrikaz.style.display = 'block';

            nizGresaka.push(greskaZaPrikaz.textContent);

        }

    }

    prikaziGreske(punoIme, punoImeIzraz, greskaIme);

    prikaziGreske(mail, mailIzraz, greskaMail);

    prikaziGreske(telefon, telefonIzraz, greskaFon);


    let radioDugme = false;

    for(let i = 0 ; i < radioDugmad.length ; i++) {

        if(radioDugmad[i].checked){

            radioDugme = true;

        }

    }

    if(radioDugme) {

        greskaRadio.style.display = 'none';

    }

    else {

        greskaRadio.style.display = 'block';

        nizGresaka.push(greskaRadio.textContent)

    }




    if(!agree.checked) {

        greskaAgree.style.display = 'block';

        nizGresaka.push(greskaAgree.textContent);

    }

    else {

        greskaAgree.style.display = 'none';

    }

    if(document.getElementById('da').checked){

        if(document.getElementById('birajDecu').value == '0') {

            greskaDeca.style.display = 'block';
    
            nizGresaka.push(greskaDeca.textContent)
    
        }
    
        else {
    
            greskaDeca.style.display = 'none';
    
        }

    }


    if(nizGresaka.length > 0) {

        document.getElementById('uspehTekst').style.display = 'none';

        return false;

    }

    else {

        document.getElementById('uspehTekst').style.display = 'block';

        return true;

    }
    
    
}



// Navigacija

var menuKlasa = document.getElementsByClassName('menu');

var logoKlasa = document.getElementsByClassName('logo');

var linkovi = [['#start','Home'],['#about','About'],['#prices','Prices'],['#gallery','Gallery'],['#contact','Reservations']];

var meni = '<ul id="glavnaNav">';

for (let i=0;i<linkovi.length;i++){

    meni += `<li><a href='${linkovi[i][0]}' class='closeMe'>${linkovi[i][1]}</a></li>`;

}

meni += '</ul>';

var logo = `<a href='#start' class='closeMe'><img src='img/logo.png' class='img-fluid' alt='Splash Logo'/></a>`;

for (let i=0;i<menuKlasa.length;i++){

    menuKlasa[i].innerHTML += meni;

}

for (let i=0;i<logoKlasa.length;i++){

    logoKlasa[i].innerHTML += logo;

}


// Punjenje h2 naslova

var naslovi = ['Ready to swim ?','Take a dive !','For the whole family !'];

var randomNaslov = Math.floor(Math.random() * naslovi.length);

var h2Naslov = document.getElementById('fillText');

h2Naslov.innerHTML = naslovi[randomNaslov];

// Random discount kodovi

var kodovi = ['Splash10','Aqua2','BBQ12','WdA132'];

var randomKod = Math.floor(Math.random() * kodovi.length);

document.getElementById('discountCode').innerHTML += kodovi[randomKod];


// Dinamicko ispisivanje cena

var prvaKolonaCena = document.querySelector('.colPrice1');

var drugaKolonaCena = document.querySelector('.colPrice2');

var nizPrvaKolonaCena = [['Parents','5$'],['Parents with 2 kids','3$'],['Parents with 3 or more kids','2.5$'],['Parents with 5 or more kids','Free']];

var nizDrugaKolonaCena = [['Kids under 12','Free'],['Kids 13-16','1$(per kid)'],['Kids 18+','4$'],['Adults 55+','Free']];


for(let i = 0;i<nizPrvaKolonaCena.length;i++){

    prvaKolonaCena.innerHTML += `<div class='price'>
        <p>${nizPrvaKolonaCena[i][0]}</p>
        <p>${nizPrvaKolonaCena[i][1]}</p>
    </div>`; 

}

for(let i = 0;i<nizDrugaKolonaCena.length;i++){

    drugaKolonaCena.innerHTML += `<div class='price'>
        <p>${nizPrvaKolonaCena[i][0]}</p>
        <p>${nizPrvaKolonaCena[i][1]}</p>
    </div>`; 

}


// Dinamicko ispisivanje slika

var prvaKolonaSlika = document.querySelector('.rowPrvaKolonaSlika');

var drugaKolonaSlika = document.querySelector('.rowDrugaKolonaSlika');

var nizPrvaKolonaSlika = ['kids.jpeg','kids.jpeg','kids.jpeg'];

var nizDrugaKolonaSlika = ['kids.jpeg','kids.jpeg','kids.jpeg'];

for(let i = 0 ;i<nizPrvaKolonaSlika.length;i++){

    prvaKolonaSlika.innerHTML += `<div class="col-lg-4 col-md-12 colf4">
    <a data-fancybox="gallery" href="img/${nizPrvaKolonaSlika[i]}"><img src="img/${nizPrvaKolonaSlika[i]}" class='img-fluid' alt='Picture of our awesome park !'></a>
    </div>`;

}

for(let i = 0 ;i<nizDrugaKolonaSlika.length;i++){

    drugaKolonaSlika.innerHTML += `<div class="col-lg-4 col-md-12 colf4">
    <a data-fancybox="gallery" href="img/${nizDrugaKolonaSlika[i]}"><img src="img/${nizDrugaKolonaSlika[i]}" class='img-fluid' alt='Picture of our awesome park !'></a>
    </div>`;

}

