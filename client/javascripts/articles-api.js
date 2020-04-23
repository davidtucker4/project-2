// jshint esversion: 6

let controller = function(){
  /*
    let prefixURL = "https://api.flickr.com/services/feeds/photos_public.gne?tags=";
    let suffixURL = "&format=json&jsoncallback=?";
    //get value entered by user from textbox
    //let flickrTag = document.querySelector("input[type=text]").value;
    let flickrTag = $("input[type=text]").val();
  */
    let requestURL = 'https://thejsway-server.herokuapp.com/api/articles';

    //clear old photos
    //$(".photos").html("");

  $.getJSON(requestURL, function(response) {
    console.log(response);

    console.log(`Article ${response[0].id}
Title: ${response[0].title}
Content: ${response[0].content}`);

    response.forEach(function(article, index) {
      let newDiv = document.createElement("div");
      document.querySelector(".articles").appendChild(newDiv);

      let header = document.createElement("h3");
      header.textContent = `Article ${article.id}`;
      newDiv.appendChild(header);

      let titlePar = document.createElement("p");
      titlePar.textContent = article.title;
      newDiv.appendChild(titlePar);

      let contentPar = document.createElement("p");
      contentPar.textContent = article.content;
      newDiv.appendChild(contentPar);

      /*
      //Flickr returns 20 images by default
      //We need only six images for the Gallery
      if (index < 6) {
        // create a new JQuery element to hold the image
        // but hide it so we can fade it in
        let $img = $("<img>").hide();

        // set the attribute to the url
        // contained in the response
        $img.attr("src", item.media.m);
        $img.attr("width", "150");

        // attach the img tag to the main
        // photos element and then fade it in
        $(".photos").append($img);
        $img.fadeIn();
      }
      */
    });

  });
};


$(document).ready(controller);
/*
window.addEventListener("load", function() {

  let button = document.querySelector("button");

  button.addEventListener("click", controller);
});
*/
