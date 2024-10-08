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
    var songButtons = document.getElementsByClassName('songButton')
    
    if(checkBox.checked == true){        
        spanish_names.forEach((name, index) => {
            songButtons[index].textContent = name;            
        })    
    }else{
        english_names.forEach((name, index) => {
            songButtons[index].textContent = name;            
        })        
    };
}
