const url1 = "https://api.scryfall.com/cards/random";

url2 = 'https://api.justtcg.com/functions/v1/cards?tcgplayerId=162145';

const TCGAPI_KEY = 'tcg_a2f7d4971ff2448b87a5dd24d8aa064e'
fetch_image_data();


async function fetch_image_data() {
    try {
        const response = await fetch(url1);
        if (!response.ok) {
            throw new Error("no data found");

        }
        const data = await response.json();
        const CardPic = data.image_uris.normal;
        tid = data.tcgplayer_id;
        const img = document.getElementById("cardImage");

        img.src = CardPic;
        img.style.display = "block";

    } catch (error) {
        console.error(error);
    }


    url2 = url2.replace("162145", tid);

    fetch(url2, {
            method: 'GET',
            headers: {
                'x-api-key': TCGAPI_KEY
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(error);
            }
            return response.json();

        })
        .then(data => {
            console.log('Card Price Data:', data);
        })
        .catch(error => {
            console.error('Error fetching price:', error);
        });


}