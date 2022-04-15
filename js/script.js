$(document).ready(() => {
    $('.btn-bamboo').click(() => {
        $('.card-bamboo').addClass('clicked');
        $('.input-bamboo').prop("checked", true);
        $('.pledge-bamboo').removeClass('hidden');
    });

    $('.input-bamboo').click(() => {
        $('.card-bamboo').addClass('clicked');
        $('.input-bamboo').prop("checked", true);
        $('.card-black').removeClass('clicked');
        $('.input-black').prop("checked", false);
        $('.card-back').removeClass('clicked');
        $('.input-back').prop("checked", false);
        $('.pledge-bamboo').removeClass('hidden');
        $('.pledge-black').addClass('hidden');
    });

    $('.input-black').click(() => {
        $('.card-bamboo').removeClass('clicked');
        $('.input-bamboo').prop("checked", false);
        $('.card-back').removeClass('clicked');
        $('.card-black').addClass('clicked');  
        $('.pledge-black').removeClass('hidden'); 
    });

    $('.btn-black').click(() => {
        $('.card-black').addClass('clicked');
        $('.input-black').prop("checked", true);
        $('.pledge-black').removeClass('hidden');
        $('.pledge-bamboo').addClass('hidden');
    });

    $('.input-back').click(() => {
        $('.card-back').addClass('clicked')
        $('.card-black').removeClass('clicked');
        $('.input-black').prop("checked", false);
        $('.card-bamboo').removeClass('clicked');
        $('.input-bamboo').prop("checked", false);
        $('.pledge-bamboo').addClass('hidden');
        $('.pledge-black').addClass('hidden');
        $('.pledge-back').removeClass('hidden');

    });

    $('.btn-continue').click(() => {
         $('#thankYou').modal('show');
     });

    $("#toggler").click(() => {
        $('#hamburger').toggleClass('hidden');
        $('#hamburgerClose').toggleClass('hidden');
    });

//      const numberText = $('.card-aboot-mahagany-number');
//      if($(".card-about-mahagany-number:contains('0')")) {
//         $('.btn-about-mahagany').attr('disabled', 'disabled');
//         $('.card-about-mahagany-body').addClass('card-zero');
//     }
  
});

const numberText  = document.getElementsByClassName('card-aboot-mahagany-number');
const buttonOut = document.getElementsByClassName('btn-about-mahagany');
const mahoganyCard = document.getElementsByClassName('card-about-mahagany-body');
const cardMahoganyModual = document.getElementsByClassName('card-mahogany-body');
const mahaganyNumber = document.getElementsByClassName('card-moahogany-number');


for (let i = 0; i < numberText.length; i++) {
    if (numberText[i].textContent.includes("0")) {
      for (let i = 0; i < buttonOut.length; i++) {
        buttonOut[i].disabled = true;
        mahoganyCard[i].classList.add('card-zero');
      }
    }
  }

  const modualOutOfOrder = () => {
  for (let i = 0; i < mahaganyNumber.length; i++) {
    if (mahaganyNumber[i].textContent.includes("0")) {
        cardMahoganyModual[i].classList.add('card-zero');
      }
    }
}