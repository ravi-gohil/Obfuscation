function showhint(str)
{
	var xhttp;
	if(str.length==0)
	{
		document.getElementById("txt1").innerHTML = "";
		return;
	}
	
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange= function() 
	{
		if(this.readyState == 4 && this.status == 200)
		{
			document.getElementById("txt1").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "gethint.php?q="+str, true);
	xhttp.send();
}