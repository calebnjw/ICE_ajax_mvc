console.log('SCRIPT IS RUNNING');

const helloButton = document.getElementById('helloButton');

helloButton.addEventListener('click', async () => {
  console.log('BUTTON CLICKED');

  const items = await axios.get('/items');
  const itemsContainer = document.createElement('div');
  document.body.append(itemsContainer);

  items.data.forEach((item, index) => {
    const itemButton = document.createElement('button');
    itemsContainer.append(itemButton);
    itemButton.innerText = item.name;
    itemButton.addEventListener('click', () => { window.location.href = `/items/${index}`; });
  });
});
