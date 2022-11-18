let tao = document.getElementById('TaoMc')
let click = 0

function Click(){
  click++
  console.log(click)
}

function Loaded(){
  click = localStorage.getItem('Clicks')
}

function Reset(){
  localStorage.setItem('Clicks', click)
}

window.on = Reset
window.onload = Loaded

tao.onclick = Click