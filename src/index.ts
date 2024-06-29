import DOMPurify from "dompurify"

interface comicsResponse {
    img: string;
    alt: string;
    title: string;
    year: number;
    month: number;
    day: number;
}

const getID = async () => {
    const params: URLSearchParams = new URLSearchParams({email: 'i.ershov@innopolis.university'})
    const url: string = `https://fwd.innopolis.university/api/hw2?${params}`
    const response: Response = await fetch(url)
    const data: number = await response.json()
    return data;
}

const getComicsData = async (id: number) => {
    const params = new URLSearchParams({id: String(id)})
    const url = `https://fwd.innopolis.university/api/comic?${params}`
    const response = await fetch(url)
    const data = response.json()
    return data;
}

const secureData = (data: string) => {
    return DOMPurify.sanitize(data, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: []
    })
}

const changeData = async (data: comicsResponse) => {
    const title: HTMLParagraphElement = document.getElementById("comic-title") as HTMLParagraphElement
    const img: HTMLImageElement = document.getElementById("comic-img") as HTMLImageElement
    const date: HTMLParagraphElement = document.getElementById("comic-date") as HTMLParagraphElement
    img.src = data.img
    img.alt = secureData(data.alt)
    title.textContent = secureData(data.title)
    date.textContent = new Date(Number(secureData(String(data.year))), Number(secureData(String(data.month))) - 1, Number(secureData(String(data.day)))).toLocaleDateString()

}

const id: number = await getID();

const data = await getComicsData(id);

changeData(data);
