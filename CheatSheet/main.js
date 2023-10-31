// when user will click on html it will redirect to HTML cheatsheet Page
let html = document.getElementById("html")

html.addEventListener('click', ()=>{
    window.open(html.html,'_blank')
})

// when user will click on Javascript it will redirect to JAVASCRIPT cheatsheet Page

let js = document.getElementById("javascript")
js.addEventListener('click', ()=>{
    window.open(javascript.html, '_blank')
})

// when user will click on css it will redirect to CSS cheatsheet Page

let css = document.getElementById("css")
css.addEventListener('click', ()=>{
    window.open(css.html, '_blank')
})