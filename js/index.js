function generateSelect(id, day, items) {

    htmlString = [];
    htmlString.push(`<select id='${id}' data-day='${day}' class='movieTimes formcontrol'>`);
    htmlString.push("<option value=''>Choose a time</option>");

    var options = items.map(x => {

        return `<option value='${x}'>${x}</option>`;

    })


    htmlString.push(options.join(" "))
    htmlString.push("</select>");


    return htmlString.join(" ");
}



$(function () {

    $('#movieListingBody').on('change', '.movieTimes', function() {

        var element = $(this).prop('id');
        var currentTimeChosen = $(this).val();
        var currentDayChosen = $(this).data('day');
        console.log('movie time have changed for id: ' + element);
        console.log('movie time is set for : ' + currentTimeChosen);
        console.log('movie day is set for : ' + currentDayChosen);
    })


    //Add the button handler
    $('#btnLoadMovies').on("click", function () {
        $.getJSON('https://college-movies.herokuapp.com/', function (movies) {
            var htmlString = [];
            for (var i = 0; i < movies.length; i++) {

                var currentMovie = movies[i];
                htmlString.push("<tr>");
                htmlString.push("<td>");
                htmlString.push("<li><b>TITLE:</b>");
                htmlString.push(currentMovie.title);
                if(currentMovie.title=="Geostorm"){
                    htmlString.push("<img src='Geostorm.jpg'>");
                }
                else if(currentMovie.title=="The Jungle Book"){
                    htmlString.push("<img src='JungleBook.jpg'>");
                }
                else if(currentMovie.title=="Dirty Grandpa"){
                    htmlString.push("<img src='DirtyGrandpa.jpg'>");
                }
                else if(currentMovie.title=="Angry Birds"){
                    htmlString.push("<img src='AngryBirds.png'>");
                }
                else if(currentMovie.title=="Finding Dory"){
                    htmlString.push("<img src='Finding_Dory.jpg'>");
                }
                else if(currentMovie.title=="Alice in Wonderland: Through the Looking Glass"){
                    htmlString.push("<img src='Alice.png'>");
                }
                else if(currentMovie.title=="Batman v Superman: Dawn of Justice"){
                    htmlString.push("<img src='BatmanvSuperman.jpg'>");
                }
                else if(currentMovie.title=="Kung Fu Panda 3"){
                    htmlString.push("<img src='Kung_Fu_Panda_3.jpg'>");
                }
                else if(currentMovie.title=="the Free State of Jones"){
                    htmlString.push("<img src='Free_State_of_Jones_poster.png'>");
                }
                else if(currentMovie.title=="Zootopia"){
                    htmlString.push("<img src='Zootopia.jpg'>");
                }

                htmlString.push("</td>");
                htmlString.push("<td>");
                htmlString.push("<li><b>CAST:</b>");
                htmlString.push(currentMovie.cast);
                htmlString.push("<li><b>GENRE:</b>");
                htmlString.push(currentMovie.genre);
                htmlString.push("<li><b>NOTES:</b>");
                htmlString.push(currentMovie.notes);
                htmlString.push("</td>");
                htmlString.push("<td>")
                htmlString.push(generateSelect('monTimes', 'monday', currentMovie.runningTimes.mon));
                htmlString.push("</td>")
                htmlString.push("<td>")
                htmlString.push(generateSelect('tueTimes', 'tuesday', currentMovie.runningTimes.tue));
                htmlString.push("</td>")


                htmlString.push("<td>");
                htmlString.push(generateSelect('wedTimes', 'Wednesday', currentMovie.runningTimes.wed));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('thuTimes', 'Thursday', currentMovie.runningTimes.thu));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('friTimes', 'Friday', currentMovie.runningTimes.fri));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('satTimes', 'Saturday', currentMovie.runningTimes.sat));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('sunTimes', 'Sunday', currentMovie.runningTimes.sun));
                htmlString.push("</td>");


                htmlString.push("</tr>");
            }

            var finalHTML = htmlString.join(" ")

            $('#movieListingBody').append(finalHTML);

        })

    })

})