"use strict";

const getPictures = () =>{

    const options = {
       method: 'GET',
	    headers: {
		    'x-rapidapi-key': 'e5e9c69f5emsh20c63971073282ep1cab1ajsn0a0dd0ea2b03',
		    'x-rapidapi-host': 'programming-memes-images.p.rapidapi.com'
	}
    }

    fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', options)
        .then(response => response.json())
        .then(json => displayPictures(json))
        .catch(err => console.error(err));
}

const displayPictures = data => {
    let html = "";
    for(let i=0; i< 5; i++){
        
        html = `<img src="${data[i].image}">`;    
        
        $(`.post-${i+1}`).html(html);
    }

};

$(document).ready(function(){
    
    $("#test").click(function(){
        console.log("clicked");
        getPictures();
    })
    
});    



