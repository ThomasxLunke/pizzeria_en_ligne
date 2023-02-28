// Block certain pages if you are not authenticated
// this a edge function : it tooks place between the server and the client 
    // WEB CLIENT ===> SERVICE WORKER (where this function is) ===> server
// the goal here, is to check if a user is authenticated before accessising certain routes ("signedPages")

import { useStoreState } from 'easy-peasy'
import { NextResponse } from 'next/server'

const signedinPages = ['/order']

export default function middleware(req) {
  if (signedinPages.find((p) => p.includes(req.nextUrl.pathname))) {
    const chosedRestaurant = useStoreState((state) => state.chosedRestaurant)

    if (chosedRestaurant === -1) {
      return NextResponse.redirect("/")
    }
  }
}
