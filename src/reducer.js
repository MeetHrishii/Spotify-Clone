export const initialState = {
    user: null, 
    playlists: [],
    playing: false,
    item: null,
    // remove after finished developing
    token: 'BQCwkfnIkivHzeO2lYnan5Y1MuY8oJYaTkw2d5tSX4LHLT-SLLe6zs5Dh-i2WMro5WsroWE8M42HQRvwuB2IJOVN2FNjDvv0PfeWTB8Py_vcTmzgRQkj8QFKJ4EgMWfRMrFz4TpEaxFBCFc-En4Q7TULAEOKkL6q_PIpW6oU-ijON1Yb8wfc5g3Xk3xnPjKJsplbW6dxHVeQzMgKjiNd',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
            
        default:
            return state;
    }
}

export default reducer;