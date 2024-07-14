'use client'

import { getAbobas } from "@/lib/api/server";
import { useQuery } from "@tanstack/react-query";

const HomeComponent = () => {
    const {
        data: abobas,
        isFetching
      } = useQuery({
        queryKey: ['getAbobas'],
        queryFn: getAbobas
            })
  // if(isFetching) return <div>loading...</div>
    return (
      <div>{abobas.hello.map((el: any, ind: number) => <p key={ind}>{el}</p>)}</div>
    );
}

export default HomeComponent
  