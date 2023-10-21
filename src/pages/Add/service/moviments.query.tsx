import { QueryFunctionContext, useQuery } from 'react-query'
import { http } from '../../../api.axios'
import { Cache } from '../../../interfaces/enums/cache.enum'
import { moviments } from '../interface/moviments.interface'
const request = async (ctx: QueryFunctionContext) => {
    const [, pagination]: any = ctx.queryKey
    const { data: moviments } = await http.get(
        `moviments/list/${pagination.page}/${pagination.limit}`,
    )
    return moviments
}

const useMovimentsQuery = (pagination: { page: number; limit: number }) => {
    return useQuery<moviments>(['moviments', pagination], request, {
        staleTime: Cache.TIME_CACHE,
    })
}

export default useMovimentsQuery
