window.onload = function(){
    const btnOpenMobMenu = document.querySelector('.btnMenuMob');
    const mobMenu = document.querySelector('.headerMob');
    const btnCloseMenu = document.querySelector('.closeMenu');
    btnOpenMobMenu.addEventListener('click', function(){
        mobMenu.classList.add('headerMob-act');
    })
    btnCloseMenu.addEventListener('click', function(){
        mobMenu.classList.remove('headerMob-act');
    })


    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        const target = $(this).attr('href');
        let ofSetTop = $(target).offset().top;
        $('body, html').animate({scrollTop: ofSetTop}, 700);
        return false
    })

}