$(function(){
	renderButtons(topic,"searchButton","#car-buttons");
	console.log("finished ");
})


var topic = ["ford","chevy","jeep","porsche"];

function renderButtons(topic,classAdd,areaToAdd){
	$(areaToAdd).empty();
	for (var i=0;i<topic.length;i++) {
		var a = $("<button>");
		a.addClass(classAdd);
		a.attr("data-type", topic[i]);
		a.text(topic[i]);
		$(areaToAdd).append(a);
	}

}



$(document).on("click", ".searchButton", function(){
	var type = $(this).data("type");
	var queryUrl = "https://api.giphy.com/v1/gifs/search?q="+type+"&api_key=7b84641fc1d24b70a53369fb906e559f&limit=10";
	$.ajax({url:queryUrl, method: "GET"})
	.done(function(response){
		console.log(response);
		for (var i =0;i<response.data.length; i++) {
			var searchDiv = $('<div class="search-item">')
			var rating = response.data[i].rating;
			var p = $("<p>").text("Rating: "+rating);
			var animated = response.data[i].images.fixed_height.url;
			var still = response.data[i].images.fixed_height_still.url;
			var image = $("<img>");
			image.attr("src",still);
			image.attr("data-still",still);
			image.attr("data-animated",animated);
			image.attr("data-state","still");
			image.addClass("searchImage");
			searchDiv.append(p);
			searchDiv.append(image);
			$("#searches").append(searchDiv);

	    
	   }
	   	
	})

}) 

