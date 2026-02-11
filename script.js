const heading = document.querySelector("#heading");
const changeColor = () => {
    heading.classList.add("blue-text");
};
heading.addEventListener("click", changeColor);

const subtitle = document.querySelector("#subheading");
const changeSubColor = () => {
    subtitle.classList.add("blue-text");
};
subtitle.addEventListener("click", changeSubColor);

const replyBtn = document.querySelector("#reply-button");

const replyMessage = document.querySelector("#reply-message");

const showReply = () => {
    replyMessage.classList.remove("hidden");
}

replyBtn.addEventListener("click", showReply);
const sendBtn = document.querySelector("#send-button");
const cancelBtn = document.querySelector("#cancel-button");

const hideReply = () => {
    replyMessage.classList.add("hidden");
}

sendBtn.addEventListener("click", hideReply);
cancelBtn.addEventListener("click", hideReply);

const openBtn = document.querySelector("#open-button");
const inbox = document.querySelector("#inbox");
const inboxMessage = document.querySelector("#inbox-message");
const unreadBtn = document.querySelector("#mark-button");

const openMessage = () => {
    inbox.classList.add("is-read");
    inboxMessage.classList.remove("hidden");
    unreadBtn.classList.remove("hidden");
}

openBtn.addEventListener("click", openMessage);

const closeBtn = document.querySelector("#close");

const closeMessage = () => {
    inboxMessage.classList.add("hidden");
}

closeBtn.addEventListener("click", closeMessage);

const markUnread = () => {
    inboxMessage.classList.add("hidden");
    inbox.classList.remove("is-read");
    unreadBtn.classList.add("hidden");
};

unreadBtn.addEventListener("click", markUnread);

const targetElement = document.querySelector("body");

const toggleCustomClass = () => {
    if (targetElement.classList.contains("peach")) {
        targetElement.classList.remove("peach");
    } else {
        targetElement.classList.add("peach");
    }
};

subtitle.addEventListener("click", toggleCustomClass);