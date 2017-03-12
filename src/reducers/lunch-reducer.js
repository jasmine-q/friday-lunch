export default (state = [], action) => {
    switch (action.type) {
        case 'GET_LUNCH_PLACES': {
            return Object.assign({}, state, {
                lunch : action.lunch
            });
        }
        default:
            return state;
    }
};