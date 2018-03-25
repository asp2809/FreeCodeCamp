let timer=25;
let break1=5;
let timermin=timer;
let timersec=0;
let flag=0;

$('.timer').text(("0" + timermin).slice(-2) + ":" + ("0" + timersec).slice(-2));
$('.work').text(timer);
$('.break').text(break1);
$(".breakminus").on("click", function() {
    if(break1>1)
    {
        break1--;
        $('.break').text(break1);
    }
});
$(".breakplus").on("click", function() {
    break1++;
    $('.break').text(break1);    
});
$(".workminus").on("click", function() {
    if(timer>1)
    {
        timer--;
        timermin=timer;
        timersec=0;
        $('.work').text(timer);
        $(".timer").text(("0" + timermin).slice(-2) + ":" + ("0" + timersec).slice(-2));    
    }
});
$(".workplus").on("click", function() {
    timer++;
    timermin=timer;
    timersec=0;
    $('.work').text(timer);
    $(".timer").text(("0" + timermin).slice(-2) + ":" + ("0" + timersec).slice(-2));
});

$(".reset").on("click", function() {
    timermin=timer;
    timersec=0;
    $('.work').text(timer);
    $(".timer").text(("0" + timermin).slice(-2) + ":" + ("0" + timersec).slice(-2));
});



$(".play").on("click", function() {
    if(flag===0)
    {
        $(".play").html('<i class="fas fa-pause"></i>');
        flag=1;
    }
    else
    {
        $(".play").html('<i class="fas fa-play"></i>');
        flag=0;
    }
});

let t=0; //0 for work and 1 for break

setInterval(function () {
    if(flag===1)
    {
        if(timersec===0 && timermin !== 0)
        {
            timermin--;
            timersec=60;
        }
        else if(timermin===0 && timersec === 0)
        {
            if(t===0)
            {
                timermin=break1-1;
                t=1;
            }    
            else if(t===1)
            {
                timermin=timer-1;
                t=0;
            } 
            timersec=60;
        }
        timersec--;
        $('.timer').text(("0" + timermin).slice(-2) + ":" + ("0" + timersec).slice(-2));
    }
}, 1000);
