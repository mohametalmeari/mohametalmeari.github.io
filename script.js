const menuContainer = document.getElementById('menu_container');
const hamburger = document.getElementById('menu_icon');
const xMenu = document.getElementById('x-menu');
const menuLink = document.querySelectorAll('.menu-link');
const form = document.querySelector('#contact_form');
const EMAIL_INVALID = 'Please use lowercase letters for your email';
const formField = document.querySelectorAll('.form_field');

hamburger.addEventListener('click', () => {
  menuContainer.style.display = 'block';
});

xMenu.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

for (let i = 0; i < menuLink.length; i += 1) {
  menuLink[i].addEventListener('click', () => {
    if (window.innerWidth < 768) {
      menuContainer.style.display = 'none';
    }
  });
}

const projects = [
  {
    name: 'To Do List',
    mobile_img: './images/SnapshootPortfolio1.png',
    desktop_img: './images/SnapshootPortfolioDesktop1.png',
    info: ['Microverse', 'Front End Dev', '2023'],
    description:
      `
      Having a To-Do list is a great way to stay organized 
      and manage your tasks efficiently. With so many things 
      to do and so little time, it's easy to feel overwhelmed 
      and unsure of where to start. That's where a To-Do list 
      comes in handy! It's a simple tool that helps you keep 
      track of all the tasks you need to complete in a given 
      day, week, or month.

      A To-Do list can be as basic or as detailed as you like. 
      At its core, it's a list of tasks or activities that you 
      need to complete, along with any deadlines or priorities 
      that are associated with them. By having all your tasks 
      in one place, you can quickly and easily see what needs 
      to be done and when, without having to keep everything 
      in your head.
      
      One of the benefits of using a To-Do list is that it 
      can help you to stay focused and productive throughout
      `,
    short_desciption:
      'To Do List is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live_link: 'https://mohametalmeari.github.io/To-Do-List-Project/dist/',
    source_link: 'https://github.com/mohametalmeari/To-Do-List-Project/',
  },
  {
    name: 'Awesome Books',
    mobile_img: './images/SnapshootPortfolio2.png',
    desktop_img: './images/SnapshootPortfolioDesktop2.png',
    info: ['Microverse', 'Full Stack Dev', '2023'],
    description:
      `
      A Books Library that uses local storage is a convenient 
      and simple way to keep track of your favorite books. 
      With so many books available in the world today, it can 
      be difficult to remember which ones you've read and which 
      ones you want to read. This is where a Books Library 
      comes in handy.

      By using local storage to save your favorite books, you 
      can easily access your collection from any device. Whether 
      you're using your laptop, phone, or tablet, you can quickly 
      view your collection and find the book you're looking for. 
      Plus, because the data is stored locally, you don't need 
      an internet connection to access your library.

      Another benefit of using local storage for your Books 
      Library is that it's secure and private. You don't need 
      to worry about your data being shared or compromised, as 
      it's all stored locally on your device. This also means 
      that you have full control over your collection, and you 
      can easily add or remove books as you please.
      `,
    short_desciption:
      'A Books Library that use local storage to save your favorite books.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live_link: 'https://mohametalmeari.github.io/Awsome-Books-ES6/',
    source_link: 'https://github.com/mohametalmeari/Awsome-Books-ES6',
  },
  {
    name: 'NEBULA NIGHTS',
    mobile_img: './images/SnapshootPortfolio3.png',
    desktop_img: './images/SnapshootPortfolioDesktop3.png',
    info: ['Microverse', 'Full Stack Dev', '2023'],
    description:
      `
      The Interstellar Music Experience website is an 
      innovative and unique concert that combines music, 
      art, and technology to create an immersive journey 
      through space. It features curated music, stunning 
      visuals, and interactive elements that allow 
      visitors to explore the depths of the cosmos. It's 
      a celebration of the intersection of art, music, 
      and technology and promises to be a truly 
      unforgettable experience for space enthusiasts 
      and music lovers alike.
      `,
    short_desciption:
      "An Interstellar Music Experience is a one-of-a-kind concert that combines the best of music, art, and technology to create an immersive and unforgettable intergalactic journey through the cosmos.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    live_link: 'https://mohametalmeari.github.io/',
    source_link: 'https://github.com/mohametalmeari/CapstoneOne',
  },
  {
    name: 'Leaderboard',
    mobile_img: './images/SnapshootPortfolio4.png',
    desktop_img: './images/SnapshootPortfolioDesktop4.png',
    info: ['Microverse', 'Front End Dev', '2023'],
    description:
      `
      The leaderboard is a great way to track your progress 
      and see how you stack up against other players. It 
      displays scores submitted by different players, and 
      it also allows you to submit your score.

      To submit your score, simply enter your name and 
      the score you achieved. Your score will then be added 
      to the leaderboard for all to see.
      
      The leaderboard is a great way to stay motivated and 
      competitive. It's also a great way to see how you're 
      improving over time. So if you're looking for a way to 
      track your progress and stay motivated, be sure to 
      check out the leaderboard.
      `,
    short_desciption:
      'Leaderboard displays scores submitted by different players. It also allows you to submit your score.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live_link: 'https://mohametalmeari.github.io/Leaderboard/dist/',
    source_link: 'https://github.com/mohametalmeari/Leaderboard/',
  },
];

const works = document.getElementById('works');
for (let i = 0; i < projects.length; i += 1) {
  let tagsList = '';
  for (let j = 0; j < projects[i].tags.length; j += 1) {
    tagsList += `<li>${projects[i].tags[j]}</li>`;
  }
  const card = document.createElement('div');
  card.innerHTML = `
    <div class="card">
          <div class="pv pv${i + 1}">
            <img
              class="preview"
              src="${projects[i].mobile_img}"
              alt="Website Preview"
            />
          </div>
          <div class="card_details">
            <h2>${projects[i].name}</h2>
            <div class="type_and_date">
              <span>${projects[i].info[0]}</span>
              <span>●</span>
              <span>${projects[i].info[1]}</span>
              <span>●</span>
              <span>${projects[i].info[2]}</span>
            </div>
            <p>${projects[i].short_desciption}</p>
            <ul class="prog_lang">${tagsList}</ul>
            <button type="button" id="see_project_${i + 1}">See Project</button>
          </div>
        </div>`;
  works.appendChild(card);
}

function createPopup(cardNo) {
  let tagsList = '';
  for (let j = 0; j < projects[cardNo].tags.length; j += 1) {
    tagsList += `<li>${projects[cardNo].tags[j]}</li>`;
  }
  const popupWindow = document.createElement('div');
  popupWindow.innerHTML = `<div id="popup_container" class="popup_container">
<div class="popup_card">
  <div class="popup_title">
    <img id="x-popup" src="./images/x-dark.png" alt="">
    <h2>${projects[cardNo].name}</h2>
    <div class="info">
      <span>${projects[cardNo].info[0]}</span>
      <span>●</span>
      <span>${projects[cardNo].info[1]}</span>
      <span>●</span>
      <span>${projects[cardNo].info[2]}</span>
    </div>
  </div>
  <div class="popup_pv pv${cardNo + 1}">
    <img
      class="preview"
      src="${projects[cardNo].mobile_img}"
      alt="Website Preview"
    />
  </div>
  <div class="popup_details">
  <p>${projects[cardNo].description}</p>
    <div>
      <ul class="prog_lang">${tagsList}</ul>
      <hr>
      <div class="popup_btn">
        <button id="live-btn" type="button">See Live <img src="./images/live-icon.svg" alt=""></button>
        <button id="source-btn" type="button">See source <img src="./images/source-icon.svg" alt=""></button>
      </div>
    </div>
  </div>
</div>
</div>`;
  works.appendChild(popupWindow);
  const liveBtn = document.getElementById('live-btn');
  const sourceBtn = document.getElementById('source-btn');
  liveBtn.addEventListener('click', () => {
    window.location.href = projects[cardNo].live_link;
  });
  sourceBtn.addEventListener('click', () => {
    window.location.href = projects[cardNo].source_link;
  });
}

for (let i = 0; i < projects.length; i += 1) {
  const seeProject = document.getElementById(`see_project_${i + 1}`);
  seeProject.addEventListener('click', () => {
    createPopup(i);
    const xPopup = document.getElementById('x-popup');
    const popupContainer = document.getElementById('popup_container');
    xPopup.addEventListener('click', () => {
      popupContainer.remove();
    });
  });
}

function validateEmail(input, invalidMsg) {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    input.value = '';
    const msg = input.parentNode.querySelector('small');
    msg.innerText = invalidMsg;
    return false;
  }
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});

// Form Input Local storage
function populateStorage() {
  const userInfoObj = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  const json = JSON.stringify(userInfoObj);
  localStorage.setItem('formData', json);
}

function fillForm() {
  const json = localStorage.getItem('formData');
  const userInfoObj = JSON.parse(json);
  document.getElementById('name').value = userInfoObj.name;
  document.getElementById('email').value = userInfoObj.email;
  document.getElementById('message').value = userInfoObj.message;
}

form.addEventListener('submit', () => {
  populateStorage();
});

if (localStorage.getItem('formData')) {
  fillForm();
}

for (let i = 0; i < 3; i += 1) {
  formField[i].addEventListener('change', () => {
    populateStorage();
  });
}

const aboutmeList = document.querySelectorAll(".aboutme-list");
const footerList = document.querySelector(".footer_list");
footerList.addEventListener('click', (e) => {
  if (e.target.parentNode.id === 'langs' || e.target.id === 'langs') {
    aboutmeList[0].style.display = 'flex';
    aboutmeList[1].style.display = 'none';
    aboutmeList[2].style.display = 'none';
  } else if (e.target.parentNode.id === 'frams' || e.target.id === 'frams') {
    aboutmeList[1].style.display = 'flex';
    aboutmeList[0].style.display = 'none';
    aboutmeList[2].style.display = 'none';
  }else if (e.target.parentNode.id === 'skills' || e.target.id === 'skills') {
    aboutmeList[2].style.display = 'flex';
    aboutmeList[1].style.display = 'none';
    aboutmeList[0].style.display = 'none';
  }
});
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}