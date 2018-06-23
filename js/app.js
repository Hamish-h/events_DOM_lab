document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const category = form.category.value;

    const text = `${title}, ${author}, ${category}`;
    const container = document.querySelector('#reading-list');

    createText(text, container);

    this.reset();
  };

  const createText = (text, container) => {
    const book = document.createTextNode(text);
    console.log(`${book}`);
    console.log(`${container}`);
    container.appendChild(book);
  };

  form.addEventListener('submit', handleFormSubmit);
})
