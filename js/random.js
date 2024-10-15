const minVal = 0;
const maxVal = triumph_links.length - 1;
let randnum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
        
const anchors = document.getElementsByClassName('songHyperlink');            
var checkBox = document.getElementById('langCheckbox');

links_list = english_links;

links_list.forEach((songList, index) => {
    anchors[index].href = 'https://www.youtube.com/watch?v=' + songList[randnum];            
});

function setLinks(randnum){
    links_list.forEach((songList, index) => {
        anchors[index].href = 'https://www.youtube.com/watch?v=' + songList[randnum];            
    });
}

function setSongsLanguage(randum){
    if(checkBox.checked == true){        
        links_list = spanish_links;
    }else{
        links_list = english_links;
    };

    setLinks(randum);
}

/*

function refreshSongs() {
    randnum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;

    setSongsLanguage();
    setLinks();
}

/**/