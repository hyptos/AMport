$(function () {
    $(window).scroll(function() {
        if ($(".navbar").offset().top>30) {
            $(".navbar").addClass("sticky");
            $(".nav > li > a").addClass("stickyColor");
        }
        else {
            $(".navbar").removeClass("sticky");
            $(".nav > li > a").removeClass("stickyColor");
        }
    });
});

$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-180
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

//Modal - Work

$('#work-opera').click(function(){  
    $('html, body').stop().animate({
            'scrollTop': $('#work').offset().top-50
        }, 900, 'swing', function () {     
            $("#work-opera-content").fadeIn();   
    });
    
});

$('#work-zepass').click(function(){  
   $('html, body').stop().animate({
               'scrollTop': $('#work').offset().top-50
           }, 900, 'swing', function () {     
               $("#work-zepass-content").fadeIn();   
    });
});

$('#work-am').click(function(){  
    $('html, body').stop().animate({
                'scrollTop': $('#work').offset().top-50
            }, 900, 'swing', function () {     
                $("#work-am-content").fadeIn();   
    });
});

$('#work-opera-close').click(function(){  
    $('html, body').stop().animate({
            'scrollTop': $('#work').offset().top-50
        }, 900, 'swing', function () {     
            $("#work-opera-content").fadeOut();   
    });
});

$('#work-zepass-close').click(function(){  
    $('html, body').stop().animate({
            'scrollTop': $('#work').offset().top-50
        }, 900, 'swing', function () {     
            $("#work-zepass-content").fadeOut();   
    });
});

$('#work-am-close').click(function(){  
    $('html, body').stop().animate({
            'scrollTop': $('#work').offset().top-50
        }, 900, 'swing', function () {     
            $("#work-am-content").fadeOut();   
    });
});

$(document).ready(function() {
    // lorsque je soumets le formulaire
    $('#form').on('submit', function() {
 
        // je récupère les valeurs
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
 
        // je vérifie une première fois pour ne pas lancer la requête HTTP
        if(name == '' | email == '' | message == '') {
            $("#notification").text('Please enter your email address!');
            $("#notification").addClass('error');            
        } else {
            // appel Ajax
            $.ajax({
                url: $(this).attr('action'), // le nom du fichier indiqué dans le formulaire
                type: $(this).attr('method'), // la méthode indiquée dans le formulaire (get ou post)
                data: $(this).serialize(), // je sérialise les données (voir plus loin), ici les $_POST
                success: function(html) { // je récupère la réponse du fichier PHP
                    $("#submitButton").text('Sent !');
                    $("#notification").text(' ');
                    $("#submitButton").addClass('success');
                },
                error: function(html) {
                    $("#submitButton").text('An Error occured !');
                    $("#submitButton").text('error');                 
                }
            });
        }
        return false; // j'empêche le navigateur de soumettre lui-même le formulaire
    });
});


// Google 


