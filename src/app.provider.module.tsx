/* eslint-disable prettier/prettier */
import React from 'react'
import {
    OpenToolBoxProvider,
    SessionStorageProvider,
} from './components/SelectMounth/toggle.provider'
import ResumeMovimentacaoProvider from './pages/Add/AddOperation/add-perations.provider'
import AssetsTypesProvider from './service/providers/assets.provider'
import MonthsProvider from './service/providers/month.provider'
import OperationTypesProvider from './service/providers/operation_types.provider'
import RouteChangeProvider from './service/providers/route.provider.tsx'
import UsersProvider from './service/providers/users.provider'
import ConfirmModalProvider from './Shared/MensageBox/toggle.provider'
export const Providers = (input: any) => {
    return(
    <RouteChangeProvider>
    <MonthsProvider>
    <UsersProvider>
    <ConfirmModalProvider>
    <OpenToolBoxProvider>
    <SessionStorageProvider>
    <ResumeMovimentacaoProvider>
    <AssetsTypesProvider>
    <OperationTypesProvider>
    {input.children}
    </OperationTypesProvider>
    </AssetsTypesProvider>
    </ResumeMovimentacaoProvider>
    </SessionStorageProvider>
    </OpenToolBoxProvider>
    </ConfirmModalProvider>
    </UsersProvider>
    </MonthsProvider>
    </RouteChangeProvider>

    )
}