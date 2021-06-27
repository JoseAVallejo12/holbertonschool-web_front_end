function createElement(data) {
  let title = document.createElement('h1')
  let paragraph = document.createElement('p');
  title.innerText = data.title;
  paragraph.textContent = data.extract;
  document.body.append(title, paragraph);
}

function queryWikipedia(callback) {
  let http = new XMLHttpRequest();
  http.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow");
  http.onreadystatechange = function () {
    // In local files, status is 0 upon success in Mozilla Firefox
    if(http.readyState === XMLHttpRequest.DONE) {
      const status = http.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully
        const dataParse = JSON.parse(http.response)
        callback(dataParse.query.pages['21721040']);
      } else {
        // Oh no! There has been an error with the request!
      }
    }
  };
  http.send();
}

queryWikipedia(createElement);
