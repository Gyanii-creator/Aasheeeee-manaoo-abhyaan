let name = "";
let step = 0;

const questions = [
const questions = [
"Abhi bhi naraz ho mereseeee? 🥺",
"Like… thoda sa bhi maaf nahi karogi?",
"Do you miss me even 1%? Be honest.",
"Am I still your favourite idiot? 😭",
"Life is boring without me… right?",
"You smiled when you opened this na? 😏",
"You know I care about you a lot?",
"I really miss talking to you.",
"Can we ignore this fight?",
"Can we go back to laughing again?",
"So… besties again?",
"Last question… you’re not leaving me, right? 💖"
];

const noTexts = [
"NO allowed nahi 😒",
"Wrong answer madam",
"Try again 😌",
"System only accepts YES",
"Error 404: NO not found",
"Please reconsider 🥺",
"Itna gussa bhi thik nahi",
"Friendship server crashed"
];

function start(){
    name = document.getElementById("nameInput").value.trim();

    // Only allow Aasheee
    if(name !== "Aasheee"){
        alert("Only my Aasheee can open this 😌💗");
        return;
    }

    document.getElementById("start").classList.add("hidden");
    document.getElementById("questions").classList.remove("hidden");

    document.getElementById("greet").innerText = "Hi " + name + " 💕";
    showQuestion();
}

function showQuestion(){
    const q = document.getElementById("questionText");
    q.classList.remove("typing");

    void q.offsetWidth; // reset animation

    q.innerText = questions[step];
    q.classList.add("typing");

    document.getElementById("progress").innerText =
    "💗 " + (step+1) + " / " + questions.length;
}

function next(){
    const card = document.querySelector(".card");
    card.style.animation="bounceClick .3s ease";
    setTimeout(()=>card.style.animation="",300);
    step++;

    const yes = document.getElementById("yesBtn");
    yes.style.transform = "scale(" + (1 + step*0.03) + ")";

    if(step < questions.length){
        showQuestion();
    } else {
        document.getElementById("questions").classList.add("hidden");
        document.getElementById("final").classList.remove("hidden");

        document.getElementById("finalMessage").innerHTML =
        name + ",<br><br>I just wanted to say…<br>" +
        "You're really important to me.<br>" +
        "And I never want to lose you.<br><br>" +
        "So please stay.<br>" +
        "Forever my bestie. 💖";
    }
}

function moveNo(){
    const btn = document.getElementById("noBtn");

    const x = Math.random()*200 - 100;
    const y = Math.random()*80 - 40;

    btn.style.transform = `translate(${x}px, ${y}px) rotate(${x/10}deg)`;

    btn.innerText = noTexts[Math.floor(Math.random()*noTexts.length)];
}

document.addEventListener("mousemove", function(e){
    const heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.pointerEvents = "none";
    heart.style.fontSize = "14px";
    heart.style.opacity = "0.7";
    heart.style.transition = "all 1s ease";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.style.transform="translateY(-20px)";
        heart.style.opacity="0";
    },10);

    setTimeout(()=>heart.remove(),1000);
});
