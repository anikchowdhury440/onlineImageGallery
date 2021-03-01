class DatabaseServices {
    getImages = () => {
        return new Promise(async (resolve, reject) => {
            let options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            let responce = fetch('http://192.168.1.29:8000/manageimages', options)
            responce.then(res => {
                res.json().then(resp => {
                    resolve(resp)
                }).catch(error => reject(error))
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    addImage = (imageDetails) => {
        console.log('image', imageDetails.name);
        return new Promise(async (resolve, reject) => {
            let data = new FormData()
            data.append('image', imageDetails)
            data.append('name', 'abc')
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                },
                body: data
            }
            let responce = fetch('http://192.168.1.29:8000/manageimages', options)
            responce.then(res => {
                console.log('res', res)
                res.json().then(resp => {
                    resolve(resp)
                }).catch(error => reject(error))
            })
            .catch(error => reject(error))
        })
    }

    searchImages = (imageName) => {
        return new Promise((resolve, reject) => {
            let responce = fetch(`http://192.168.1.29:8000/search-images?search_term=${imageName}`)
            responce.then(res => {
                res.json().then(resp => {
                    resolve(resp)
                }).catch(error => reject(error))
            })
            .catch(error => reject(error))
        })
    }
}

export default new DatabaseServices()