//-- SEARCH FIELD --
//start search field open / close animation
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');

icon.onclick = function() {
    search.classList.toggle('active');
}

//-- FILTER --
const filter = document.querySelector('.filter');
if(filter) {
    const btns = filter.querySelectorAll('.btn'); //all filter buttons

    //selection of the button for the filter
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() { //one button is clicked
            filter.getElementsByClassName("activated")[0].classList.remove("activated"); //remove old button selection
            this.classList.add('activated'); //set new button selection

            filterSelection();
        });
    }
}

//filter
function filterSelection() {
    const allItems = document.getElementsByClassName('item'); //all items that will be filtered
    const input = document.getElementById('mySearch').value.toLowerCase(); //search input
    var itemType = 'all';

    if(filter) {
        itemType = filter.querySelector(".activated").id; //id of the selected filter button is the search criteria
    }

    if(itemType == 'all') { //all items are visible
        for (i = 0; i < allItems.length; i++) {
            if(input == '' || allItems[i].querySelector('h1, summary').innerHTML.toLowerCase().includes(input)) { //check for search field input criteria
                allItems[i].style.display = 'block'; //show selected item
            } else {
                allItems[i].style.display = 'none'; //remove none selected item
            }
        }
    } else { //only software or game items are visible -> the selected filter and the search field input are used as criteria 
        for (i = 0; i < allItems.length; i++) {
            if(allItems[i].classList.contains(itemType) && //item contains the filter criteria
                (input == '' || allItems[i].querySelector('h1, summary').innerHTML.toLowerCase().includes(input))) { //check for search field input criteria
                
                allItems[i].style.display = 'block'; //show selected item
            } else {
                allItems[i].style.display = 'none'; //remove none selected item
            }
        }
    }
}