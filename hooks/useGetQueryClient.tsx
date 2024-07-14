'use client'
import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useGetQueryClient = () => {
  const [queryClient] = useState(() => new QueryClient({defaultOptions: {queries: {staleTime: 10 * 1000, gcTime: 5 * 60 * 1000, refetchOnWindowFocus: false}}}));
    return queryClient
}
export default useGetQueryClient