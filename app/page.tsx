import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAbobas } from "@/lib/api/server";
import HomeComponent from "@/components/mainPage";
import getQueryClient from '../lib/getQueryClient'
async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getAbobas'],
    queryFn: getAbobas
    })
  const dehydratedState = dehydrate(queryClient)
  return (
    <>
      <div className="flex items-center justify-center">Abobas</div>
      <HydrationBoundary state={dehydratedState}>
        <HomeComponent />
      </HydrationBoundary>
    </>
  );
}

export default Home;
