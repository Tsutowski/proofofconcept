const url1 = "https://api.scryfall.com/cards/random";


fetchdata();

async function fetchdata() {
    try {
        const response = await fetch(url1);
        if (!response.ok) {
            throw new Error("no data found");

        }
        const data = await response.json();
        const CardPic = data.image_uris.normal;
        const img = document.getElementById("cardImage");

        img.src = CardPic;
        img.style.display = "block";

    } catch (error) {
        console.error(error);
    }

}