import { Effect } from 'dva';
import { Reducer } from 'redux';
interface CurrentUser{
    Avantar?:string;
    Name:string;
    Account:string;
}

interface UserModelState{
    currentUser?:CurrentUser;
}

interface UserModelType{
    namespace:'user';
    state:UserModelState;
    effects:{
        fetch:Effect;
    };
    reducer:{
        saveCurrentUser:Reducer<UserModelState>;        
    }
}

const UserModel:UserModelType = {
    namespace:'user',
    state:{
        currentUser:undefined,
    },
    effects:{
        *fetch(_,{call,put}){
            yield put({
                type:'saveCurrentUser',                
            })
        },

    },
    reducer:{
        saveCurrentUser(state,action){
            return{
                ...state,
                currentUser:action.payload||{},
            }
        }
    }

}

export default UserModel;
