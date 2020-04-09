const fetchData = require('../../utils/fetchData')
let API = 'https://rickandmortyapi.com/api/character/'

const asyncFunction = async (api_url) => {
    try {
        let data = await fetchData(api_url)
        console.log(data.info.count)
        data = await fetchData(`${API}${data.results[0].id}`)
        console.log(data.name)
        data = await fetchData(data.origin.url)
        console.log(data.dimension)
    } catch (error) {
        console.log('Error---->', error)
    }
}


console.log('Before')
asyncFunction(API)
console.log('After')