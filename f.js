let button = document.querySelector('#but')

let mode = "light";
button.addEventListener('click', () => {
    if(mode === "light") {
        console.log('Dark')
        mode = "Dark";
        document.getElementsByTagName('button').innerText = 'light'

        document.querySelector('body').style.backgroundColor = 'black';
    }else {
        console.log('Light')
        mode = "light";
        document.querySelector('body').style.backgroundColor = 'white';
        document.getElementsByTagName('button').innerText = 'Dark'
    }
})

setInterval(() => {
  let d = new Date();
  let htime = d.getHours();
  let mtime = d.getMinutes();
  let stime = d.getSeconds();

  hRotation = 30*htime + mtime/2;
  mRotation = 6*mtime;
  sRotation = 6*stime;

  const hour = document.getElementById("hour").style.transform = `rotate(${hRotation}deg)`
  const minutes = document.getElementById("minu").style.transform = `rotate(${mRotation}deg)`
  const seconds = document.getElementById("sec").style.transform = `rotate(${sRotation}deg)`

}, 1000)