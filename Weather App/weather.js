if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getWeather);
}
function getWeather(position) {
    var temp=0, des="", icon="";
    var lat=position.coords.latitude;
    var lon=position.coords.longitude;
    var link="https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon;
    
    $.getJSON(link,function(data) {
      temp=data.main.temp;
      des+=data.weather[0].main;
      icon+=data.weather[0].icon;
      if(temp<35 && temp>20)
        $("body").addClass("haze");
      else if(temp>=35)
        $("body").addClass("hot");
      else
        $("body").addClass("cold");
      $(".img1").html(function() {
            var c=(temp*1.8)+32;
            console.log($("button").html());
            return "<img src=" + icon + "></img>   " + c + "  &#8457";
          });
      $("button").html("&#8451");
      $("button").on("click",function() {
        if($(this).attr("value")=="&#8457")
        {
          $("button").attr("value","&#8451");
          $("button").html("&#8451");
          $(".img1").html(function() {
            var c=(temp*1.8)+32;
            console.log($("button").attr("value"));
            return "<img src=" + icon + "></img>   " + c + "  &#8457";
          });
        }
        else
        {
          $("button").attr("value","&#8457");
          $("button").html("&#8457");
          console.log($("button").attr("value"));
          $(".img1").html(function() {
            return "<img src=" + icon + "></img>   " + temp + "  &#8451";
          });
        }
      });
      $(".des").html(des);
    }); 
}


