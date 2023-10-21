import { useQuery } from 'react-query'
import { http } from '../../../api.axios'
import { Cache } from '../../../interfaces/enums/cache.enum'
import { Variations } from '../interface/variations.interface'
const request = async () => {
    const { data: variations } = await http.get('wallet/variations')
    return variations
}

const useVariationQuery = () => {
    return useQuery<Variations>(['variations'], request, {
        staleTime: Cache.TIME_CACHE,
    })
}

export default useVariationQuery
