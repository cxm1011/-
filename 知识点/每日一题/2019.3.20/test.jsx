
generateArr = () => {
    let select = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let colors = [];
    for(let i=0;i<100;){
        let temp = '';
        for(let j=0;j<6;j++){
            let random = Math.getRandom()*15;
            temp += select[random];
        }
        if(res.indexOf(temp) === -1){
            colors.push(temp)
            i++
        }
    }
    this.setState({
        colors
    })
}

onClick = (id) => {
    let select = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let res = [];
    let {colors} = this.state;
    for(let i=0;i<100;){
        let temp = '';
        if(i === id){
            res[id] = colors[i];
        }
        for(let j=0;j<6;j++){
            let random = Math.getRandom()*15;
            temp += select[random];
        }
        if(res.indexOf(temp) === -1 && temp !== colors[i]){
            res.push(temp)
            i++
        }
    }
    this.setState({
        colors: res
    })
}