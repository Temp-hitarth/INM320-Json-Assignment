//async/awaitnav_holder
async function load() {
    try{
        const x = await fetch('/assets/data/content.json');
        // console.log(x);
        const foobar = await x.json();

        // <li><a href="">xyz</a></li>
        // get .abc ul in a variable
        const card_holder1 = document.querySelector('.abc ul');
        // loop through json array for card1
        console.log(foobar.card1);
        foobar.card1.forEach(menu_item => {
            console.log(menu_item);
            
            // create a new li
            var list_item = document.createElement('li');

            // add a link to the new li
            list_item.innerHTML = `<li>${menu_item.text}</li>`;

            // add the new list item to the card '.abc ul'
            card_holder1.appendChild(list_item);
        });

        // <li><a href="">xyz</a></li>
        // get .abc ul in a variable
        const card_holder2 = document.querySelector('.xyz ul');
        // loop through json array for card2
        console.log(foobar.card2);
        foobar.card2.forEach(menu_item => {
            console.log(menu_item);
            
            // create a new li
            var list_item = document.createElement('li');

            // add a link to the new li
            list_item.innerHTML = `<li>${menu_item.text}</li>`;

            // add the new list item to the card '.xyz ul'
            card_holder2.appendChild(list_item);
        });
        
    } catch(error) {
        console.warn(`😂 Nope: ${error}`);
    }
}

load();