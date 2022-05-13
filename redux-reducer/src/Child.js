import React,{useReducer} from 'react';
import myReducer from './reducer'
const Child=()=>{
    let [state,dispatch]=useReducer(myReducer,0);
    return(
        <div>
            <h1>my Value:{state}</h1>
            <button onClick={()=>dispatch('+')}>click</button>
        </div>
    )

}
export default Child;