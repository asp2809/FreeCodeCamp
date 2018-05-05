let state=0;
let sumh=new Array(3);
let sumv=new Array(3);
let p1=prompt("Choose whether O or X");
console.log(p1);
$(document).ready(function() {

    let arr=new Array(3);
    for(let i=0;i<3;i++)
    {
        arr[i]=new Array(3);
        sumh[i]=0;
        sumv[i]=0;
    }
    let flag=0;
    $(".vc").on("click",function() {
        flag=1;
        reset();
    });
    $(".vp").on("click",function() {
        flag=0;
        reset();        
    });
    $(".btn").on("click",function() {
        if($(this).attr("data-points")==="0")
        {
            $(this).html(p1);
            if(p1 === 'X')
            {
                $(this).attr("data-points","-1");
                p1='O';
            }
            else
            {
                $(this).attr("data-points","1");
                p1='X';
            }
            let query=document.querySelectorAll(".btn-group button");
            let call=0;
            query.forEach(function(v){
                if(v.getAttribute("data-points")=="0")
                    call=1;
                console.log(call);
            });
            if(call==1 && flag===1)
            {
                let rind=Math.floor(Math.random()*9);
                while(query[rind].getAttribute("data-points")!=="0")
                {
                    console.log(rind);
                    rind=Math.floor(Math.random()*9);
                }
                query[rind].innerHTML=p1;
                if(p1 === 'X')
                {
                    query[rind].setAttribute("data-points","-1");
                    p1='O';
                }
                else
                {
                    query[rind].setAttribute("data-points","1");
                    p1='X';
                }
            }
            let i=0, j=0;
            query.forEach(function(v) {
                arr[i][j]=parseInt(v.getAttribute("data-points"));
                if(j===2)
                {
                    i+=1;
                    j=0;
                }
                else
                    j++;
            });
            for(let i=0;i<3;i++)
            {
                sumh[i]=0;
                sumv[i]=0;
                for(let j=0;j<3;j++)
                {
                    sumh[i]+=arr[i][j];
                    sumv[i]+=arr[j][i];
                }
                if(sumh[i]===3 || sumv[i]===3)
                {
                    alert("O wins");
                    reset();
                }
                else if(sumh[i]===-3 || sumv[i]===-3)
                {
                    alert("X wins");
                    reset();                    
                }
            }
            if((arr[0][0]+arr[1][1]+arr[2][2])===3)
            {
                alert("O wins");
                reset();                
            }
            if((arr[0][0]+arr[1][1]+arr[2][2])===-3)
            {
                alert("X wins");
                reset();                
            }
            if((arr[0][2]+arr[1][1]+arr[2][0])===3)
            {
                alert("O wins");
                reset();                
            }
            if((arr[0][2]+arr[1][1]+arr[2][0])===-3)
            {
                alert("X wins");
                reset();                
            }
        }
        else if($(this).attr("data-points")!=="0")
        {
            alert("Entry filled!!!");
        } 
        else
            alert("Game Ended!!!");
        
        let draw=1;
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                if(arr[i][j]===0)
                    draw=0;
            }
        }
        if(draw===1)
        {
            alert("Its a draw!!!");
            reset();
        }
    });
    $(".btn-danger").on("click", function() {
        reset();
    });
});

function reset() {
    let res=document.querySelectorAll(".btn-group button");
    res.forEach(function(g) {
        g.setAttribute("data-points","0");
        g.innerText="";
    });
    p1=prompt("Choose whether O or X");
}