const url1 = "https://api.scryfall.com/cards/random";
const USER_AGENT = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:147.0) Gecko/20100101 Firefox/147.0';

fetch_image_data();


async function fetch_image_data() {
    try {
        const response = await fetch(url1, { headers: { 'User-Agent': USER_AGENT, 'Accept': '*\*' } });
        if (!response.ok) {
            throw new Error("no data found");

        }
        //console.log(response.json());

        const data = await response.json();
        const CardPic = data.image_uris.normal;
        if (data.foil == true) {
            cprice = data.prices.usd_foil;
        } else {
            cprice = data.prices.usd;
        }
        const price = cprice;
        const box = document.getElementById("pricefield");
        box.innerHTML = box.innerHTML.replace("CardPrice", price);

        const img = document.getElementById("cardImage");

        img.src = CardPic;
        img.style.display = "block";

    } catch (error) {
        console.error(error);
    }

}