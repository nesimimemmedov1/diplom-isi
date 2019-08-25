$(document).ready(function () {
    $(".src-i").click(function () {
        $(".tablet-search-bar").css({
            top:"60px",
            visibility:"visible"
        })
        $(".src-i").hide()
        $(".src-i-two").show()
    })

    $(".src-i-two").click(function () {
        $(".tablet-search-bar").css({top:"0px"})
        $(".src-i-two").hide()
        $(".src-i").show()
    })

    $(".i-bars").click(function () {
        $(".left-menu").animate({
            left: "0"
        })
        $(".i-bars").hide().fadeOut()
        $(".i-times").show().fadeIn()
        $(".layer").addClass("active")
        $("body").css({overflow:"hidden"})
    })

    $(".layer").click(function(){
        $(".left-menu").animate({
            left: "-250px"
        })
        $(".layer").removeClass("active")
        $(".i-times").hide().fadeOut()
        $(".i-bars").show().fadeIn()
        $("body").css({overflow:"scroll"})
    })

    $(".i-times").click(function () {
        $(".i-times").hide()
        $(".i-bars").show()
        $(".left-menu").animate({
            left: "-284px"
        })
        $(".layer").removeClass("active")
        $("body").css({overflow:"scroll"})
    })



    $(".i_down").click(function () {
        $(".nav-menu-bar").toggle()
        $(".left-menu").css({
            overflowY: "scroll"
        })

        if ($(".nav-menu-bar").css("display") == "none") {
            $(".i_down").css({transform:"rotate(0deg"})
            $(".left-menu").css({overflowY: "visible"})
        }else{
            $(".i_down").css({transform: "rotate(180deg"})
        }
    })

    $(".e-mail-bar").click(function () {
        $(".sub-section h5").css({
            opacity: "0"
        })
    })

    $(".comment-s #comment").click(function () {
        $("#comment").css({
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 7px 1px inset"
        })
        $(".send").show(200).fadeIn()
        $(".cansel").show(200).fadeIn()
    })

    $(".cansel").click(function () {
        $(".cansel").hide(200).fadeOut()
        $(".send").hide(200).fadeOut()
        $("#comment").css({
            boxShadow: "none"
        })
    })

    $(".send").click(function () {
        let inputval1 = $("#name").val();
        let inputval2 = $("#comment").val();

        if ($(".comment-s .input-append").val() == "") {
            console.log('');
        } else {
            $(".comment-section").append(`<div class="comment-m"><div class="d-flex justify-content-between"> <h5 class="mr-1">  ${inputval1}</h5> <div class="d-flex thumbs"><h6 class="mr-2">0</h6> <i class="fas fa-thumbs-up"></i></div></div><div class="d-flex"></div></div><p> ${inputval2}</p></div> `);
            $("#name").val("");
            $("#comment").val("");
        }

        let thumbs= $(".thumbs i");
        let thumbsText = $(".thumbs h6")
        thumbs.on('click', function(){
            thumbsText.text(0+1)
            thumbs.css({color: "blue"})
        })
    });

    $(".login-btn").click(function () {
        if ($(".login-input").val() == ""){
            $(".login-input").css({boxShadow:"inset 0px 0px 6px 0px rgb(255, 0, 0)"})
        }else{
            $(".pop-up").css({visibility:"visible"})
            setTimeout(function(){
                $(".pop-up").css({visibility:"hidden"}); },1000)
                $(".login-input").val("")
        }
    })

    $(".register-btn").click(function () {
        if ($(".register-input").val() == ""){
            $(".register-input").css({boxShadow:"inset 0px 0px 6px 0px rgb(255, 0, 0)"})
        }else{
            $(".pop-up").css({visibility:"visible"})
            setTimeout(function(){
                $(".pop-up").css({visibility:"hidden"}); },1000)
                $(".register-input").val("")
        }
    })

    $(".nw-sub-btn").click(function () {
        if ($(".e-mail-bar").val() == ""){
            $(".e-mail-bar").css({boxShadow:"inset 0px 0px 6px 0px rgb(255, 0, 0)"})
        }else{
            $(".e-mail-bar").hide()
            $(".nw-sub-btn-two").show()
            $(".nw-sub-btn").hide()
            $(".e-mail-bar").css({boxShadow:"none"})
        }
    })
    
    $(".sub-btn").click(function () {
        if ($(".sub input").val() == ""){
            $(".sub input").css({boxShadow:"inset 0px 0px 6px 0px rgb(255, 0, 0)"})
        }else{
            $(".footer-section .main-menu input").hide()
            $(".pop-up-sub").show()
            $(".sub-btn").hide()
            $(".sub").css({margin:"0px"})
            $(".footer-section h1").css({marginTop:"12px"})
            $(".sub input").css({boxShadow:"none"})
        }
    })

    $(".contact-btn").click(function(){
        if ($(".contact-bars").val() == ""){
            $(".contact-bars").css({boxShadow:"inset 0px 0px 6px 0px rgb(255, 0, 0)"})
        }else{
            $(".pop-up").css({visibility:"visible"})
            setTimeout(function(){
                $(".pop-up").css({visibility:"hidden"}); },1000)
        }
      
    })

    let registerInput = $(".register-input");

    for(let i = 0; i < registerInput.length; i++) {
        registerInput[i].addEventListener("input", myScript);

        function myScript() {
            if(registerInput[i].value == "") {
                registerInput[i].style.boxShadow = "inset 0px 0px 6px 0px rgb(255, 0, 0)";
            }else {
                registerInput[i].style.boxShadow = "none";
            }
        }
    }

    let loginInpout = $(".login-input");

    for(let i = 0; i < loginInpout.length; i++) {
        loginInpout[i].addEventListener("input", myScript);

        function myScript() {
            if(loginInpout[i].value == "") {
                loginInpout[i].style.boxShadow = "inset 0px 0px 6px 0px rgb(255, 0, 0)";
            }else {
                loginInpout[i].style.boxShadow = "none";
            }
        }
    }

    let contactBars = $(".contact-bars");

    for(let i = 0; i < contactBars.length; i++) {
        contactBars[i].addEventListener("input", myScript);

        function myScript() {
            if(contactBars[i].value == "") {
                contactBars[i].style.boxShadow = "inset 0px 0px 6px 0px rgb(255, 0, 0)";
            }else {
                contactBars[i].style.boxShadow = "none";
            }
        }
    }

    let subInput = $(".sub-input");

    for(let i = 0; i < subInput.length; i++) {
        subInput[i].addEventListener("input", myScript);

        function myScript() {
            if(subInput[i].value == "") {
                subInput[i].style.boxShadow = "inset 0px 0px 6px 0px rgb(255, 0, 0)";
            }else {
                subInput[i].style.boxShadow = "none";
            }
        }
    }

    let emailbar = $(".e-mail-bar");

    for(let i = 0; i < emailbar.length; i++) {
        emailbar[i].addEventListener("input", myScript);

        function myScript() {
            if(emailbar[i].value == "") {
                emailbar[i].style.boxShadow = "inset 0px 0px 6px 0px rgb(255, 0, 0)";
            }else {
                emailbar[i].style.boxShadow = "none";
            }
        }
    }


    $(".nw-sub-btn-two i").click(function () {
        $(".nw-sub-btn-two").hide()
        $(".e-mail-bar").show()
        $(".nw-sub-btn").show()
    })

    $(".pop-up-sub i").click(function () {
        $(".pop-up-sub").hide()
        $(".main-menu input").show()
        $(".sub-btn").show()
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $('#return-to-top').fadeIn(400);

        } else {
            $('#return-to-top').fadeOut(400);
        }
    });

    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
})