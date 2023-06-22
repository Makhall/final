const menu = document.querySelector('.menu');
const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;

menu.addEventListener('click', () => {
  menu.classList.toggle('show');
});

toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});

function showContactPopup() {
  document.getElementById("contactPopup").style.display = "block";
}

function hideContactPopup() {
  document.getElementById("contactPopup").style.display = "none";
}
