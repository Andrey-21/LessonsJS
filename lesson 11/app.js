class CustomHTTP {
    get(url, callback) {
      const xhr =  new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();
      xhr.addEventListener('load', () => callback(xhr.responseText))
    }
}

const http = new CustomHTTP();

http.get('https://jsonplaceholder.typicode.com/albums', (setAlbum) => {
  const parsedPost = JSON.parse(setAlbum);
  const postForRendering = new Album();
  parsedPost.forEach( (album) => {
    postForRendering.render(album);
  });
});

class Album {
  constructor() {
    this.wrapper = document.querySelector('#albums');
  }

  handleClick(event) {
    const albumId = event.target.dataset.id;
    http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId, (res) => {

      const result = JSON.parse(res);
      const article = document.createElement('article');
      const img = document.createElement('img');
      article.setAttribute('class', 'photos');
      article.append(img);
      const addArticle = document.querySelector('#albums').append(article);

      result.forEach( (photo) => {
        img.setAttribute('src', photo.url);
      });
      console.log(article);
    });
  }
  render(album) {
    const div = document.createElement('div');
    div.textContent = album.title;
    div.setAttribute('data-id', album.id);
    div.setAttribute('class', 'album');
    div.addEventListener('click', this.handleClick);
    this.wrapper.append(div);
  }
}

