/*
* Note: most code in this file has been borrowed from
* Any modified/added code (within the main.js file) has been commented
*/
function replaceText(fromString, toString){
  getTextNodes().forEach(function(node){
    //Modifications made by me
    node.nodeValue = node.nodeValue.replace(new RegExp(quote(fromString.toLowerCase()), 'g'), toString.toLowerCase());
  });

  function getTextNodes(){
    var node_list = [];

    (function scan(node){
      if(node.childNodes.length) 
        for(var i = 0; i < node.childNodes.length; i++) {
          scan(node.childNodes[i]);
		}
      else if(node.nodeType == Node.TEXT_NODE) {
        node_list.push(node);
	  }
    })(document);

    return node_list; 
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}

//All code in this function has been added by me
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
}, 3000);


