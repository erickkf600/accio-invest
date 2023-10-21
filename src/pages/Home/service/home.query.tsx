import { useQuery } from 'react-query'
import { http } from '../../../api.axios'
import { Cache } from '../../../interfaces/enums/cache.enum'
import { resume } from '../interface/resume.interface'

const request = async () => {
    const { data: resume } = await http.get('home/resume')
    return resume
}

const useHomeQuery = () => {
    return useQuery<resume>(['resume'], request, {
        staleTime: Cache.TIME_CACHE,
    })
}

export default useHomeQuery
