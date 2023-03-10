
let cards = document.querySelectorAll('.box');

function liveSearch() {
    let search_query = document.getElementById('searchBar').value;

    for( var i = 0; i < cards.length; i++ ){
        if(cards[i].textContent.toLowerCase()
            .includes(search_query.toLowerCase())) {
                cards[i].classList.remove('is-hidden');
        }else {
            cards[i].classList.add('is-hidden')
        }
    }
}
let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('searchBar');

searchInput,addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});
