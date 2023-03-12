// Находим нужные элементы
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const settingsSaveBtn = document.getElementById('save-settings-btn');
const playBlock = document.querySelector('.player');
const weatherBlock = document.querySelector('.weather');
const mainBlock = document.querySelector('.main');
const footerBlock = document.querySelector('.footer');
const settingsList = document.getElementById("settings-list");
const checkboxes = settingsList.querySelectorAll("input[type='checkbox']");

const linkText = document.querySelector('.link-text');
const addLink = document.querySelector('.add-link');
const settingText = document.querySelector('.setting-text');



const label1 = document.getElementsByName('setting1')[0].parentNode;
const label2 = document.getElementsByName('setting2')[0].parentNode;
const label3 = document.getElementsByName('setting3')[0].parentNode;
const label4 = document.getElementsByName('setting4')[0].parentNode;

const textRu1 = 'Отображать аудио-плеер';
const textRu2 = 'Отображать погоду';
const textRu3 = 'Отображать часы с приветствием';
const textRu4 = 'Отображать цитаты';

const textEn1 = 'Display audio player';
const textEn2 = 'Display weather';
const textEn3 = 'Display clock with greeting';
const textEn4 = 'Show quotes';






function blockTransfer(){
  if (radioEng.checked){
    linksBtn.textContent = 'Links';
    settingsBtn.textContent = 'Settings';
    linkText.textContent = 'Links';
    addLinkBtn.textContent = 'Add link';
    addLink.textContent = 'Add link';
    nameInput.textContent = 'Enter your name:';
    urlInput.textContent = 'Enter link:'
    submitLinkBtn.textContent = 'Add';
    settingText.textContent = 'Settings';
    settingsSaveBtn.textContent = 'Save Changes'
    label1.querySelector('span').innerHTML = textEn1;
    label2.querySelector('span').innerHTML = textEn2;
    label3.querySelector('span').innerHTML = textEn3;
    label4.querySelector('span').innerHTML = textEn4;
    
  
    
  } else {
    linksBtn.textContent = 'Ссылки';
    settingsBtn.textContent = 'Настройки';
    linkText.textContent = 'ССылки';
    addLinkBtn.textContent = 'Добавить ссылку';
    addLink.textContent = 'Добавить ссылку';
    nameInput.textContent = 'Введите имя:';
    urlInput.textContent = 'Введите ссылку:';
    submitLinkBtn.textContent = 'Добавить';
    settingText.textContent = 'Настройки';
    settingsSaveBtn.textContent = 'Сохранить изменения'
    label1.querySelector('span').innerHTML = textRu1;
    label2.querySelector('span').innerHTML = textRu2;
    label3.querySelector('span').innerHTML = textRu3;
    label4.querySelector('span').innerHTML = textRu4;

    
   
    
    
  }
}
//  Отображаем модальное окно с настройками
settingsBtn.onclick = function(){
    // отображаем модальное окно
    settingsModal.style.display = 'block';
  
    // восстанавливаем состояние чекбоксов из localStorage
    if(localStorage.getItem("showRadioEng") === "true") {
      radioEng.checked = true;
    } else {
      radioRus.checked = true;
    } 
    if (localStorage.getItem("showPlayBlock") === "true") {
      checkboxes[0].checked = true;
      playBlock.style.visibility = 'visible';
    } else {
      checkboxes[0].checked = false;
      playBlock.style.visibility = 'hidden';
    }
    if (localStorage.getItem("showWeatherBlock") === "true") {
      checkboxes[1].checked = true;
      weatherBlock.style.visibility = 'visible';
    } else {
      checkboxes[1].checked = false;
      weatherBlock.style.visibility = 'hidden';
    }
    if (localStorage.getItem("showMainBlock") === "true") {
      checkboxes[2].checked = true;
      mainBlock.style.visibility = 'visible';
    } else {
      checkboxes[2].checked = false;
      mainBlock.style.visibility = 'hidden';
    }
    if (localStorage.getItem("showFooterBlock") === "true") {
      checkboxes[3].checked = true;
      footerBlock.style.visibility = 'visible';
    } else {
      checkboxes[3].checked = false;
      footerBlock.style.visibility = 'hidden';
    }
  }

  
  // Сохраняем изменения при нажатии на кнопку "Сохранить настройки"
  settingsSaveBtn.addEventListener('click', function(){
    if (radioEng.checked){
      localStorage.setItem("showRadioEng", "true");
    } else {
      localStorage.setItem("showRadioEng", "false");
    }
    if (checkboxes[0].checked) {
      playBlock.style.visibility = 'visible';
      localStorage.setItem("showPlayBlock", "true");
    } else {
      playBlock.style.visibility = 'hidden';
      localStorage.setItem("showPlayBlock", "false");
    }
    if (checkboxes[1].checked) {
      weatherBlock.style.visibility = 'visible';
      localStorage.setItem("showWeatherBlock", "true");
    } else {
      weatherBlock.style.visibility = 'hidden';
      localStorage.setItem("showWeatherBlock", "false");
    }
    if (checkboxes[2].checked) {
      mainBlock.style.visibility = 'visible';
      localStorage.setItem("showMainBlock", "true");
    } else {
      mainBlock.style.visibility = 'hidden';
      localStorage.setItem("showMainBlock", "false");
    }
    if (checkboxes[3].checked) {
      footerBlock.style.visibility = 'visible';
      localStorage.setItem("showFooterBlock", "true");
    } else {
      footerBlock.style.visibility = 'hidden';
      localStorage.setItem("showFooterBlock", "false");
    }
    checkboxes[0].onclick = function() {
      if (this.checked) {
        localStorage.setItem("showPlayBlock", "true");
        playBlock.classList.remove('hidden');
      } else {
        localStorage.setItem("showPlayBlock", "false");
        playBlock.classList.add('hidden');
      }
    }
    

    blockTransfer()
    showTimeData();
    getWeather();
    getQuotes();
})
getQuotes();
// сохранение при перезагрузке
function saveBrowser(){
  if(localStorage.getItem("showRadioEng") === "true") {
    radioEng.checked = true;
  } else {
    radioRus.checked = true;
  } 
    if (localStorage.getItem("showPlayBlock") === "true") {
        checkboxes[0].checked = true;
        playBlock.style.visibility = 'visible';
      } else {
        checkboxes[0].checked = false;
        playBlock.style.visibility = 'hidden';
      }
      if (localStorage.getItem("showWeatherBlock") === "true") {
        checkboxes[1].checked = true;
        weatherBlock.style.visibility = 'visible';
      } else {
        checkboxes[1].checked = false;
        weatherBlock.style.visibility = 'hidden';
      }
      if (localStorage.getItem("showMainBlock") === "true") {
        checkboxes[2].checked = true;
        mainBlock.style.visibility = 'visible';
      } else {
        checkboxes[2].checked = false;
        mainBlock.style.visibility = 'hidden';
      }
      if (localStorage.getItem("showFooterBlock") === "true") {
        checkboxes[3].checked = true;
        footerBlock.style.visibility = 'visible';
      } else {
        checkboxes[3].checked = false;
        footerBlock.style.visibility = 'hidden';
      }
      blockTransfer()
      showTimeData();
      getQuotes();
      getWeather();

    }
    saveBrowser();
    // Закрываем модальное окно по клику на "закрыть"
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
      linksModal.style.display = 'none';
      addLinkModal.style.display = 'none';
      settingsModal.style.display = 'none'
    }
  }


 


