$(document).ready(function(){
    $("#colorFun1").click(function(){
        let str=$("#colorFun1").val();
        console.log(str);
        $("body").css('background-color','blue');
    });
    $("#colorFun2").click(function(){
        let str=$("#colorFun2").val();
        console.log(str);
        $("body").css('background-color','chartreuse');
    })
    $("#colorFun3").click(function(){
        let str=$("#colorFun3").val();
        console.log(str);
        $("body").css('background-color','aquamarine');
    })
    $("#colorFun4").click(function(){
        let str=$("#colorFun4").val();
        console.log(str);
        $("body").css('background-color','darkgrey');
    })
    $("#colorFun5").click(function(){
        let str=$("#colorFun5").val();
        console.log(str);
        $("body").css('background-color','blueviolet');
    })
    $("#colorFun6").click(function(){
        let str=$("#colorFun6").val();
        console.log(str);
        $("body").css('background-color','aqua');
    })
})