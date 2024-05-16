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
        }, 1000)
    })
}

const ShowData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users)
        }, 500)
    })
}

DeleteUserByUsername('user01')
.then(() => {
    return DeleteUserByUsername('user02')
})
.then(() => {
    return DeleteUserByUsername('user03')
})
.then(() => {
    return ShowData()
})
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log('.catch', err)
})