//add  value to list item and have it display

function addToList() {
  var value = document.getElementById("inputText").value;
  if (value === "") {
    alert('To add an item, type its name into the box')
  }
  else {
  var li = document.createElement("li");
  var textNode = document.createTextNode(value);
  li.appendChild(textNode);
  document.getElementById("list").appendChild(li);
  li.className = "item";
  document.getElementById('inputText').value="";
  //add an X to each list item
  var close=document.createElement("SPAN");
  var closeNode =document.createTextNode("X");
  close.appendChild(closeNode);
  li.appendChild(close);
  close.className= "close";
  };
  //have X remove list item on click
  document.body.addEventListener("click", function(event) {
    if (event.target.className == "close")
      event.target.parentElement.style.display="none";
  });
}
function removeAll(){
    document.getElementById("list").innerHTML = "";
}
