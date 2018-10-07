var handler = {
    message: 'event handler',
    handleClick : function(event){
        console.log(this.message);
    }
}

// setTimeout(function(){
//     handler.handleClick();
// },500)
handler.handleClick();

