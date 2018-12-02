let paramsJson = [
    {
        "imageId" : 1,
        "url": null
    },
    {
        "imageId" : 2,
        "url": null
    }
];

function getData(id){
    return new Promise((resolve,reject) => {
        console.log('id: '+id);

        setTimeout((id) => {
            console.log('setTimeout');
            console.log(id);
            return resolve(2);
        },id*200)
    })
}

const promisees = [2,3,4,5].map((id) => {
    console.log(id);
    return getData(id);
})

Promise.all(promisees).then(function(posts){
    console.log('posts');
    console.log(posts);
})

