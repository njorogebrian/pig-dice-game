$(document).ready(function(event){
    $(".pig").hide(6000);
});
    var one, two, three, four
    one = 0
    two = 0
    three = 0
    four = 0
    $(document).ready(function(event){
        $("#btn").click(function(){
            var numbers = Math.floor(Math.random()*6)+1;
            if( numbers === 1){
                alert("you've rolled one")
                one=0;
                two += one;
                $("#cum1").text(two);
            }
            else{
                $("#ini1").text(numbers)
                one+=numbers;
                $("#cum1").text(one);
            }
        })
    })