const textInputEl = document.getElementById('text-input');
const translateBtnEl = document.getElementById('btn-translate');
const outputEl = document.getElementById('output');

//link of an api to translate tp swedish chef
const serverUrlLink = 'https://api.funtranslations.com/translate/chef.json';

const getServerUrl = function (text) {
  //This is basically getting request from server and passing ? with key and value parameters
  //   return `${serverUrlLink}?text= ${text}`;
  return serverUrlLink + '?' + 'text=' + text;
};

const errorHandling = function (error) {
  console.log(
    'Hey! Looks like the server i sdown at the moment. Please try again later',
    error
  );
};

const translator = function () {
  const inputText = textInputEl.value;
  console.log('clicked');

  //fetching the server with getserverurl function defined above
  fetch(getServerUrl(inputText))
    .then((Response) => Response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      outputEl.textContent = translatedText;
    })
    .catch(errorHandling);
};

translateBtnEl.addEventListener('click', translator);
