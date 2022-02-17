function showSearch() {
	document.getElementById("search").style.display = "block";
}

function hideSearch() {
	document.getElementById("search").style.display = "none";	
}

$(document).ready(function () {
    $("#search__input").keyup(function () {
        if(this.value == "Гроші на ліки"){
            $('#search__result').css("display", "block");
        }else{
            $('#search__result').css("display", "none");
        }
    });
});

 