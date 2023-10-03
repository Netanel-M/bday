//import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()
const today = new Date();
var birthdate = new Date(1995, 10, 5, 23, 0, 0);
var readyBa = (birthdate.getDate() === today.getDate()) && (birthdate.getMonth( +1 === today.getMonth()+1))
let age = (today.getFullYear() - birthdate.getFullYear())
let greeting = "Happy birthday! What a MECHANICAL day!";
$(document).ready(() => ready()); 

function updateAge() {
    let start = birthdate.getTime();
    let millis =  Date.now() - start;
    $("#secondsAlive").text(millis / 1000);
}

function ready() {
    {
        let mainDiv = $('#main')
        
        if (readyBa) {
            console.log("same day")
            mainDiv.append("<h1 id='mainTitle' class='display-1 mt-4 text-center' style='opacity: 0%'>Happy birthday, Valerie!</h1>");
            mainDiv.append(`<h2 id='subTitle' class='display-2 mt-2 text-center ' style='opacity: 0%'>For your ${age}th birthday</h1>`);
        
            jsConfetti.addConfetti({
                emojis: ['🥳','🤩', '🎂', '🎉'],
                emojiSize: 100,
                confettiNumber: 100,
              })
              
            $('#mainTitle').fadeTo(1000, 1);
            $('#subTitle').fadeTo(3000, 1);
            $('#mainTitle').css("color", "#89CFEF")
            $('#subTitle').css('color', '#008ECC')
            mainDiv.append("<hr / style='border: 1px solid white'>");
            mainDiv.append("<img class='align-self-center mb-4' style='width: 50%; opacity: 0%; border-radius: 5%' src='https://images.unsplash.com/photo-1581093067310-624c320ffd3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'/>")
            mainDiv.append(`<p class='display-5 text-center' style='opacity: 0%; color: #6693F5;' >${greeting}</p>`);
    
            $('p').fadeTo(1000, 1);
            $('img').fadeTo(2000, 1);
    
        
           setInterval(updateAge, 1000);
           $("#yearsSinceIndustrial").text(birthdate.getFullYear() - 1790)
            $("#firstSpaceElevator").text( 2072 - birthdate.getFullYear())
    
           $(".container").append("<button class='btn btn-lg mx-5 my-4' style='background-color: #0080FE; color: white;'>More Confetti</button>")
           $('button').on("click", () => {
            jsConfetti.addConfetti({
                emojis: ['🥳','🤩', '🎂', '🎉'],
                emojiSize: 100,
                confettiNumber: 100,
              })        });
      
            } else {
                $(".container").children().hide();
                $("body").append("<div class='container bg-dark d-flex flex-column' id='temp'></div>")
                $("#temp").html("<h1 class='display-1 text-white'>This isn't your birthday, shoo!</h1> <button id='overrideButton'>Yes it is</button>");
               $("#overrideButton").on("click", () => {
                    readyBa = true;
                    $("#temp").remove();
                    $(".container").children().show();
                    ready();

               });
                }
    }
}