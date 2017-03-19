// $(document).ready(function(){

// }); 

$(document).ready(function() {

    /*第一种轮播方式 cycle插件*/
    //     $('.slider_main').cycle(); 

    /*第二种轮播方式 js搭配了css*/
    //     (function(){ 
    //     setInterval(function vt() {
    //         c = 1;
    //         $('.slider_' + c%8).fadeIn()
    //          .siblings().fadeOut();
    //         c++;
    //         // 打印轮播图li的class
    //         // var f=[];
    //         // f=$('.slider_main').children().each(function(){
    //         // console.log($(this).attr('class'));  
    //         // });
    //         }, 100); 
    //     })();

    /*第三种轮播方式 slider插件*/
    var jdCarousel = $('#jdCarousel');
    var carousel_control = $(".carousel-control");

    jdCarousel.carousel({
        interval: 2700
    });
    jdCarousel.mouseover(function() {
        carousel_control.css("visibility", "visible")
    });
    jdCarousel.mouseout(function() {
        carousel_control.css("visibility", "hidden")
    });

    /*侧导航栏json实现*/
    // $('#letter-b a').click(function(event) {
    //     event.preventDefault();
    //     $.getJSON('b.json', function(data) {
    //         var html = '';
    //         $.each(data, function(entryIndex, entry) {
    //             html += '<div class="entry">';
    //             html += '<h3 class="term">' + entry.term + '</h3>';
    //             html += '<div class="part">' + entry.part + '</div>';
    //             html += '<div class="definition">';
    //             html += entry.definition;
    //             if (entry.quote) {
    //                 html += '<div class="quote">';
    //                 $.each(entry.quote, function(lineIndex, line) {
    //                     html += '<div class="quote-line">' + line + '</div>';
    //                 });
    //                 if (entry.author) {
    //                     html += '<div class="quote-author">' + entry.author + '</div>';
    //                 }
    //                 html += '</div>';
    //             }
    //             html += '</div>';
    //             html += '</div>';
    //         });
    //         $('#dictionary').html(html);
    //     });
    // });

    //红色底框滑移
    var red_line = $('.before_b');
    var cx = $(".tool_b .cx");
    var gg = $(".tool_b .gg");
    var cx_text = $(".cx_text");
    var gg_text = $(".gg_text");
    cx.mouseenter(function() {
        red_line.stop()
            .animate({ marginLeft: "0" }, 200);
        cx_text.stop()
            .show();
        gg_text.stop()
            .hide();
    });
    gg.mouseenter(function() {
        red_line.stop()
            .animate({ marginLeft: "50px" }, 200);
        gg_text.stop()
            .show();
        cx_text.stop()
            .hide();
    });

    //service
    var s_list_li = $(".service_list li");
    s_list_li.mouseenter(function() {
        $(this).children("a").css("color", "rgb(200,22,35)")
    });
    s_list_li.mouseleave(function() {
        $(this).children("a").css("color", "rgb(102,102,102)")
    });


    //service bored
    var openkey = true;
    var open = function() {
        if (openkey) {
            // s_list_li.parent("ul").delay(200).animate({marginTop:"-38px"},200);
            // $(".service_bored").delay(200).animate({top:"63px"},200);
            // var _this=$(this);
            // setTimeout(function (){
            // _this.addClass("red");
            // _this.siblings().removeClass("red")},300);
            var _index = $(this).index();
            var _this = $(this);
            if (!$(this).parent().children().hasClass("red")) {
                clearTimeout(open);
                open = setTimeout(function() {
                    s_list_li.parent("ul").animate({ marginTop: "-38px" }, 200);
                    $(".service_bored").animate({ top: "63px" }, 200);
                    _this.addClass("red").removeClass("gray")
                        .siblings().removeClass("red").addClass("gray");

                    $(".close").css("display", "block");
                }, 100);
            } else {
                _this.addClass("red").removeClass("gray")
                    .siblings().removeClass("red").addClass("gray");

            }
            var there = $(".service_bored").children(".bored").eq(_index);
            there.removeClass("hidden").siblings(".bored").addClass("hidden");



        }
    };
    $(".service_list>li:lt(4)").on({
        mouseenter: open,
        mouseleave: function() {

            clearTimeout(open);
        }
    });
    $(".close").click(function() {
        s_list_li.attr('class', "");
        s_list_li.parent("ul").animate({ marginTop: "0" }, 200);
        $(".service_bored").animate({ top: "200px" }, 200);
        $(".close").css("display", "none");

        openkey = false;
        s_list_li.mouseleave(function() {
            openkey = true;

        });

    });

    // service top 选中
    $(".s_top").mouseenter(function() {
        var _index = $(this).index();
        $(this).addClass("check_a").siblings().removeClass("check_a");
        $(".tab").stop(true)
            .animate({ left: -182 * _index + "px" }, 200);
    });


    //伪话费充值优惠金额
    var cc=$("#a_tab_hf").children("select");
    cc.change(function(){
        $("#a_tab_hf").children(".text")
            .text("￥"+(parseInt(cc.val())-Math.random())
                    .toFixed(2)+"-￥"+parseInt(cc.val()));
    });

    //机票往返选项
   $(".b_tab input:radio").click(function(){
    // console.log($(this).attr("checked"));
        if($(this).attr("checked")=="checked"){
        }else{
            $(this).parents("form").children("label").children("input").removeAttr("checked");
            $(this).attr("checked","checked");
            if($(this).val()==="go-back"){
                $(".back").css("display","inline-block");
                $(".bored._b .tab .date").css("width","100px");
            }else{
                $(".back").css("display","none");
                $(".bored._b .tab .date").css("width","130px");
            };
        };
    });


   //cate
   $("#lists li").bind("mouseenter",function(){
        var _index=$(this).index()+1;
        $("#list_div").css("display","block");
        $("#cate_item"+_index).css("display","block");
        $("#cate_item"+_index).siblings().css("display","none");

   });
   $("#list").bind("mouseleave",function(){
        $("#list_div").css("display","none");
        $("#list_div .cate_part").css("display","none");
   });

    $(".personal_warp .add").on({
        mouseenter: function() {
            $(this).children("div").css("display","block");
            $(this).addClass("white");
        },
        mouseleave: function() {
            $(this).children("div").css("display","none");
            $(this).removeClass("white");
        }
    });


});
