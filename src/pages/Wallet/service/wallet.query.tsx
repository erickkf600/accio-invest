import { useQueries } from 'react-query'
import { http } from '../../../api.axios'
import { Cache } from '../../../interfaces/enums/cache.enum'

const walletRoute = async (route: string) => {
    const { data: wallet } = await http.get(`wallet/${route}`)
    return wallet
}
const timer = { staleTime: Cache.TIME_CACHE }

const useWalletQuery = (year: number) => {
    return useQueries([
        {
            queryKey: ['assets'],
            queryFn: () => walletRoute('assets-list'),
            ...timer,
        },
        {
            queryKey: ['dividends'],
            queryFn: () => walletRoute('dividends-list'),
            ...timer,
        },
        {
            queryKey: ['history'],
            queryFn: () => walletRoute('history-aports'),
            ...timer,
        },
        {
            queryKey: ['patrimonygain'],
            queryFn: () => walletRoute('patrimony-gain'),
            ...timer,
        },
        {
            queryKey: ['variations'],
            queryFn: () => walletRoute('variations'),
            ...timer,
        },
        {
            queryKey: ['dividendsgraph'],
            queryFn: () => walletRoute(`dividends-graph/${year}`),
            ...timer,
        },
    ])
}

export default useWalletQuery
