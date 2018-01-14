var arr=["ESL_SC2", "OgamingSC2", "habathcx", "RobotCaleb", "noobs2ninjas", "cretetion", "freecodecamp", "storbeck"];
var streamsurl="https://wind-bow.glitch.me/twitch-api/streams/";
var channelurl="https://wind-bow.glitch.me/twitch-api/channels/";

var listarr1=[];
let list={
    show: null,
    link: null,
    logo: null,
    status: null,
    name: null
}  

function listarr(show,link,logo,status,name) {
    this.show=show;
    this.link=link;
    this.logo=logo;
    this.status=status;
    this.name=name;
}
arr.forEach(function(e) 
{   
    var url2=channelurl + e;

    $.getJSON(url2,function(data1) {     
        var url1=streamsurl + e;
        $.getJSON(url1,function(data) {
            list.logo=data1.logo;
            list.link=data1.url;
            if(data.stream === null)
            {   
                list.status="Offline";
                list.show = null;
            }
            else
            {
                list.status="Online";
                list.show=data.stream.channel.status;
            }
            var newvar=new listarr(list.show,list.link,list.logo,list.status,e);
            listarr1.push(newvar);
            $(".streams").append(function() {
                let str="<li class='bghover'> <span>&nbsp&nbsp<img src=" + list.logo + ">&nbsp&nbsp <a href=" + list.link + " target='blank'>" + e + "</a> - ";
                if(list.show !== null)
                {
                    str+=list.show + "</li>";
                }
                else
                    str+="Offline</li>";
                return str;
            }
            );

            });              
      });
});



$('#all').click(function() {
    $(".streams").html("");
    listarr1.forEach(function(list) {
        $(".streams").append(function() {
            let str="<li class='bghover'> <span>&nbsp&nbsp<img src=" + list.logo + ">&nbsp&nbsp <a href=" + list.link + " target='blank'>" + list.name + "</a> - ";
            if(list.show !== null)
            {
                str+=list.show + "</li>";
            }
            else
                str+="Offline</li>";
            return str;
        }
        
        );
    });
});

$('#online').click(function() {
    $(".streams").html("");
    listarr1.forEach(function(list) {
        if(list.show !== null)
        {
            $(".streams").append(function() {
                let str="<li class='bghover'> <span>&nbsp&nbsp<img src=" + list.logo + ">&nbsp&nbsp <a href=" + list.link + " target='blank'>" + list.name + "</a> - " + list.show + "</li>";
                return str;
            });
        }
    });
});

$("#offline").click(function() {
    $(".streams").html("");
    listarr1.forEach(function(list) {
        if(list.show === null)
        {
            $(".streams").append(function() {
                let str="<li class='bghover'> <span>&nbsp&nbsp<img src=" + list.logo + ">&nbsp&nbsp <a href=" + list.link + " target='blank'>" + list.name + "</a> - Offline </li>";
                return str;
            });
        }
    });
});