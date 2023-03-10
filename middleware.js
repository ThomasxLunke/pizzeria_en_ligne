// Block certain pages if you are not authenticated
// this a edge function : it tooks place between the server and the client
// WEB CLIENT ===> SERVICE WORKER (where this function is) ===> server
// the goal here, is to check if a user is authenticated before accessising certain routes ("signedPages")

import { NextResponse } from 'next/server'

export default async function middleware(req) {
  if (req.nextUrl.pathname.startsWith('/order')) {
    
    const isAdressCookie = req.cookies.get('isAdressCookie')?.value
    if (isAdressCookie === "false" || isAdressCookie === undefined) {
      const url = req.nextUrl.clone()
      url.pathname = '/'
      url.search = ''
      req.nextUrl.search = ''
      NextResponse.rewrite(url)
      return NextResponse.redirect(url)
    }
  }

  if (req.nextUrl.pathname.startsWith('/checkout')) {
    
    const numberItemCart = req.cookies.get('numberItemCart')?.value

    if (numberItemCart === "0" || numberItemCart === undefined) {
      const url = req.nextUrl.clone()
      url.pathname = '/order/menupromo'
      url.search = ''
      req.nextUrl.search = ''
      NextResponse.rewrite(url)
      return NextResponse.redirect(url)
    }
  }

  if (req.nextUrl.pathname.startsWith('/delivery')) {
    
    const deleveryPossible = req.cookies.get('deleveryPossible')?.value

    if (deleveryPossible === "false" || deleveryPossible === undefined) {
      const url = req.nextUrl.clone()
      url.pathname = '/checkout'
      url.search = ''
      req.nextUrl.search = ''
      NextResponse.rewrite(url)
      return NextResponse.redirect(url)
    }
  }
}
