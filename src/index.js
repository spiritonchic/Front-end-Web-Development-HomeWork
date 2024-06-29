const getID = async () => {
    const params = new URLSearchParams({email: 'i.ershov@innopolis.university'})
    const url = `https://fwd.innopolis.university/api/hw2?${params}`
    const response = await fetch(url)
    const data = response.json()
    return data;
}

const getComicsData = async id => {
    const params = new URLSearchParams({id: id})
    const url = `https://fwd.innopolis.university/api/comic?${params}`
    const response = await fetch(url)
    const data = response.json()
    return data;
}

const secureData = data => {
    return DOMPurify.sanitize(data, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: []
    })
}

const changeData = async data => {
    const title = document.getElementById("comic-title")
    const img = document.getElementById("comic-img")
    const date = document.getElementById("comic-date")
    img.src = secureData(data.img)
    img.alt = secureData(data.alt)
    title.textContent = secureData(data.title)
    date.textContent = new Date(secureData(data.year), secureData(data.month) - 1, secureData(data.day)).toLocaleDateString()

}

const id = await getID()

const data = await getComicsData(id)

changeData(data)