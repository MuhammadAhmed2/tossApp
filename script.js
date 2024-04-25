var txt = document.getElementById('result');
var coinImage = document.getElementById('coin');

function comp(prop) {
    let comp  = Math.ceil(Math.random()*2)
    if (prop == comp) {
        console.log('You Won');
        txt.innerHTML = 'You Won'
    }if (prop != comp) {
        console.log('You Lose');
        txt.innerHTML = 'You Lose'
    };

    if (comp === 1) {
        coinImage.src = 'https://en.numista.com/catalogue/photos/pakistan/434-original.jpg';
    } else if (comp === 2) {
        coinImage.src = 'https://en.numista.com/catalogue/photos/pakistan/433-original.jpg';
    };
      
}
  

  