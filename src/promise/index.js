
const somethingWillHappen = (API) => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
            return
        }
        reject('Whooops')
    })
}
somethingWillHappen()
    .then(r => console.log(r))
    .catch(e => console.log(e))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Resolve promise!')
            }, 2000)
            return
        }
        const err = new Error('Whoops!')
        reject(err)
    })
}

somethingWillHappen2()
    .then(r => console.log(r))
    .catch(e => console.log(e))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(r => {
        const [r1, r2] = r
        console.log('1',r1)
        console.log('2',r2)
    })
    .catch(e => console.log(e))