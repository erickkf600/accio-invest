import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from '../../api.axios'
const axiosInstance = api(axiosRequestConfiguration)

export const searchMovements = (param: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`moviments/search?search=${param}`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
