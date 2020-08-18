import { userService } from '../services/user.service'
import { router } from '../routes'

const user = JSON.parse(localStorage.getItem('user'))
const state = user 
    ? { status: { loggedIn: true }, user}
    : { status: {}, user: null}

const mutations = {
    registerRequest(state){
        state.status = {registering: true}
    },
    registerSuccess(state){
        state.status = {}
    },
    registerFailure(state){
        state.status = {}
    },
    loginRequest(state, user){
        state.status = {loggingIn: true}
        state.status = user
    },
    loginSuccess(state, user){
        state.status = {loggedIn: true}
        state.user = user
    },
    loginFailure(state){
        state.status = {}
        state.user = null
    },
    logout(state){
        state.status = {}
        state.user = null
    }
}

const actions = {
    register({dispatch, commit }, user){
        commit('registerRequest')

        userService.register(user)
        .then(user => {
            commit('registerSuccess')
            router.push({name: 'Login'})
            setTimeout(() => {
                dispatch('alert/success', 'Registration successful', {root: true})
            }, 1000);
        })

        .catch(error => {
            commit('registerFailure')
            dispatch('alert/error', error.message, { root: true })
        })
    },

    login({dispatch, commit }, { email, password }){
        commit('loginRequest', { email })

        userService.login(email, password)
        .then(user => {
            commit('loginSuccess', user)
            router.push({ name: 'Home' })
        })
        .catch(error =>{
            commit('loginFailure')
            dispatch('alert/error', error.message, { root: true })
        })
    },

    logout({ commit }){
        userService.logout()
        commit('logout')
        router.push({ name: 'Login'})
    }
}

export const account = {
    namespaced: true,
    state,
    mutations,
    actions
}