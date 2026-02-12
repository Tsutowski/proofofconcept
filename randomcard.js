const url = "https://api.scryfall.com/cards/random&format=image";

async function get_random_card() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Response Status: ${response.status}');
        }
        const result = await response.json;
        console.log(result);

    } catch (error) {
        console.error(error.messsage);
    }

}