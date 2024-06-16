const writeData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,2,3], 'write succesfully!')
    }, 2000)
    
})



writeData.then((result, messaage) => {
    console.log(messaage);
    console.log(result);
})