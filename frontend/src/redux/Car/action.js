import axios from "axios"
import * as types from "./actionTypes"


const  getCarRequest=()=>{

    return{
        type:types.GET_CAR_REQUEST
    }
}


const getCarSuccess=(payload)=>{

    return{
        type:types.GET_CAR_SUCCESS,
        payload
    }
}


const getCarError=()=>{

    return{
        type:types.GET_CAR_ERROR
    }
}



// const getCars=(dispatch)=>{
//     dispatch(getCarRequest())
//     axios.get("http://localhost:8080/cars/allcars",)
//     .then((r)=>{
//         dispatch(getCarSuccess(r.data))
//         console.log(r.data)
//     })
//     .catch((e)=>{
//         dispatch(getCarError());
//     });
// }

function getCars(params){
    return function(dispatch){
        dispatch(getCarRequest())
        return axios
        .get("http://localhost:5000/cars/allcars",params)
        .then((r)=>{
            dispatch(getCarSuccess(r.data));
        })
        .catch((e)=>{
            dispatch(getCarError())
        })
    }

}



export {getCarError,getCarRequest,getCarSuccess,getCars }


