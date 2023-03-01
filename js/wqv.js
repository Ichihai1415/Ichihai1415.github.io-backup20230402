window.onload = function()
{
  getJson();//作成時は↓にする
  //setTimeout("getJson()", 10000);
  setInterval("getJson()", 30000);
}

function getJson() 
{
  let request = new XMLHttpRequest();
  request.open("GET", "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson");
  request.send();
  request.onreadystatechange = () => 
  {
    if (request.readyState == 4 && request.status == 200) 
    {
      let json = JSON.parse(request.responseText);
      document.getElementById("main").innerHTML="";
      for (let i = 0; i < json.features.length; i++)
      {
        let text = "震源:"+json.features[i].properties.place+"<br>"
        +json.features[i].geometry.coordinates[1]+"°,"+json.features[i].geometry.coordinates[0]+"°<br>深さ:"
        +json.features[i].geometry.coordinates[2]+"km<br>"
        +json.features[i].properties.magType+json.features[i].properties.mag + "  改正メルカリ震度階級:"+json.features[i].properties.mmi;
        document.getElementById("main").innerHTML += text+"<br>";
      }
    }
  }
}