const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	results = fruit.filter((val) => val.toLowerCase().includes(str));

	return results;
}

function searchHandler(e) {
	// get str typed in by user
	const inputStr = e.target.value.toLowerCase();

	if (inputStr !== "") {
		// Search for fruits
		fruitsFound = search(inputStr);

		// show found fruits as suggestions
		showSuggestions(fruitsFound, inputStr);
	}else {
		suggestions.innerHTML = "";
		suggestions.classList.remove("has-suggestions");
	}
}

function showSuggestions(results, inputVal) {

	// Clear suggestions first
	suggestions.innerHTML = "";

	reg = new RegExp(inputVal, "gi");

	// Add suggestions
	for (let fruit of results) {
		const fruitLi = document.createElement("li");
		fruitLi.innerHTML = fruit.replace(reg, (str) => `<b>${str}</b>`);
		suggestions.append(fruitLi);
	}

	if (results.length === 0) {
		// remove borders around suggestions <ul> if there is no suggestion.
		suggestions.classList.remove("has-suggestions");
	}else{
		suggestions.classList.add("has-suggestions");
	}
}

function useSuggestion(e) {

	let useSuggestionText = undefined;
	
	if (e.target.nodeName == "B") {
		// if the bold text is clicked
		useSuggestionText = e.target.parentElement.innerText;
	} else if (e.target.nodeName == "LI") {
		useSuggestionText = e.target.innerText;
	}
	
	input.value = useSuggestionText;
	suggestions.innerHTML = "";
	suggestions.classList.remove("has-suggestions");
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);