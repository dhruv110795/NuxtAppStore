export const state = () => ({
    users: [],
    currentUser : {}
})

export const getters ={
    getUserById: (state) => (id) => {
        return state.users.find(users => users.id == id)
    }
}

export const mutations = {
    SET_USERS(state,users){
        state.users = users
    },
    SET_CURRENT_USER (state,users){
        state.currentUser = users
    }
}

export const actions = {
    async loadAllUsers({commit}){
      let {users} = await getUsers("/users", this.$axios);
      commit("SET_USERS",users)
    }
    // async nuxtServerInit({commit}, context){
    //   const result = await context.$axios.get("/users")
    //   console.log(">nuxtServerInit",result.data.data)
    //   commit("SET_USERS",result.data.data)
    // }
}

const getUsers = async function(url, axios){
    let response = await axios.get(url);
    let users = response.data.data;
    console.log(users);
    return {
        users: users
    }
}

