function bookSearch(){
	var search = document.getElementById('search').value
	document.getElementById('results').innerHTML = ""
	console.log(search)
	//find data and then manipulate it
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search, 
		dataType: "json",

		success: function(data){
			//creating a for loop to find the specific data we're looking for
			for(i=0; i<data.items.length; i++){
				results.innerHTML+="<h2>"+ data.items[i].volumeInfo.title + " "+ "by" + " " + data.items[i].volumeInfo.authors + "<h2>"
			}
		},
		//getting the information
		type: 'GET'
	});
}


document.getElementById('button').addEventListener('click', bookSearch, false)


//json - JavaScript Object Notation