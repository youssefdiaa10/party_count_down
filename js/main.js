// !Navbar
$('#openBar').click(function(){
    $('.my-navbar').animate({width: "300px"} , 1000);
});

$('#closeBtn').click(function(){
    $('.my-navbar').animate({width: "0px"} , 1000);
});



// !Details
$('.display-singer-bar-1').click(function(){

    $('.singer-para-1').slideToggle(500);

    for (let i = 2; i <= 4; i++) {
        $(`.singer-para-${i}`).slideUp();
}
});

$('.display-singer-bar-2').click(function(){

    $('.singer-para-2').slideToggle(500);

    for (let i = 1; i <= 4; i++) {
        if(i == 2){
            continue;
        }

        else{
            $(`.singer-para-${i}`).slideUp();
        }
}
});

$('.display-singer-bar-3').click(function(){

    $('.singer-para-3').slideToggle(500);

    for (let i = 1; i <= 4; i++) {
        if(i == 3){
            continue;
        }

    else{
        $(`.singer-para-${i}`).slideUp();
    }
}
});

$('.display-singer-bar-4').click(function(){

    $('.singer-para-4').slideToggle(500);

    for (let i = 1; i <= 3; i++) {
    $(`.singer-para-${i}`).slideUp();
}
});



// !Duration
let countdownDate = new Date("Jun 4, 2024 12:00:00").getTime();

let counter = setInterval(() => {
        let dateNow = new Date().getTime();

        let dateDifference = countdownDate - dateNow;

       let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
       let hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
       let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

    $("#days").html(`${days} Days`);
    $("#hours").html(`${hours} Hours`);
    $("#minutes").html(`${minutes} Minutes`);
    $("#seconds").html(`${seconds} Seconds`);


    if (dateDifference <= 0) {
        clearInterval(counter);
    }
} , 1000)



// !Contact
$('#numberOfCharacter').html('100');

function getMaxNumberOfCharacters(){
    let maxNumberOfCharacters = 100;

    let numberOfCharacters = $('textarea').val().length;

    let numberOfCharactersDifference = maxNumberOfCharacters - numberOfCharacters;


    if(numberOfCharactersDifference <= 0) {
        $('#numberOfCharacter').html('Your available character finished');
    }

    else{
        $('#numberOfCharacter').html(`${numberOfCharactersDifference}`);
    }
};












