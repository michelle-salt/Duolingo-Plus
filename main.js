// Note: some code in this file has been borrowed from

//Replaces all the text in the webpage
function replaceText(fromString, toString){
  getTextNodes().forEach(function(node){
    //Converts to lowercase
    node.nodeValue = node.nodeValue.replace(new RegExp(fromString.toLowerCase(), 'g'), toString.toLowerCase());
  });
  
  //Gets a list of words
  function getTextNodes(){
    var listOfNodes = [];
    
    (function scan(node){
      if(node.nodeType == Node.TEXT_NODE) {
        listOfNodes.push(node);
      } else if(node.childNodes.length) 
      for(var i = 0; i < node.childNodes.length; i++) {
        scan(node.childNodes[i]);
        }
      }
    )(document);
    
    return listOfNodes; 
  }
}

//Selects a random languages
//Changes the language
//Timesout after 5 seconds
setTimeout(function () {
  var rndNum = Math.floor((Math.random() * 4) + 1);
  if (rndNum == 1) {
    for (let key in dutch) {
      replaceText(dutch[key], key);
    }
  } else if (rndNum == 2) {
    for (let key in greek) {
      replaceText(greek[key], key);
    }
  } else if (rndNum == 3) {
    for (let key in japanese) {
      replaceText(japanese[key], key);
    }
  } else {
    for (let key in arabic) {
      replaceText(arabic[key], key);
    }
  }
}, 5000);


