var searchInput = $("#search-Bar").val();
var genBtn = "<button class='buttons'>" + "</button>";
var btnSelect = $(".buttons");
//var element = $('div.item:eq(3)');
$("#SearchButton").on("click", function() {
    var searchInput = $("#search-Bar").val();
    var genBtn = "<button class='buttons'>" + searchInput + "</button>";
    //console.log(searchInput);
    $("#buttonplace").append(genBtn);
    // $(".buttons").eq(1).on("click", function() {
    //     $("#testHere").text($(".buttons").eq(1).val());
    //     console.log($(".buttons").eq(1).val());
    // });
    // $(".buttons").eq(2).on("click", function() {
    //     $("#testHere").text($(".buttons").eq(2).val());
    //     console.log($(".buttons").eq(2).val());
    // });
});

//$(".buttons").on("click", function() {
//console.log("It Works!");
//});

//TODO: make a function to add to the index of the data, ergo a forloop that will execute the function and add ++ to the [] with the index in it.

$(document).on("click", ".buttons", function() {
    var butnClicked = $(this);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + butnClicked.text() + "&api_key=dc6zaTOxFJmzC&limit=10";
    butnClicked.text();
    console.log(butnClicked.text());


		$.ajax({
			url: queryURL,
			method: "GET"
		})
			.done(function(response){
				//TODO: make a function with a for loop that lets me get 10 indexes input into 10 img tags
				var imageUrlIndex0 = response.data["0"].images.original.url;  //.data["0"].images.original.url
				var imageUrlIndex1 = response.data["1"].images.original.url;
				var imageUrlIndex2 = response.data["2"].images.original.url;
				var imageUrlIndex3 = response.data["3"].images.original.url;
				var imageUrlIndex4 = response.data["4"].images.original.url;
				var imageUrlIndex5 = response.data["5"].images.original.url;
				var imageUrlIndex6 = response.data["6"].images.original.url;
				var imageUrlIndex7 = response.data["7"].images.original.url;
				var imageUrlIndex8 = response.data["8"].images.original.url;
				var imageUrlIndex9 = response.data["9"].images.original.url;


				console.log(response);

				var imageGen0 = $("<img src="+imageUrlIndex0+">");
				var imageGen1 = $("<img src="+imageUrlIndex1+">");
				var imageGen2 = $("<img src="+imageUrlIndex2+">");
				var imageGen3 = $("<img src="+imageUrlIndex3+">");
				var imageGen4 = $("<img src="+imageUrlIndex4+">");
				var imageGen5 = $("<img src="+imageUrlIndex5+">");
				var imageGen6 = $("<img src="+imageUrlIndex6+">");
				var imageGen7 = $("<img src="+imageUrlIndex7+">");
				var imageGen8 = $("<img src="+imageUrlIndex8+">");
				var imageGen9 = $("<img src="+imageUrlIndex9+">");

				//imageGen.attr("src", imageUrl);

				imageGen0.attr("alt", "GIF");
				imageGen1.attr("alt", "GIF");
				imageGen2.attr("alt", "GIF");
				imageGen3.attr("alt", "GIF");
				imageGen4.attr("alt", "GIF");
				imageGen5.attr("alt", "GIF");
				imageGen6.attr("alt", "GIF");
				imageGen7.attr("alt", "GIF");
				imageGen8.attr("alt", "GIF");
				imageGen9.attr("alt", "GIF");

				$("#images").prepend(imageGen0,imageGen1,imageGen2,imageGen3,imageGen4,imageGen5,imageGen6,imageGen7,imageGen8,imageGen9);
			});



});