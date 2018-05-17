let count=0;
let arr=[];
let strict=0;
let clicked=[];
$(document).ready(function() {
    $(".restart").on("click", function() {
        if(count>0)
        {
            count=1;
            $("textarea").text(('00'+count).slice(-2));            
            arr=[];
            clicked=[];
            select(count);
        }
    });
    $(".strict").on("click", function() {
        if(strict==0)
        {
            strict=1;
        }
        else if(strict==1)
        {
            strict=0;
        }
        clicked=[];        
        $(".strict").toggleClass("stricton");
    });
    $(".onoff").on("click", function() {
        if($(this).text()=="OFF")
        {
            $(this).text("ON");
            count=0;
            $("textarea").text('--');    
        }
        else if($(this).text()=="ON")
        {
            $(this).text("OFF");
            count=1;
            arr=[];
            clicked=[];
            $("textarea").text(('00'+count).slice(-2));
            select(count);   
        }   
    });
    $('.game').on("click", function() {
        if(clicked.length<count)
        {
            clicked.push($(this).text());
            for(var i=0;i<clicked.length;i++)
            {
                if(clicked[i]!=arr[i] && strict==0)
                {
                    alert("Sorry!! You are wrong...");
                    clicked=[];
                    (function myLoop (i) {                 
                        setTimeout(function () {   
                            if(arr[count-i]==="A")
                            toggleColours(['#F00', 'rgb(110, 6, 6)'], 0);
                        if(arr[count-i]==="B")
                            toggleColours(['#00F', 'rgb(5, 5, 131)'], 1);
                        if(arr[count-i]==="C")
                            toggleColours(['#0F0', 'rgb(1, 83, 1)'], 2)
                        if(arr[count-i]==="D")
                            toggleColours(['#ffff00', 'rgb(100, 100, 1)'], 3);                
                            if (--i) myLoop(i);      
                        }, 2000)
                    })(count); 
                }
                else if(clicked[i]!=arr[i] && strict==1)
                {
                    alert("Sorry!! You are wrong...");
                    count=1;
                    $("textarea").text(('00'+count).slice(-2));
                    clicked=[];
                    arr=[];
                    select(count);
                }
            }
            if(clicked.length==20)
            {
                count=1;
                arr=[];
                clicked=[];
                alert("Congo!! You really have a great mind...");
                select(count);
            }
            else if(clicked.length==count)
            {
                count++;
                $("textarea").text(('00'+count).slice(-2));                
                clicked=[];
                let index=Math.floor(Math.random()*4);
                if(index===0)
                {
                    col=['#F00', 'rgb(110, 6, 6)'];
                    arr.push("A");
                }
                else if(index==1)
                {
                    col=['#00F', 'rgb(5, 5, 131)'];
                    arr.push("B");            
                }
                else if(index==2)
                {
                    col=['#0F0', 'rgb(1, 83, 1)'];
                    arr.push("C");            
                }
                else if(index==3)
                {
                    col=['#ffff00', 'rgb(100, 100, 1)']; 
                    arr.push("D");            
                }
                (function myLoop (i) {                 
                    setTimeout(function () {   
                        if(arr[count-i]==="A")
                        toggleColours(['#F00', 'rgb(110, 6, 6)'], 0);
                    if(arr[count-i]==="B")
                        toggleColours(['#00F', 'rgb(5, 5, 131)'], 1);
                    if(arr[count-i]==="C")
                        toggleColours(['#0F0', 'rgb(1, 83, 1)'], 2)
                    if(arr[count-i]==="D")
                        toggleColours(['#ffff00', 'rgb(100, 100, 1)'], 3);                
                        if (--i) myLoop(i);      
                    }, 2000)
                })(count); 
            }
            // else if(flag==1 && clicked.length==count && strict===1)
            // {
            //     count=1;
            // }
        }
        else
            alert("Invalid Move");
        console.log(clicked);
    });
});
let col='';
function select(count) {
    query=document.querySelectorAll(".game");
    for(let i=0;i<count;i++)
    {
        let index=Math.floor(Math.random()*4);
        if(index===0)
        {
            col=['#F00', 'rgb(110, 6, 6)'];
            arr.push("A");
        }
        else if(index==1)
        {
            col=['#00F', 'rgb(5, 5, 131)'];
            arr.push("B");            
        }
        else if(index==2)
        {
            col=['#0F0', 'rgb(1, 83, 1)'];
            arr.push("C");            
        }
        else if(index==3)
        {
            col=['#ffff00', 'rgb(100, 100, 1)']; 
            arr.push("D");            
        } 
    }
    (function myLoop (i) {                 
        setTimeout(function () {   
            if(arr[count-i]==="A")
            toggleColours(['#F00', 'rgb(110, 6, 6)'], 0);
        if(arr[count-i]==="B")
            toggleColours(['#00F', 'rgb(5, 5, 131)'], 1);
        if(arr[count-i]==="C")
            toggleColours(['#0F0', 'rgb(1, 83, 1)'], 2)
        if(arr[count-i]==="D")
            toggleColours(['#ffff00', 'rgb(100, 100, 1)'], 3);                
            if (--i) myLoop(i);      
        }, 2000)
    })(count);
}
function toggleColours(color, index) {
    query=document.querySelectorAll(".game");
    playaudio(index);
    query[index].style.backgroundColor = color[0];
    let time1=setTimeout(function() {
        query[index].style.backgroundColor = color[1];
    },1000);
}

function playaudio(index)
{
    let audioel=document.querySelectorAll(".audio1");
    audioel[index].play();
}