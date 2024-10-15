function refreshSongs(previousRand) {
    do {
        newRand = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;    
    } while (newRand == previousRand);
    

    setSongsLanguage(newRand);
    setLinks(newRand);
}