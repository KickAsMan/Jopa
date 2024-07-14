import {NextResponse} from 'next/server'

export async function GET(){
  return NextResponse.json({hello: ['abobic1', 'abobic2', 'abobic3'], date: new Date()})
}