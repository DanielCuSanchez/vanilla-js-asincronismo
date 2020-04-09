const fetchData = require('../../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'


fetchData(API)
    .then(r => {
        console.log(r.info.count)
        return fetchData(`${API}${r.results[0].id}`)
    })
    .then(r => {
        console.log(r.name)
        return fetchData(`${r.origin.url}`)
    })
    .then(r => {
        console.log(r.dimension)
    })
    .catch(e => console.log(e))