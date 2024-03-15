function fashion(){
  fash=document.querySelector('.fashion')
  electro=document.querySelector('.electronics')
  home=document.querySelector('.homeappliances')
  fua=document.querySelector('.mamafua')
  id=document.querySelector('.foundids')
  fash.style.opacity='1'
  fash.style.scale='1'
  electro.style.opacity='0'
  electro.style.scale='0'
  home.style.opacity='0'
  home.style.scale='0'
  fua.style.opacity='0'
  fua.style.scale='0'
  id.style.opacity='0'
  id.style.scale='0'
}
function electronics(){
  electro=document.querySelector('.electronics')
  fash=document.querySelector('.fashion')
  home=document.querySelector('.homeappliances')
  fua=document.querySelector('.mamafua')
  id=document.querySelector('.foundids')
  fash.style.opacity='0'
  fash.style.scale='0'
  electro.style.opacity='1'
  electro.style.scale='1'
  home.style.opacity='0'
  home.style.scale='0'
  fua.style.opacity='0'
  fua.style.scale='0'
  id.style.opacity='0'
  id.style.scale='0'

}
function homeappliances(){
  home=document.querySelector('.homeappliances')
  electro=document.querySelector('.electronics')
  fash=document.querySelector('.fashion')
  fua=document.querySelector('.mamafua')
  id=document.querySelector('.foundids')
  home.style.opacity='1'
  home.style.scale='1'
  electro.style.opacity='0'
  electro.style.scale='0'
  fash.style.opacity='0'
  fash.style.scale='0'
  fua.style.opacity='0'
  fua.style.scale='0'
  id.style.opacity='0'
  id.style.scale='0'
}
function mamafua(){
  fua=document.querySelector('.mamafua')
  home=document.querySelector('.homeappliances')
  electro=document.querySelector('.electronics')
  fash=document.querySelector('.fashion')
  id=document.querySelector('.foundids')
  home.style.opacity='0'
  home.style.scale='0'
  fua.style.opacity='1'
  fua.style.scale='1'
  electro.style.opacity='0'
  electro.style.scale='0'
  fash.style.opacity='0'
  fash.style.scale='0'
  id.style.opacity='0'
  id.style.scale='0'
}
function foundids(){
  id=document.querySelector('.foundids')
  fua=document.querySelector('.mamafua')
  home=document.querySelector('.homeappliances')
  electro=document.querySelector('.electronics')
  fash=document.querySelector('.fashion')
  fua.style.opacity='0'
  fua.style.scale='0'
  id.style.opacity='1'
  id.style.scale='1'
  home.style.opacity='0'
  home.style.scale='0'
  electro.style.opacity='0'
  electro.style.scale='0'
  fash.style.opacity='0'
  fash.style.scale='0'
  
}
var narbarLinks=document.querySelectorAll('.navbar ul li button');
  narbarLinks.forEach(function(link){
    link.addEventListener('click', function(){
      narbarLinks.forEach(function(link){
        link.classList.remove('active');
      });

      this.classList.add('active');
    });
  });

  function sendWhatsAppMessage() {
    // Replace with the business's phone number
    var phoneNumber = '+254110528047';
    // Replace with a pre-filled message
    var message = encodeURIComponent('Hi, I would like to learn more about your business.');
    // Open WhatsApp chat
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }