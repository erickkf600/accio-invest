import { Routes } from '../interfaces/routes.interface'
import { Add, Tools, Home, Wallet } from './lazy-imports'

export const Pages: Routes[] = [
    {
        path: '/home',
        name: 'Home',
        icon: 'icon-home',
        component: Home,
    },
    {
        path: '/movimentacoes',
        name: 'Movimentações',
        icon: 'icon-data',
        component: Add,
    },
    {
        path: '/carteira',
        name: 'Carteira',
        icon: 'icon-card',
        component: Wallet,
    },
    {
        path: '/ferramentas',
        name: 'Feramentas',
        icon: 'icon-config',
        component: Tools,
    },
]
