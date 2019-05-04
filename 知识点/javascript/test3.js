const data = [
    {
       key: '1' 
    },
    {
        key: '2' 
    }
];

convertData = (data) => {
    data[0].key = '3';
    return data;
}

formateData = (data) => {
    console.log('formateData',data);
}

const getData = (data,convertData) => {
    // let data1 = convertData(data);
    formateData(convertData(data));
}

getData(data,convertData);