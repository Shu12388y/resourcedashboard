import { NextResponse,NextRequest } from "next/server"
export const GET = async(_:NextRequest)=>{
    try {
        return NextResponse.json({message:"Hello World"})
    } catch (error) {
        return NextResponse.json({message:error})
    }

}