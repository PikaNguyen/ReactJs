import axios from "./axios.custom"

const createUserAPI = (fullName, email, password, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phoneNumber
    }

    return axios.post(URL_BACKEND, data)
}

const updateUserAPI = (_id, fullName, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phoneNumber
    }

    return axios.put(URL_BACKEND, data)
}

const fetchAllUsersApi = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND)
}

const uploadFileImage = (file, folder) => {
    const URL_BACKEND = "/api/v1/file/upload"
    let config = {
        headers: {
            "upload-type": folder,
            "content-type": "multipart/form-data"
        }
    }
    const bodyFormData = new FormData()
    bodyFormData.append("fileImg", file)
    return axios.post(URL_BACKEND, bodyFormData, config)
}

const updateUserAvatarAPI = (_id, fullName, phone, avatar) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone,
        avatar: avatar
    }

    return axios.put(URL_BACKEND, data)
}

const registerUserAPI = (fullName, email, password, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user/register"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phoneNumber
    }

    return axios.post(URL_BACKEND, data)

}

export {
    createUserAPI, registerUserAPI, updateUserAvatarAPI, fetchAllUsersApi, updateUserAPI, uploadFileImage
}