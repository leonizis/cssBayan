const time = document.querySelector('.time');
const data = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const nam = document.querySelector('.name');

const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

const wind = document.querySelector('.wind');
const humidity =document.querySelector('.humidity');

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const nameInput = document.querySelector('.link-name-input');
const urlInput = document.querySelector('.link-url-input');
const radioRus = document.getElementById('rus');
const radioEng = document.getElementById('eng');

let fon;

function showTimeData(){
    // присваиваем переменной дату и время
    const date = new Date();
    // вычленяем время
    const currentTime = date.toLocaleTimeString();
    
    if (radioEng.checked){
      // выводим время
    time.textContent = currentTime;
    // создаем переменную, которая включает в себе опции для вывода дня недели, и даты
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    // присваиваем дату переменной
    const currentDate = date.toLocaleDateString('en-En', options);
    // выводим дату и день недели
    data.textContent = currentDate;
    
    // приветствие в зависимомти от времени суток
    const hours = date.getHours(); // проверяем сколько теперь часов
    
    if(hours < 6){
        greeting.textContent = 'Good night';
    }
    if(hours > 5 && hours < 12){
        greeting.textContent = 'Good morning';
    }
    if(hours > 11 && hours < 18){
        greeting.textContent = 'Good afternoon';
    }
    if(hours > 17 && hours < 24){
        greeting.textContent = 'Good evening';
    }
      
    }else{
      // выводим время
    time.textContent = currentTime;
    // создаем переменную, которая включает в себе опции для вывода дня недели, и даты
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    // присваиваем дату переменной
    const currentDate = date.toLocaleDateString('ru-Ru', options);
    // выводим дату и день недели
    data.textContent = currentDate;
    
    // приветствие в зависимомти от времени суток
    const hours = date.getHours(); // проверяем сколько теперь часов
    
    if(hours < 6){
        greeting.textContent = 'Спокойной ночи';
    }
    if(hours > 5 && hours < 12){
        greeting.textContent = 'Доброе утро';
    }
    if(hours > 11 && hours < 18){
        greeting.textContent = 'Добрый день';
    }
    if(hours > 17 && hours < 24){
        greeting.textContent = 'Добрый вечер';
    }
    }; 




    
    

    
}
//запускаем функцию времени, даты и приветствия
showTimeData();
// Сохранение введенного имени
// проверяем введено ли имя
if (localStorage.getItem('name')) {
    nam.value = localStorage.getItem('name');
}
if(localStorage.getItem('city')){
  city.value = localStorage.getItem('city');

}
  //сохрание введенной информации
nam.addEventListener('input', () => {
    localStorage.setItem('name', nam.value);
});
city.addEventListener('input', () => {
  localStorage.setItem('city', city.value);
});




  //фон
// находим элемент бади
const body = document.body;



//функция выпадения случайного числа
function rand(min,max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


const urlFons = {
    morning: 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/',
    day: 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/',
    evening: 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/',
    night: 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/'
};
// функция смены фона
let randomNumber;
function changeBackgroundImage() {
    const currentHour = new Date().getHours();
    let imageUrl;

    if (currentHour >= 6 && currentHour < 12) {
      imageUrl = urlFons.morning;
    } else if (currentHour >= 12 && currentHour < 18) {
      imageUrl = urlFons.day;
    } else if (currentHour >= 18 && currentHour < 24) {
      imageUrl = urlFons.evening;
    } else {
      imageUrl = urlFons.night;
    }

    // выбираем случайное изображение
    randomNumber = rand(1, 20);
    let imagePath;
    
    if(randomNumber < 10){
        imagePath = `${imageUrl}0${randomNumber}.jpg`;
    }else{
        imagePath = `${imageUrl}${randomNumber}.jpg`;
    }
    
  
    // присваиваем изображение в качестве фона страницы
    body.style.backgroundImage = `url("${imagePath}")`;
    
  }
  
  // вызов функции для смены фона
  changeBackgroundImage();

  // переключение фона при клике на стрелки
  function getSlideNext(){
    const currentHour = new Date().getHours();
    let imageUrl;

    if (currentHour >= 6 && currentHour < 12) {
      imageUrl = urlFons.morning;
    } else if (currentHour >= 12 && currentHour < 18) {
      imageUrl = urlFons.day;
    } else if (currentHour >= 18 && currentHour < 24) {
      imageUrl = urlFons.evening;
    } else {
      imageUrl = urlFons.night;
    }

    // выбираем 
    if(randomNumber > 19){
        randomNumber = 1;
    }else{
        randomNumber++;
    }
    let imagePath;
    
    if(randomNumber < 10){
        imagePath = `${imageUrl}0${randomNumber}.jpg`;
    }else{
        imagePath = `${imageUrl}${randomNumber}.jpg`;
    }
    
  
    // присваиваем изображение в качестве фона страницы
    function setBg() {  
        const img = new Image();
        img.src = imagePath;
        img.onload = () => {      
          body.style.backgroundImage = `url('${imagePath}')`;
        }; 
      }
    setBg();
    

  }
  slideNext.addEventListener('click', getSlideNext)

  function getSlidePrev(){
    const currentHour = new Date().getHours();
    let imageUrl;

    if (currentHour >= 6 && currentHour < 12) {
      imageUrl = urlFons.morning;
    } else if (currentHour >= 12 && currentHour < 18) {
      imageUrl = urlFons.day;
    } else if (currentHour >= 18 && currentHour < 24) {
      imageUrl = urlFons.evening;
    } else {
      imageUrl = urlFons.night;
    }


    if(randomNumber < 2){
        randomNumber = 20;
    }else{
        randomNumber--;
    }
    
    let imagePath;
    
    if(randomNumber < 10){
        imagePath = `${imageUrl}0${randomNumber}.jpg`;
    }else{
        imagePath = `${imageUrl}${randomNumber}.jpg`;
    }
    
  
    //присваиваем изображение в качестве фона страницы
    function setBg() {  
        const img = new Image();
        img.src = imagePath;
        img.onload = () => {      
          body.style.backgroundImage = `url('${imagePath}')`;
        }; 
      }
    setBg();

  }
slidePrev.addEventListener('click', getSlidePrev);

// погода
  
 
  async function getWeather() {
    let url;
    if (radioEng.checked){
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=6eb3a936a5f6c3a83f9f87ee75ed2f06&units=metric`;
    }else{
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=6eb3a936a5f6c3a83f9f87ee75ed2f06&units=metric`;
    }; 
  const res = await fetch(url);
  const data = await res.json(); 
  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  if (radioEng.checked){
    wind.textContent = `Wind speed ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity ${data.main.humidity}%`
  }else{
    wind.textContent = `Скорость ветра ${Math.round(data.wind.speed)} м/с`;
    humidity.textContent = `Влажность ${data.main.humidity}%`
  }; 
  
}
getWeather();
city.addEventListener('change', function(){
  getWeather();
})

// цитаты
async function getQuotes() {  
  let quotes;
  if (radioEng.checked){
    quotes = 'dataEng.json';
  }else{
    quotes = 'data.json';
  };
  const res = await fetch(quotes);
  const data = await res.json();
  const randText = rand(0, data.length-1);
  console.log(randText);
  quote.textContent =  data[randText].text;
  author.textContent = data[randText].author;
  console.log(data[0].text);
  
}
getQuotes();

changeQuote.addEventListener('click',getQuotes)







setInterval(showTimeData, 1000);
setInterval(changeBackgroundImage, 100000)


  