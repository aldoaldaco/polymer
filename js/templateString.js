class MyClass extends HTMLElement {

}

const func = () => {
  const tab = document.createElement('div');
  console.log(tab instanceof HTMLElement);
  tab.classList.add('tab');
  document.getElementById('navigator').appendChild(tab);

};

const button = document.getElementById("myButton");

button.addEventListener('click', function() {
  this.dispatchEvent(new CustomEvent('my-event', {
    bubbles: true,
    composed: true,
    detail: 'es mi evento'
  }));
});
document.addEventListener('my-event', (event) => {
  console.log('detail: ', event.target);
  func();
});


