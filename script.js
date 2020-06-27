function change(){
  var  request = new XMLHttpRequest();
  var url = "https://catfact.ninja/fact";
  request.open("GET",url,false);
  request.send();
  var response1 = request.responseText;
  var data = JSON.parse(response1);
  console.log(data["fact"])
document.getElementById("test").innerHTML=data["fact"];
}
