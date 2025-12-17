let count = 0;
let increaseEl = document.getElementById("increase-btn");
let decreaseEl = document.getElementById("decrease-btn");
let saveEl = document.getElementById("save-button");
let bookEl = document.getElementById("book-count");
let resultEl = document.getElementById("result-mes");
let todaysEl = document.getElementById("today-count");
let historyEl = document.getElementById("save-his");
let streakEl = document.getElementById("streak-sum");

function increase(){
    count += 1;
    bookEl.innerText = count;
    resultEl.textContent =  resultMessage(count);
}

function decrease(){
    if(count > 0){
        count -= 1;
    bookEl.innerText = count;
    resultEl.textContent = resultMessage(count);
    }
}

function save(){
    bookEl.innerText = count;
    let saveStr = "Today's count: " + count;
    todaysEl.textContent = saveStr; 
    console.log("Saved count: " + count);

    let history = JSON.parse(localStorage.getItem("allDays") || "[]");
    let entry = {count: count, time: new Date().toLocaleString()};
    history.push(entry);
    localStorage.setItem("allDays", JSON.stringify(history));

    let today = new Date().toLocaleDateString();
    let lastSaveDate = localStorage.getItem("lastSaveDate");
    let currentStreak = Number(localStorage.getItem("userstreak") || 0);
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let yesterdayStr = yesterday.toLocaleDateString();
    if (lastSaveDate === today) {
    } else if (lastSaveDate === yesterdayStr){
        currentStreak += 1
    } else {currentStreak = 1};
    localStorage.setItem("lastSaveDate", today);
    localStorage.setItem("streak", currentStreak);
    streakEl.textContent = "Saved! Current Streak is " + currentStreak + "days 🔥"

    count = 0;
    bookEl.innerText = count;
    resultEl.textContent = resultMessage(count);
}

function resultMessage(num){
    if(num >= 30){return "Wow! That's out of this world amazing!!!";}
    else if(num >= 20){return "I can't believe you did such a wonderful thing!";}
    else if(num >= 10){return "That's amazing!";}
    else if(num >= 5){return "That's crazy amazing!";}
    else {return "That's great!"}
}




