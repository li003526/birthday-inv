const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

const messages = [
    "Try again 🙄",
    "Rly? Is this what our friendship means to you?????",
    "No. Just no. Again.",
    "COME AGAIN?!?!??!?!",
    "REALLY???",
    "WRONG ANSWER!",
    "I can smell the betrayal from here.",
    "damn.."
];

let count = 0;

//no button
noBtn.addEventListener("click", function() {
    message.textContent = messages[count];

    count++;

    if (count >= messages.length) {
        count = 0;
    }
});

//yes button
yesBtn.addEventListener("click", function() {
    document.body.innerHTML = `
        <h1>YAYYYYY</h1>
        <p>Your are officially invited to my 21th!</p>

        <h2>Birthday Details</h2>
        <p>Date: Dec 5th</p>
        <p>Time: TBD but late afternoon to evening</p>
        <p>Location: The Standard (txt me if u need address)</p>
        <p>Details: BYOB! There will be pizza and cookies :></p>

        <p>RSVP COMING SOON</p>
    `;
}



)
