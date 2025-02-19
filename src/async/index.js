const funcAsync = () => {
    return new Promise((resolve, reject) => {
        true ? setTimeout(() => resolve('Async!!'), 2000) : reject(new Error('Error!'));
    });
}

const anotherFunc = async () => {
    const something = await funcAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before!');
anotherFunc();
console.log('After!');
