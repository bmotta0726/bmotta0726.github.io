const english_names = [
    'EUPHORIA',
    'NOSTALGIA',
    'SADNESS',
    'JOY',
    'DREAMINESS',
    'CALM',
    'ANXIETY',
    'TRIUMPH',
    'MINDFULNESS'
]

const spanish_names = [
    'EUFORIA',
    'NOSTALGIA',
    'TRISTEZA',
    'ALEGRÍA',
    'ENSUEÑO',
    'CALMA',
    'ANSIEDAD',
    'TRIUNFO',
    'CONCIENCIA'
]

function switchLang(){

    var checkBox = document.getElementById('langCheckbox');
    //var myid = document.getElementById('euphoria');
    var songButtons = document.getElementsByClassName('songButton');

    var langTag = document.getElementById('lang-tag');
    
    if(checkBox.checked == true){        
        langTag.textContent = 'ESP';
        spanish_names.forEach((name, index) => {
            songButtons[index].textContent = name;            
        })    
    }else{
        langTag.textContent = 'ENG';
        english_names.forEach((name, index) => {
            songButtons[index].textContent = name;            
        })        
    };
}
