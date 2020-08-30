
$(function () {
    // 弹框
    $("#app-download").hover(function () {

        $("#app-download-img").show();
    }, function() {
        $("#app-download-img").hide();
    });

    $("#head-other-show").hover(function () {

        $("#show-list").show();
    }, function() {
        $("#show-list").hide();
    });
    // 设置轮播图切换间隔
    $('.carousel').carousel({
        interval: 2000
    })

    $(document).scroll(function () {
        var top=$(window).scrollTop();
        if (top > 228 || top == 228) {
            $("#nav").css({"position": "fixed","top": "46px"});
        };
        if (top < 228) {
            $("#nav").css({"position": "relative","top": "228px"});
        };

    })
})

