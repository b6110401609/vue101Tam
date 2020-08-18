import * as firebase from 'firebase'

function login(email,password){
    return firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(data =>{
        localStorage.setItem('user',JSON.stringify(data.user))
        return data.user
    })
}

function logout(){
    localStorage.removeItem('user')
}


function register(user){
    return firebase.auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(data => {
        data.user.updateProfile({
            displayName: user.displayName
        })
        return data.user
    })
}

export const userService  = {
    login,
    logout,
    register
}