import { QueryClient } from '@tanstack/react-core'
import {cache} from 'react'

const getQueryClient = cache(() => new QueryClient({defaultOptions: {queries: {staleTime: 10 * 1000, refetchOnWindowFocus: false}}}))
export default getQueryClient