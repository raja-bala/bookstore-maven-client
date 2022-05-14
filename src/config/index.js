const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set(
  'bookstore-maven-client.herokuapp.com',
  'https://book-store-maven.herokuapp.com/'
);

export default environmentUrls.get(window.location.hostname);