// Icon Clicking / Tapping for "Light Mode".
let clicks = 0
let requirement = 50

// Element stuff.
let tao = document.getElementById('TaoMc')
let html = document.querySelector('html')
let select = document.querySelector('select')
let navbar = document.getElementById('navbar')

// Light mode stuff.
const white = "#FFFFFF"
const vary_white = "#F0F0F0"

function Click(){
  clicks += 1
}

function ClickCheck(){
  if(clicks == requirement){
    console.log('User has unlocked Light mode.')
    select.innerHTML += '<option>Light Mode</option>'
  }
  Click()
}

function SelectionBG(){
  let Value = select.value

  if(Value == 'Light Mode'){
    html.style.color = 'black'
    html.style.backgroundColor = white
    navbar.style.backgroundColor = vary_white
  } else if(Value == 'Dark Mode'){
    html.style.color = white
    html.style.backgroundColor = 'black'
    navbar.style.backgroundColor = '#141414'
  }
  console.log(Value)
}

select.onchange = SelectionBG
tao.onclick = ClickCheck