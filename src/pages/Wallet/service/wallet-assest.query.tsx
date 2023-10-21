import { useQuery } from 'react-query'
import { http } from '../../../api.axios'
import { Cache } from '../../../interfaces/enums/cache.enum'
import { Assets } from '../interface/assets.interface'
const request = async () => {
    const { data: assets } = await http.get('wallet/assets-list')
    return assets
}

const useAssetsQuery = () => {
    return useQuery<Assets>(['assets'], request, {
        staleTime: Cache.TIME_CACHE,
    })
}

export default useAssetsQuery
