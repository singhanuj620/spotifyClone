export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // token: 'BQCW6pvUUSJasNYgIk9t3H2RUk3XJiNzv34wQsxs8uzGXvAqXQdXuL8ocVQWmUN6rQX0ZSCh6wHfCA_Qi35qZqOQWfulHtMdWGWSW0OkToLraWX_Z48QSBxB5ajsiOJV8Uy2b6VEwdBJ8xT-K8lxgNYAh8Mj6-JYvE7wffYxod70Tm9rIog'
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user: action.user
            }
        
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist
            }
            
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        default : 
            return state;
    }
}

export default reducer;