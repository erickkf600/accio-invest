import { useQuery } from 'react-query'
import { http } from '../../../api.axios'
import { Cache } from '../../../interfaces/enums/cache.enum'
import { PatrimonyGain } from '../interface/patrimonyGain.interface'
const request = async () => {
    const { data: patrimonygain } = await http.get('wallet/patrimony-gain')
    return patrimonygain
}

const usePatrimonygainQuery = () => {
    return useQuery<PatrimonyGain>(['patrimonygain'], request, {
        staleTime: Cache.TIME_CACHE,
    })
}

export default usePatrimonygainQuery
