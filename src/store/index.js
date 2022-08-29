import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    users: [],
    user:{
      id: '',
      nombre: '',
      tech: [],
      category: '',
      cantidad: 0,
    }
  },
  getters: {
  },
  mutations: {
    set(state, payload){
      state.users.push(payload)
      //localStorage.setItem('user', JSON.stringify(state.users))
    },
    eliminar(state, payload){
      //USERS VAN A SER TODOS MENOS EL ID QUE ENVIAMOS
      state.users = state.users.filter(item => item.id !== payload)
      //localStorage.setItem('user', JSON.stringify(state.users))

    },
    user(state, payload){
      //BUSCA EL USER EL PAYLOAD.ID
      if(!state.users.find(item => item.id === payload)){
        router.push('/')
        return 
      }
      state.user = state.users.find(item => item.id === payload)
    },
    update(state, payload){
      state.users = state.users.map(item => item.id === payload.id ? payload : item);
      //localStorage.setItem('user', JSON.stringify(state.users))
      router.push('/')
    },
    cargar(state, payload){
      state.users = payload
    }
  },
  actions: {
      /* cargarLocalStorage({ commit }){
      if(localStorage.getItem('user')){
        const user = JSON.parse(localStorage.getItem('user'))
        commit('cargar', user)
        return
      }
      localStorage.setItem('user', JSON.stringify([]))
     },*/
    async getUsers({commit}){
      try{
          const res = await fetch(`https://test-api-udemy-default-rtdb.firebaseio.com/users.json`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
        })
        const dataDB = await res.json();
        const arrayUsers = []
        for(let id in dataDB){
          arrayUsers.push(dataDB[id])
        }
        commit('cargar', arrayUsers)
      }catch(error){
        console.log(error)
      }
    },
    async setUsers({ commit }, user){
      try{
        const res = await fetch(`https://test-api-udemy-default-rtdb.firebaseio.com/users/${user.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        const dataDB = await res.json()
        console.log(dataDB)
      }catch (error){
        console.log(error)
      }
      commit('set', user)
    },
    async deleteUser({commit}, id){
      try{
        await fetch(`https://test-api-udemy-default-rtdb.firebaseio.com/users/${id}.json`, {
          method: 'DELETE'
        })
        commit('eliminar', id)
      }catch(error){
        console.log(error)
      }
    },
    setUser({ commit }, id){
      commit ('user', id )
    },
    async updateUser({ commit }, user){
      try{
        const res = await fetch(`https://test-api-udemy-default-rtdb.firebaseio.com/users/${user.id}.json`, {
          method:'PATCH',
          body: JSON.stringify(user)
        })
        const dataDB = await res.json();
        console.log(dataDB)
        commit ('update', user)
       }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
