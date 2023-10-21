import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from '../../api.axios'
import { Users } from '../../interfaces/Users.interface'
const axiosInstance = api(axiosRequestConfiguration)

export const getUsers = (): Promise<Users> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get('users')
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

// export const getResume = (): Promise<any> => {
//     return new Promise((resolve, reject) => {
//         axiosInstance
//             .get(`home/resume`)
//             .then((value: AxiosResponse) => {
//                 resolve(value.data)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }

export const getMovementsList = (
    year: number,
    limit: number,
    page: number,
): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`moviments/list/${page}/${limit}`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
