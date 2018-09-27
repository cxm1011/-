const  axios = require('./node_modules/axios')
axios.get('http://127.0.0.1:8081/girl/test')
  .then(function (response) {
    const ids = response.data;
    ids.map((value,index) => {
        var param = {
            id: value
        }
        console.log(param);
        axios.post('http://127.0.0.1:8081/girl/testPost',param)
        .then(function(response){
            console.log(response.data);
        })
    })
  })
  .catch(function (error) {
    console.log(error);
  });