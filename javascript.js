//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");
function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    });
}

$(document).ready(function () {
   var width = $(window).width();
   if(width < 990){
    klikMenu();
   }
})

//cek lebar
$(window).resize(function(){
   var width = $(window).width();
   if(width > 989){
       menu.css("display", "block");
   }else{
       menu.css("display", "none");
   }
   klikMenu();
});

//efek scroll
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        }else{
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});
        const images = document.querySelectorAll('.gallerytiu img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        
        images.forEach(image => {
            image.addEventListener('click', () => {
                lightboxImg.src = image.src;
                lightbox.style.display = 'block';
            });
        });
        function closeModal(){
            lightbox.style.display = 'none';
        }
        


        function loadGoogleTranslate(){
            new google.translate.TranslateElement("google_element")
        }