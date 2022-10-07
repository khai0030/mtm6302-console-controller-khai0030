
function setTitle(userTitle) {
    const $title = document.getElementById('title');
    $title.textContent = userTitle;
}

setTitle('Console Controller')


function setDescription(userDescription) {
    const $description = document.getElementById('description');
    $description.textContent = userDescription;
}

setDescription('This is the console controller assignment')


function setBackgroundColor(userBackgroundColor) {
    const $backgroundcolor = document.getElementById('body');
    $backgroundcolor.style.backgroundColor = userBackgroundColor;
}

setBackgroundColor('beige')


function setFontColor(userFontColor){
    const $fontcolor = document.getElementById('body');
    $fontcolor.style.color = userFontColor;
}

setFontColor('black')



function setTheme(Theme){
let $theme=document.getElementById="body";
document.body.className=Theme;

}

setTheme('dark');