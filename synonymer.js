function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

// https://dictionaryapi.com 
// find API key here^
const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${getSelectionText()}?key=YOUR_API_KEY`
var xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.send();

xhr.onreadystatechange = (e) => {
	if (xhr.readyState === 4) {
		var res = JSON.parse(xhr.responseText);
		var synonymList = "";

		res.forEach(function (item, index) {
			if (item.hwi.hw === res[0].hwi.hw) {
				var synonyms = item.meta.syns[0];
				var partOfSpeech = item.fl

				synonymList += "\n" + partOfSpeech.toUpperCase() + "\n" 

				synonyms.forEach(function (item) {
					synonymList += item + "\n";
				})
			}
		})

		alert(synonymList)
	}
}
