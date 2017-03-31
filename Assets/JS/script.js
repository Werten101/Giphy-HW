var searchInput = $("#search-Bar").val();
var genBtn = "<button class='buttons'>" + "</button>";
var btnSelect = $(".buttons");
//var element = $('div.item:eq(3)');
$("#SearchButton").on("click", function() {
    var searchInput = $("#search-Bar").val();
    var genBtn = "<button class='buttons'>" + searchInput + "</button>";
    //console.log(searchInput);
    $("#Background").append(genBtn);
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
				var imageUrl = response.data["0"].url;

				console.log(response);

				var imageGen = $("<img src="+imageUrl+">");

				//imageGen.attr("src", imageUrl);

				imageGen.attr("alt", "GIF");

				$("#images").prepend(imageGen);
			});



});