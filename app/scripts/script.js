chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "changeImage") {
		changeImageTag('../images/targetImage.png');
	}
})

var changeImageTag = function(fileName) {
	const reader = new FileReader()
	reader.readAsDataURL(fileName)
	reader.onload = function () {
		images = document.querySelectorAll('img')
			images.forEach(function(element) {
			element.setAttribute('src', reader.result)
			element.removeAttribute('srcset')
		})
  	}
	reader.onerror = function (error) {
		console.log('Error: ', error);
  	}
}