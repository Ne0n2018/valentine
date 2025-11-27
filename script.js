const messages = [
  "Ты уверена?",
  "Действительно уверена??",
  "Ты уверена на все 100?",
  "Дьяволенок, пожалуйста...",
  "Просто подумай об этом!",
  "Если скажешь нет, я очень расстроюсь...",
  "Я буду очень расстроен...",
  "Я буду очень-очень-очень расстроен...",
  "Ладно, перестаю просить...",
  "Шутка, скажи да, пожалуйста! ❤️",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.6}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

function handleReturnClick() {
  window.location.href = "index.html";
}
