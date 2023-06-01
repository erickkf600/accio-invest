import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from '../../api.axios'
import { Debiters } from '../../interfaces/DebitersResponse.interface'
import { Month } from '../../interfaces/MonthResponse.interface'
import { Users } from '../../interfaces/Users.interface'
const axiosInstance = api(axiosRequestConfiguration)

export const getDebiters = (queryParams: {
    num: number
    year: number
}): Promise<Debiters> => {
    console.log(queryParams)
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`debiters/${queryParams.num}/${queryParams.year}`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const getPurchases = (
    userid: number,
    monthref: number,
    year: number,
): Promise<Debiters> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`purchases-by-user/${userid}/${monthref}/${year}`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const getMonths = (): Promise<Month> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get('months')
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
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

export const getResume = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`home/resume`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

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
export const getAssetsList = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`wallet/assets-list`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const getDividendsList = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`wallet/dividends-list`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const getAportsList = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`wallet/history-aports`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const getPatrimonyList = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`wallet/patrimony-gain`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const getVariatonsList = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`wallet/variations`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
    })
}
export const getDividensGraph = (year: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`wallet/dividends-graph/${year}`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
