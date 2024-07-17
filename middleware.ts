import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
    authRouers,
    apiAuthPrefix
} from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req
    const isLogedIn = req.auth

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPubblicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRouers = authRouers.includes(nextUrl.pathname)

    if (isApiAuthRoute) return null

    if (isAuthRouers) {
        if (isLogedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null
    }

    if (!isLogedIn && !isPubblicRoute) {
        return Response.redirect(new URL('/auth/login', nextUrl))
    }

    return null

})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
