
import type { NextRequest } from 'next/server'; 
import { NextResponse } from 'next/server'; 

export const middleware = ( req:NextRequest ) => {
    if(req.nextUrl.pathname === '/' && req.cookies.get('token') === undefined){
        return NextResponse.redirect(new URL('/auth/login', req.nextUrl));
    }
    return NextResponse.next();
}