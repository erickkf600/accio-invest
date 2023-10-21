import { useQuery, QueryFunctionContext } from 'react-query'
import { http } from '../../../api.axios'
import { Cache } from '../../../interfaces/enums/cache.enum'
import { DividendsGrapthEntity } from '../interface/dividendsGraph.interface'
const request = async (ctx: QueryFunctionContext) => {
    const [, year]: any = ctx.queryKey
    const { data: dividendsgraph } = await http.get(
        `wallet/dividends-graph/${year}`,
    )
    return dividendsgraph
}

const useDividendsGraphQuery = (year: number) => {
    return useQuery<DividendsGrapthEntity>(['dividendsgraph', year], request, {
        staleTime: Cache.TIME_CACHE,
    })
}

export default useDividendsGraphQuery
