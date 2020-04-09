const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('yeha!'), 3000)
            : reject(new Error('Whooops!'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log('1',something)
}

console.log('Before')
doSomething()
console.log('After')

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log('2',something)
    } catch (error) {
        console.log(error)
    }
}

console.log('Before')
anotherFunction()
console.log('After')