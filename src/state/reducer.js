
const todos = (state = [], action) => {
    switch (action.type) {
        case 'TEST':
            return [
                ...state,
                {
                    test: 'TESTI ONNISTUI'
                }
            ];
        default:
            return state;
    }
};
export default todos;