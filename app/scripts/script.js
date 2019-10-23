window.onload = function () {
	images = document.querySelectorAll('img')
	images.forEach(function(element) {
		element.setAttribute('src', chrome.extension.getURL('images/targetImage.png'))
		element.removeAttribute('srcset')
	})
}