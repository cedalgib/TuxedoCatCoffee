"use strict";

/*Cederick Gibbs 
	Final Project
	November 30, 2021 -->
*/

// varible for $ function
		var $ = function(id) { return document.getElementById(id); };
		
		// varible for total
		var total = 0;
		
		// variable for order list text
		var optionText;
		
		// creates array to store preloaded images
		var preloaded = new Array();
		
		// creates image element and src attribute for preloaded images
		function preloadImages() {
		for (var i = 0; i < arguments.length; i++){
			preloaded[i] = document.createElement('img');
			preloaded[i].setAttribute('src',arguments[i]);
			}// ends for   
		}// ends function
		
		// preloads rollover images
		preloadImages(
		"images/espresso_info.jpg",
		"images/latte_info.jpg",
		"images/cappuccino_info.jpg",
		"images/coffee_info.jpg",
		"images/biscotti_info.jpg",
		"images/scone_info.jpg"
		)
		
		// changes image to description and price of item during mouseover 
		var imageSwitch = function() {
			if(this.alt == "espresso") {
				this.src = "images/espresso_info.jpg";
			}else if(this.alt == "latte") {
				this.src =  "images/latte_info.jpg";
			}else if(this.alt == "cappuccino") {
				this.src =  "images/cappuccino_info.jpg";
			}else if(this.alt == "coffee") {
				this.src =  "images/coffee_info.jpg";
			}else if(this.alt == "biscotti") {
				this.src =  "images/biscotti_info.jpg";
			}else if(this.alt == "scone") {
				this.src =  "images/scone_info.jpg";
			} // ends if
		}// ends function
		
		// changes image to original loaded image during mouseout
		var imageRevert = function() {
			if(this.alt == "espresso") {
				this.src = "images/espresso.jpg";
			}else if(this.alt == "latte") {
				this.src =  "images/latte.jpg";
			}else if(this.alt == "cappuccino") {
				this.src =  "images/cappuccino.jpg";
			}else if(this.alt == "coffee") {
				this.src =  "images/coffee.jpg";
			}else if(this.alt == "biscotti") {
				this.src =  "images/biscotti.jpg";
			}else if(this.alt == "scone") {
				this.src =  "images/scone.jpg";
			}// ends if
		}// ends function
		
		// updates the order list and total when the user clicks on an image
		var orderClick = function() {
			// creates option element for order list, creates text for option element, adds option element text to order
			if(this.alt == "espresso") {
				var node = document.createElement("option");
				optionText = document.createTextNode("$1.95 - Espresso");
				node.appendChild(optionText);
				$("order").appendChild(node);
				total += 1.95;
			}else if(this.alt == "latte") {
				var node = document.createElement("option");
				optionText = document.createTextNode("$2.95 - Latte");
				node.appendChild(optionText);
				$("order").appendChild(node);
				total += 2.95;
			}else if(this.alt == "cappuccino") {
				var node = document.createElement("option");
				optionText = document.createTextNode("$3.45 - Cappuccino");
				node.appendChild(optionText);
				$("order").appendChild(node);
				total += 3.45;
			}else if(this.alt == "coffee") {
				var node = document.createElement("option");
				optionText = document.createTextNode("$1.75 - Coffee");
				node.appendChild(optionText);
				$("order").appendChild(node);
				total += 1.75;
			}else if(this.alt == "biscotti") {
				var node = document.createElement("option");
				optionText = document.createTextNode("$1.95 - Biscotti");
				node.appendChild(optionText);
				$("order").appendChild(node);
				total += 1.95;
			}else if(this.alt == "scone") {
				var node = document.createElement("option");
				optionText = document.createTextNode("$2.95 - Scone");
				node.appendChild(optionText);
				$("order").appendChild(node);
				total += 2.95;
			}// ends if
			// displays and updates total
			$("total").innerHTML = "Total: $" + Number(total).toFixed(2);
		}// ends function
		
	// submits form, checkout.html is displayed
	var orderSubmit = function() {
		$("order_form").submit();
	}
	
	// clears order and total
	var orderClear =  function() {
		$("order").replaceChildren();
		$("total").innerHTML = "";
		total = 0;
	}
	
	window.onload = function() {
	
		// adds event handlers to buttons
		$("place_order").onclick = orderSubmit;
		$("clear_order").onclick = orderClear;
		
		// creates array of images
		var picture = document.getElementsByTagName("img");
		
		// attaches event handlers to images
		for (var i = 1; i < picture.length; i++) {
			picture[i].addEventListener("click", orderClick);
			picture[i].addEventListener("mouseover", imageSwitch);
			picture[i].addEventListener("mouseout", imageRevert);
		}// ends for
	}// ends function