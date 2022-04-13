export const addIfNotExist = (element: HTMLElement, cssAttribute: string) => {
	
	if(element.classList.contains(cssAttribute)) {
		return;
	}
	element.classList.add(cssAttribute);
	
}