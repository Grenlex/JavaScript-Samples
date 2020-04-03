window.onload = function() {

document.getElementById('topmenus').innerHTML = document.getElementById('all_in_all').innerHTML;

window.grenlex_study = Math.round (document.getElementById('grenlex_study').getBoundingClientRect().top + pageYOffset);
window.grenlex_software = Math.round (document.getElementById('grenlex_software').getBoundingClientRect().top + pageYOffset);
window.grenlex_person = Math.round (document.getElementById('grenlex_person').getBoundingClientRect().top + pageYOffset);
window.grenlex_music = Math.round (document.getElementById('grenlex_music').getBoundingClientRect().top + pageYOffset);
window.hide_menu;
document.getElementById('search').style.display = "none";

}


document.onscroll = function() {

document.getElementById('scroll').innerHTML = window.pageYOffset || document.documentElement.scrollTop;

if (pageYOffset <= grenlex_study) {

let a = Math.round (40 + 30*(pageYOffset/grenlex_study)); //70
let b = Math.round (222 - 74*(pageYOffset/grenlex_study)); //148
let c = Math.round (139 + 116*(pageYOffset/grenlex_study)); //255

document.getElementById('all_in_all').style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
document.getElementById('topmenu').style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
document.getElementsByClassName('border')[5].style.width = 0.8 * (pageYOffset/grenlex_study) * document.body.clientWidth;

}

if (pageYOffset <= grenlex_software && pageYOffset > grenlex_study) {

a = Math.round (70 - 24*((pageYOffset-grenlex_study)/(grenlex_software-grenlex_study))); //46
b = Math.round (148 - 102*((pageYOffset-grenlex_study)/(grenlex_software-grenlex_study))); //46
c = Math.round (255 - 209*((pageYOffset-grenlex_study)/(grenlex_software-grenlex_study))); //46

document.getElementById('all_in_all').style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
document.getElementById('topmenu').style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
document.getElementsByClassName('border')[6].style.width = 0.8 * ((pageYOffset - grenlex_study)/(grenlex_software - grenlex_study)) * document.body.clientWidth;

}

if (pageYOffset <= grenlex_person && pageYOffset > grenlex_software) {

a = Math.round (46 + 190*((pageYOffset-grenlex_software)/(grenlex_person-grenlex_software))); //236
b = Math.round (46 + 108*((pageYOffset-grenlex_software)/(grenlex_person-grenlex_software))); //154
c = Math.round (46 - 22*((pageYOffset-grenlex_software)/(grenlex_person-grenlex_software))); //24

document.getElementById('all_in_all').style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
document.getElementById('topmenu').style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
document.getElementsByClassName('border')[7].style.width = 0.8 * ((pageYOffset - grenlex_software)/(grenlex_person - grenlex_software)) * document.body.clientWidth;

}

if (pageYOffset <= grenlex_music && pageYOffset > grenlex_person) {

a = Math.round (236 + 19*((pageYOffset-grenlex_person)/(grenlex_music-grenlex_person))); //255
b = Math.round (154 - 154*((pageYOffset-grenlex_person)/(grenlex_music-grenlex_person))); //0
c = Math.round (24 + 231*((pageYOffset-grenlex_person)/(grenlex_music-grenlex_person))); //255

document.getElementById('all_in_all').style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
document.getElementById('topmenu').style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
document.getElementsByClassName('border')[8].style.width = 0.8 * ((pageYOffset - grenlex_person)/(grenlex_music - grenlex_person)) * document.body.clientWidth;

}


}


window.addEventListener('scroll', function() {//function for scrolling with blur in topmenu
  document.querySelector('#topmenus').style.transform = "translateY(" + -pageYOffset + "px)";
});
