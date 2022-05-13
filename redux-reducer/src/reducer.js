
const myReducer = (state,action)=>{
    switch(action){
        case '+':
        return (++state);
        default:
            return console.log("default");
    }
}

export default myReducer;