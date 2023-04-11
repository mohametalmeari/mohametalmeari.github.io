const menuContainer = document.getElementById('menu_container');
const hamburger = document.getElementById('menu_icon');
const xMenu = document.getElementById('x-menu');
const menuLink = document.querySelectorAll('.menu-link');

hamburger.addEventListener('click', () => {
  menuContainer.style.display = 'block';
});

xMenu.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

for (let i = 0; i < menuLink.length; i += 1) {
  menuLink[i].addEventListener('click', () => {
    menuContainer.style.display = 'none';
  });
}

for(let i = 0; i < projects.length; i++){
  const seeProject = document.getElementById("see_project_"+(i+1));
  seeProject.addEventListener("click", () => {
    createPopup(i);
    const xPopup = document.getElementById("x-popup");
  const popupContainer = document.getElementById("popup_container");
  xPopup.addEventListener("click", () => {
    popupContainer.remove();
  });
  });
}

for(let i = 0; i < projects.length; i++){
  const seeProject = document.getElementById("see_project_"+(i+1));
  seeProject.addEventListener("click", () => {
    createPopup(i);
    const xPopup = document.getElementById("x-popup");
  const popupContainer = document.getElementById("popup_container");
  xPopup.addEventListener("click", () => {
    popupContainer.remove();
  });
  });
}

function createPopup(cardNo) {
  let tagsList = "";
  for (let j = 0; j < projects[cardNo].tags.length; j++) {
    tagsList += "<li>" + projects[cardNo].tags[j] + "</li>";
  }
  let popupWindow = document.createElement("div");
  popupWindow.innerHTML =
    `<div id="popup_container" class="popup_container">
<div class="popup_card">
  <div class="popup_title">
    <img id="x-popup" src="./images/x-dark.png" alt="">
    <h2>` +
    projects[cardNo].name +
    `</h2>
    <div class="info">
      <span>` +
    projects[cardNo].info[0] +
    `</span>
      <span>●</span>
      <span>` +
    projects[cardNo].info[1] +
    `</span>
      <span>●</span>
      <span>` +
    projects[cardNo].info[2] +
    `</span>
    </div>
  </div>
  <div class="popup_pv ` +
    "pv" +
    (cardNo+1) +
    `">
    <img
      class="preview"
      src="` +
    projects[cardNo].mobile_img +
    `"
      alt="Website Preview"
    />
  </div>
  <div class="popup_details">
  <p>` +
    projects[cardNo].description +
    `</p>
    <div>
      <ul class="prog_lang">` +
    tagsList +
    `</ul>
      <hr>
      <div class="popup_btn">
        <button type="button" href="` +
    projects[cardNo].live_link +
    `">See Live <i class="material-icons">arrow_forward</i></button>
        <button type="button" href="` +
    projects[cardNo].source_link +
    `">See source<i class="fa fa-github"></i></button>
      </div>
    </div>
  </div>
</div>
</div>`;
  works.appendChild(popupWindow);
}