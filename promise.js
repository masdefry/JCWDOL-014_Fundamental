// PROMISE: Async Method, 2 Event: Resolved, Reject

const users = ['user01', 'user02', 'user03']

const DeleteUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(users.includes(username)){
                users.splice(users.indexOf(username), 1)
    
                resolve('Delete Success')
            }else{
                reject('Delete Error')
            }
        }, 5000)
    })
}

const ShowData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(db)
        }, 3000)
    })
}

DeleteUserByUsername('user05')
.then((res) => {
    console.log('.then', res)
})
.catch((err) => {
    console.log('.catch', err)
})