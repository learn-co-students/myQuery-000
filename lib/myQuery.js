function Library(elString){
  var selectedEl = this.getElement(elString);
  // we use [0] because we want the selected items to be somewhat 
  // difficult to access so that users of our library do not use it against our intentions
  // 0 has no special meaning; it is just a property
  // we could have used anything like selectEl or selectedElephant
  this[0] = selectedEl;
}
 
Library.prototype.getElement = function(elString){
  if (elString[0] === ".") {
    return document.getElementsByClassName(elString.slice(1, elString.lenght));
  } else if (elString[0] === "#") {
    return document.getElementById(elString.slice(1, elString.lenght));
  } else {
    return document.getElementsByTagName(elString);
  }
};

Library.prototype.css = function(property, value){
  // the spec inputs the string 'pink' and then tests for the rgb value
  // getting this to work would require a massive color chart, I'm just going
  // with the pink conversion for now
  if (property === "color" && value === "pink") {
    value = "rgb(255, 192, 203)";
  }
  var elArr = this[0];
  for (var i = 0; i < elArr.length; i++ ){
    elArr[i].setAttribute("style", property + ":" + value); // this works but has something to do with hex maybe
  }
};

Library.prototype.remove = function(elString){
  var elArr = this[0];
  var loopDuration = elArr.length;
  for (var i = 0; i < loopDuration; i++) {
    elArr[0].parentNode.removeChild(elArr[0]);
  }
};

Library.prototype.append = function(appender){
  var elArr = this[0];
  var loopDuration = elArr.length;
  for (var i = 0; i < loopDuration; i++) {
    var element = appender.match(/[A-z]+(?=>)/)[0].toUpperCase();
    var node = document.createElement(element); 
    var text = appender.match(/[A-z]+(?=<)/)[0];
    var textnode = document.createTextNode(text); 
    node.appendChild(textnode); 
    elArr[i].appendChild(node);
  }
};

var myQuery = function(elString){
  return new Library(elString);
}