let h1 = document.querySelector('h1');
h1.innerText = 'HACKED!'

let links = document.querySelectorAll('a');

for (let i=0; i < links.length; i++) {
    links[i].href = `https://thebadguys.com`
}

let newImage = document.createElement('img')
newImage.src = `https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png`
document.body.prepend(newImage)

let main = document.querySelector('main')
let pChildren = document.querySelectorAll('main > p')
for (i =0; i < pChildren.length; i++){
    main.removeChild(pChildren[i])
}

let newP = document.createElement('p')
newP.innerText = "Your account has been compromised."
document.body.append(newP)

let compromisedDays = document.querySelector('p span')
compromisedDays.innerText = 0