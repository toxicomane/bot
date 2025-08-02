
function showStickers() {
  setActiveTab(0);
  document.getElementById("content").innerHTML = `
    <div class="card">
      <img src="assets/images/first_start.png" />
      <div class="details">
        <h3>First start!</h3>
        <p class="price">199 ★</p>
      </div>
    </div>
  `;
}

function showMarket() {
  setActiveTab(1);
  document.getElementById("content").innerHTML = `<p style="padding: 1rem;">Скоро в продаже...</p>`;
}

function goHome() {
  setActiveNav(0);
  showStickers();
}

function goProfile() {
  setActiveNav(1);
  document.getElementById("content").innerHTML = `<p style="padding: 1rem;">Ваш профиль будет здесь.</p>`;
}

function setActiveTab(index) {
  document.querySelectorAll('.tab').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
}

function setActiveNav(index) {
  document.querySelectorAll('.nav-btn').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
}

window.onload = showStickers;
