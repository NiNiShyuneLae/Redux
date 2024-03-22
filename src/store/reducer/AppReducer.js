const AppReducer = (state  = 0,action) => {
    switch (action.type) {
        case "Increase":{
            return state = state + 1
            break
        }
        case "Decrease" : {
            if(state > 0){
                return state = state -1
            }
            break
        }
        default : return state
    }
}

export default AppReducer