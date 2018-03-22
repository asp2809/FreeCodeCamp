let str="";
let operands=1;
let operator=0;

$(".btn1").on("click",function() {
    let strc=$(this).text();
    str+=strc;
    if(strc == '+' || strc=="-" || strc=="*" || strc=="/")
    {
        operator++;
    }
    else if(str[str.length-2] == '+' || str[str.length-2] == '-' || str[str.length-2] == '*' || str[str.length-2] == '/')
        operands++;
    $(".io").text(str);
});

$("#bequal").on("click", function() {
    if(operands>operator)
    {
        let newstr=eval(str);
        $(".io").html(eval(str));
        str=newstr;
    }    
    else
    {
        $(".io").html("Error");
    }      
});

$(".ac").on("click", function() {
    str="";
    operands=1;
    operator=0;
    $(".io").html(str);
});

$("#back").on("click", function() {
    let last=str[str.length-1];
    if(last == '+' || last=="-" || last=="*" || last=="/")
    {
        operator--;
    }
    else if(str[str.length-2] == '+' || str[str.length-2] == '-' || str[str.length-2] == '*' || str[str.length-2] == '/')
        operands--;
    str=str.replace(last, "");
    $(".io").html(str);
});