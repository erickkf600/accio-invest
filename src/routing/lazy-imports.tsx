import React, { Suspense, lazy } from 'react'
import { useLocation } from 'react-router-dom'
import { routeChangeContext } from '../service/providers/route.provider.tsx'

const Element = ({ ComponentLoaded, props }: any) => {
    const location = useLocation()
    const { setRoute } = routeChangeContext()
    const hasRoute = ['login', 'investimentos'].includes(
        location.pathname.split('/')?.[1],
    )
    setRoute(hasRoute)
    return (
        <Suspense fallback={<p>...Loading</p>}>
            <ComponentLoaded {...props} />
        </Suspense>
    )
}
export default function LazyLoad(component: any) {
    const ComponentLoaded = lazy(component)
    return (props: any) => (
        <Element ComponentLoaded={ComponentLoaded} props={props} />
    )
}

export const Home = LazyLoad(
    () => import('../pages/Home' /* webpackChunkName: 'home' */),
)
export const Add = LazyLoad(
    () => import('../pages/Add' /* webpackChunkName: 'add' */),
)
export const Wallet = LazyLoad(
    () => import('../pages/Wallet' /* webpackChunkName: 'wallet' */),
)
export const Tools = LazyLoad(
    () => import('../pages/Tools' /* webpackChunkName: 'tools' */),
)
