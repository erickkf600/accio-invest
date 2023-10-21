import { useQuery } from 'react-query'
import { http } from '../../../api.axios'
import { Cache } from '../../../interfaces/enums/cache.enum'
import { Dividends } from '../interface/dividens.interface'
const request = async () => {
    const { data: dividends } = await http.get('wallet/dividends-list')
    return dividends
}

const useDividendsQuery = () => {
    return useQuery<Dividends>(['dividends'], request, {
        staleTime: Cache.TIME_CACHE,
    })
}

export default useDividendsQuery
