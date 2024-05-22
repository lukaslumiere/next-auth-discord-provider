import { getServerSession } from "next-auth"
import { authOptions } from "./auth-config"

export async function getCurrentUser(){
    const session = await getServerSession(authOptions)
    return session?.user
}