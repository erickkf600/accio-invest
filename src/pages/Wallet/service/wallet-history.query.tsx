import { useQuery } from 'react-query'
import { http } from '../../../api.axios'
import { Cache } from '../../../interfaces/enums/cache.enum'
import { History } from '../interface/history.interface'
const request = async () => {
    const { data: history } = await http.get('wallet/history-aports')
    return history
}

const useHistoryQuery = () => {
    return useQuery<History>(['history'], request, {
        staleTime: Cache.TIME_CACHE,
    })
}

export default useHistoryQuery
