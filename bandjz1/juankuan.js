$(document).ready(function(){
    $(".zhifubao_icon").click(function(){
        $(".zhifubao_photo").fadeToggle();
        $(".zhifubao_photo").parent().children().not(".zhifubao_photo").hide();
    });
    $(".qq_icon").click(function(){
        $(".qq_photo").fadeToggle();
        $(".qq_photo").parent().children().not(".qq_photo").hide();
    });

    $(".weixin_icon").click(function(){
        $(".weixin_photo").fadeToggle();
        $(".weixin_photo").parent().children().not(".weixin_photo").hide();
    })
});