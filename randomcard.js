const url1 = "https://api.scryfall.com/cards/random";
const url2 = 'https://api.justtcg.com/v1/cards'
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
        const sid = data.id;
        const img = document.getElementById("cardImage");

        img.src = CardPic;
        img.style.display = "block";

    } catch (error) {
        console.error(error);
    }

}

async function fetch_price_data() {
    try {
        const response = await fetch(url2, { headers: { 'X-API-KEY': TCGAPI_KEY } });
        url2.searchParams.append('scryfallId', sid);
        if (!response.ok) {
            throw new Error("No data found");
        }
        const result = await response.json;
        const card = result.data;
    } catch (error) {
        console.error("error fetching price data");
    }




}