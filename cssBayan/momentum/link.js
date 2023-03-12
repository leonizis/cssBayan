// Находим нужные элементы в DOM
const linksBtn = document.getElementById('links-btn');
const linksModal = document.getElementById('links-modal');
const addLinkBtn = document.getElementById('add-link-btn');
const addLinkModal = document.getElementById('add-link-modal');
const linkList = document.getElementById('link-list');
const linkNameInput = document.getElementById('link-name-input');
const linkUrlInput = document.getElementById('link-url-input');
const submitLinkBtn = document.getElementById('submit-link-btn');
const closeBtns = document.getElementsByClassName('close');
const removeLinkBtns = document.getElementsByClassName('remove-link');
const linkName = document.querySelector('.link-name');

// Получаем ссылки из LocalStorage
let links = JSON.parse(localStorage.getItem('links')) || [];

// Отображаем модальное окно с ссылками
linksBtn.onclick = function() {

  // Очищаем список ссылок
  linkList.innerHTML = '';
  addLinkToModal('YouTube', 'https://www.youtube.com/', true);
  addLinkToModal('Google', 'https://www.google.com/');
  addLinkToModal('GitHub', 'https://github.com/');
 
  
  


  // Добавляем ссылки из LocalStorage
  links.forEach(function(link) {

    addLinkToModal(link.name, link.url);
  
  });
  

  // Отображаем модальное окно
  linksModal.style.display = 'block';
}

// Закрываем модальное окно по клику на "закрыть"
for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function() {
    linksModal.style.display = 'none';
    addLinkModal.style.display = 'none';
  }
}

// Отображаем модальное окно для добавления ссылки
addLinkBtn.onclick = function() {

  linksModal.style.display = 'none';
  addLinkModal.style.display = 'block';
}

// Добавляем новую ссылку по клику на "добавить"
submitLinkBtn.onclick = function() {
  // Получаем значения из полей ввода
  const name = linkNameInput.value;
  const url = linkUrlInput.value;

  // Проверяем, что поля не пустые
  if (name && url) {
    // Добавляем ссылку в модальное окно
    addLinkToModal(name, url);

    // Добавляем ссылку в LocalStorage
    links.push({ name: name, url: url });
    localStorage.setItem('links', JSON.stringify(links));

    // Очищаем поля ввода
    linkNameInput.value = '';
    linkUrlInput.value = '';

    // Закрываем модальное окно
    addLinkModal.style.display = 'none';
    linksModal.style.display = 'block';
  }
}

// Удаляем ссылку по клику на кнопку "удалить"
linkList.addEventListener('click', function(event) {
  const target = event.target;
  if (target.classList.contains('remove-link')) {
    const link = target.parentNode;
    const url = link.getAttribute('data-url');
    const index = links.findIndex(function(link) {
      return link.url === url;
    });
    if (index !== -1) {
      links.splice(index, 1);
      localStorage.setItem('links', JSON.stringify(links));
    }
    if (linkList.contains(link)) {
      linkList.removeChild(link);
    }
  }
});

// Функция для добавления новой ссылки в модальное окно
function addLinkToModal(name, url) {
  // Создаем элементы для ссылки
  const linkContainer = document.createElement('div');
  const linkName = document.createElement('span');
  const linkUrl = document.createElement('a');

  // Заполняем элементы данными
  linkName.innerText = name;
  linkUrl.href = url;
  linkUrl.innerText = url;

  // Добавляем классы и идентификаторы для стилизации и обработки событий
  linkContainer.classList.add('link-container');
  linkContainer.setAttribute('data-url', url);
  linkName.classList.add('link-name');
  linkUrl.classList.add('link-url');

  // Добавляем элементы в контейнер и контейнер в список ссылок
  linkContainer.appendChild(linkName);
  linkContainer.appendChild(linkUrl);
  linkList.appendChild(linkContainer);

  // Добавляем кнопку "удалить" только если количество уже добавленных ссылок меньше трех
  if (linkList.children.length > 3) {
    const removeLinkBtn = document.createElement('button');
    removeLinkBtn.innerText = 'Удалить';
    removeLinkBtn.classList.add('remove-link');
    linkContainer.appendChild(removeLinkBtn);
    removeLinkBtn.addEventListener('click', function(event) {
      const link = event.target.parentNode;
      const url = link.getAttribute('data-url');
      const index = links.findIndex(function(link) {
        return link.url === url;
      });
      if (index !== -1) {
        links.splice(index, 1);
        localStorage.setItem('links', JSON.stringify(links));
      }
      linkList.removeChild(link);
    });
  }

  linkName.addEventListener('click', function() {
    window.location.href = url;
  });
}
  
 
