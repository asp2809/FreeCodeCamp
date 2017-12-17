document.querySelector(".searchbtn").addEventListener("click",function (){
	var url='https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=' + $('.search1').val();
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var data=request.response;
		var result=document.querySelector(".results");
		for(var i=0;i<data[1].length;i++)
		{
			result.innerHTML+="<li><a href=\"" + data[3][i] + "\" target=\"blank\">" + data[1][i] + "</a><br>" + data[2][i] + "</li><br>";
		}	
	}
});
