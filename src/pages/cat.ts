async function getCatImage() {
	const res = await fetch("https://api.thecatapi.com/v1/images/search");
	const data = await res.json();
	return data[0].url;
}

export const setupCatFactButton = () => {
    const button = document.getElementById("cat-image-button");
    const image = document.getElementById("cat-image") as HTMLImageElement;

    if(button && image) {
        button.addEventListener("click", async () => {
            const url = await getCatImage();
            image.src = url;
        });
    }
}