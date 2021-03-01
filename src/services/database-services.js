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
                    resolve(resp.data)
                }).catch(error => reject(error))
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    addImage = (imageDetails, index) => {
        return new Promise(async (resolve, reject) => {
            let data = new FormData()
            data.append('image', {
                uri : imageDetails.path,
                name : `images${index}.jpg`,
                type : imageDetails.mime
            })
            data.append('name', `images${index}.jpg`)
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: data
            }
            let responce = fetch('http://192.168.1.29:8000/manageimages', options)
            responce.then(res => {
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