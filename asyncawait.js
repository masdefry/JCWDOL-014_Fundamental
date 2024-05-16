
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

const DeleteData = async() => {
    try {
        const res01 = await DeleteUserByUsername('user01')
        console.log(res01)
        await DeleteUserByUsername('user02')
        await DeleteUserByUsername('user05')
        const res = await ShowData()
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

DeleteData()