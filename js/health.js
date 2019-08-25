//About Healthcare
var btnToggle1=document.getElementById('btn-toggle1');
var heading1=document.getElementById('headingOne');
var icon1=document.getElementById('icn1');
btnToggle1.onclick=function(){  
if( icon1.innerHTML=='<i class="fas fa-arrow-up fa-xs mx-2" id="icn1"></i>')
{
     icon1.innerHTML='<i class="fas fa-arrow-down fa-xs mx-2" id="icn1"></i>'; 
     btnToggle1.style.color='#fff';
     heading1.style.backgroundColor='#3c97e8';   
}
else{

    icon1.innerHTML='<i class="fas fa-arrow-up fa-xs mx-2" id="icn1"></i>'; 
      btnToggle1.style.color='black';
    heading1.style.backgroundColor='#fff';  
}
    
}
var btnToggle2=document.getElementById('btn-toggle2');
var heading2=document.getElementById('headingTwo');
var icon2=document.getElementById('icn2');
btnToggle2.onclick=function(){  
if( icon2.innerHTML=='<i class="fas fa-arrow-down fa-xs mx-2" id="icn2"></i>')
{
     icon2.innerHTML='<i class="fas fa-arrow-up fa-xs mx-2" id="icn2"></i>';
       btnToggle2.style.color='black';
    heading2.style.backgroundColor='#fff'; 
}
else{
    icon2.innerHTML='<i class="fas fa-arrow-down fa-xs mx-2" id="icn2"></i>'; 
     btnToggle2.style.color='#fff';
      heading2.style.backgroundColor='#3c97e8';  
}
}
var btnToggle3=document.getElementById('btn-toggle3');
var heading3=document.getElementById('headingThree');
var icon3=document.getElementById('icn3');
btnToggle3.onclick=function(){  
if( icon3.innerHTML=='<i class="fas fa-arrow-down fa-xs mx-2" id="icn3"></i>')
{
     icon3.innerHTML='<i class="fas fa-arrow-up fa-xs mx-2" id="icn3"></i>'; 
      btnToggle3.style.color='black';
      heading3.style.backgroundColor='#fff';     
}
else{
    icon3.innerHTML='<i class="fas fa-arrow-down fa-xs mx-2" id="icn3"></i>';
     btnToggle3.style.color='#fff';
    heading3.style.backgroundColor='#3c97e8';  
}
    
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else
  {
    document.getElementById("myBtn").style.display = "none";
  }
}
    
// When the user clicks on the button, scroll to the top of the document
function topFunction(){
    $(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 10) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 2000); 
        return false; 
    }); 
});
}