$(function () {

    $("#price button").click(function () {

        var salesPrice = 16000; //판매가격 16000원
        var grinding = 0;         //분쇄도 선택 0원, 2000원, 3000원
        var cnt = 0;                // count 수량

        //                              기본판매가격  *          수량     +          분쇄도

        grinding = parseInt($("#grinding").val());
//        alert("grinding : " + grinding);
        cnt = parseInt($("#cnt").val());
//        alert("cnt : " + cnt);

        var priceSum = salesPrice * cnt + grinding;

        $("#price span").text(priceSum);    //중요해!!



    });

});
