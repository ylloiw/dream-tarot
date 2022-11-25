let drawCard = () => {

    var myCards = [
        "acid reflux nightmare",
        "acting out a daydream",
        "all just a dream",
        "anxiety dreams",
        "based on a dream",
        "bedtime brainwashing",
        "blank book",
        "cannot dream",
        "catapult nightmare",
        "delicious daydream",
        "dreamville",
        "dream apocalypse",
        "dream deception",
        "dream emergency exit",
        "dreamland",
        "dream people",
        "dream walker",
        "dream weaver",
        "dream within a dream",
        "dreams of flying",
        "dying dream",
        "fantasy keepsake",

    ];

    let card = myCards[Math.floor(Math.random() * myCards.length)
    ];
    return card




}


window.onload = function () {
    canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");



    var img = document.getElementById("rose");
    //ctx.drawImage(img, 0, 0);

    //Write text
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(drawCard(), canvas.width / 2, canvas.height / 2);


};


showCard = (image) => {

    document.getElementById("rose").src = canvas.toDataURL("image/png");
}


