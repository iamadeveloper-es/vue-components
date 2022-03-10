export default {
    state: {
        alert: false
    },
    getters: {
        getAlert: (state) => {
            return state.alert
        }
    },
    mutations: {
        showAlert(state, payload){
            state.alert = payload
        }
    },
    actions: {
    },
}