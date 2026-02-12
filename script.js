const heading = document.querySelector("#heading");
const changeColor = () => {
    heading.classList.toggle("blue-text");
};
heading.addEventListener("click", changeColor);

const subtitle = document.querySelector("#subheading");
const changeSubColor = () => {
    subtitle.classList.toggle("blue-text");
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

const checkbox = document.querySelector("#checkbox");
const actionButtons = document.querySelector("#actions-buttons");

const handleCheckbox = () => {
    inbox.classList.toggle("is-selected");
    actionButtons.classList.toggle("hidden");
}

checkbox.addEventListener("click", handleCheckbox);

const deleteBtn = document.querySelector("#delete-button");

const handleDelete = () => {
    inbox.classList.toggle("hidden");

    if (deleteBtn.innerHTML === "Delete Message(s)") {
        deleteBtn.innerHTML = "Undo Deletion";
    } else {
        deleteBtn.innerHTML = "Delete Message(s)";
    }
};

deleteBtn.addEventListener("click", handleDelete);

const readBtn = document.querySelector("#mark-as-read");

const markRead = () => {
    unreadBtn.classList.remove("hidden");
    inbox.classList.remove("is-selected");
    inbox.classList.add("is-read");
    checkbox.checked = false;
};

readBtn.addEventListener("click", markRead);

const darkModeBtn = document.querySelector("#darkmode-button");
const body = document.querySelector("body");

const toggleDarkMode = () => {
    body.classList.toggle("dark-mode");
};

darkModeBtn.addEventListener("click", toggleDarkMode);