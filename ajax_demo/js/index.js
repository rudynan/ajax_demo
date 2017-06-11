/**
 * Created by Administrator on 2017/6/9.
 */
//window.onload = function () {
//    over(txtarea,tip);
//    over(txtaream,tip2);
//};
//
//var txtarea = document.getElementsByClassName("input")[0];
//var tip = document.getElementsByClassName("tip")[0];
//var txtaream = document.getElementsByClassName("inputm")[0];
//var tip2 = document.getElementsByClassName("tip2")[0];
// function over(a,b){
//    a.onmouseover = function () {
//        b.setAttribute("class","tip tipcolor");
//    };
//     a.onmouseleave = function () {
//         b.setAttribute("class","tip");
//     };
//     a.onfocus= function () {
//         b.setAttribute("class","tip tipcolor");
//     };
//     a.onblur= function () {
//         b.setAttribute("class","tip");
//     };
//}


//jquery

$(function () {
    //console.log($(".input").val());
    //$.extend({"fun1": function () {
    //    console.log("i am fun1");
    //}});
    $(".input").on({
        "mouseenter": function () {
            //console.log("big");
            //console.log("big");
            //$.fun1();
            $(".tip").css("color", "#f00000");
        },
        "mouseout": function () {
            //console.log("small");
            $(".tip").css("color", "#555");
        }
    }).on({
        "focus": function () {
            //console.log("a");
            $(".tip").css("color", "#f00000");
            $(".input").off("mouseout");
            $(".attent").css("display", "none");
            $(".tip").css("display", "block");
        },
        "blur": function () {
            //console.log("b");
            $(".tip").css("color", "#555");
            $(".input").on("mouseout", function () {
                $(".tip").css("color", "#555");
            });
            $.func1();
        }
    });

    $(".inputm").on({
        "mouseenter": function () {
            $(".tip2").css("color", "#f00000");
        },
        "mouseout": function () {
            $(".tip2").css("color", "#555");
        }
    }).on({
        "focus": function () {
            $(".tip2").css("color", "#f00000");
            $(".inputm").off("mouseout");
        },
        "blur": function () {
            $(".tip2").css("color", "#555");
            $(".inputm").on("mouseout", function () {
                $(".tip2").css("color", "#555");
            })
        }

    })


});

//ajax
//    function ajax() {
//        var xmlHttpReq = null;
//        if (window.ActiveXObject) {
//            xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
//        } else if (window.XMLHttpRequest) {
//            xmlHttpReq = new XMLHttpRequest();
//        }
//        var userid =$(".input").val();
//        var password = $(".inputm").val();
//        var url = "check.php?userid=" + userid+"&password"+password;
//        if (xmlHttpReq != null) {
//            xmlHttpReq.open("GET", url, true);
//            xmlHttpReq.onreadystatechange = rc;
//            xmlHttpReq.send(null);
//        }
//        function rc() {
//            if (xmlHttpReq.readyState == 4) {
//                if (xmlHttpReq.status == 200) {
//                    var data = xmlHttpReq.responseText;
//                    if(data == 1){
//                        $(".attent").css("display","block");
//                        $(".tip").css("display","none");
//                    }else if(data ==2 ){
//                        $(".attent2").css("display","block");
//                        $(".tip").css("display","none");
//                    }else if(data == 3){
//                        $(".attent3").css("display","block");
//                        $(".tip").css("display","none");
//                    }else if(data == 4){
//                        $(".attentm").css("display","block");
//                        $(".tip2").css("display","none");
//                        $(".inputm").addClass("inputm2");
//                    }
//                }
//            }
//        }
//
//    }


//jQuery ajax
$.extend({
    "func1": function () {
        var userid =$(".input").val();
        var password = $(".inputm").val();
        $.ajax({
            url: "check.php",
            type: "GET",
            dataType: "text",
            data:{username:userid,password:password},
            success: function (data) {
                if (data == 1) {
                    $(".attent").css("display", "block");
                    $(".tip").css("display", "none");
                } else if (data == 2) {
                    $(".attent2").css("display", "block");
                    $(".tip").css("display", "none");
                } else if (data == 3) {
                    $(".attent3").css("display", "block");
                    $(".tip").css("display", "none");
                } else if (data == 4) {
                    $(".attentm").css("display", "block");
                    $(".tip2").css("display", "none");
                    $(".inputm").addClass("inputm2");
                }
            },error: function () {
                console.log("problem");
            }
        })
    }
});

