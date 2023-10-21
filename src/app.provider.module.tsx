/* eslint-disable prettier/prettier */
import React from 'react'
import ResumeMovimentacaoProvider from './pages/Add/AddOperation/add-perations.provider'
import AssetsTypesProvider from './service/providers/assets.provider'
import OperationTypesProvider from './service/providers/operation_types.provider'
import RouteChangeProvider from './service/providers/route.provider.tsx'
import UsersProvider from './service/providers/users.provider'
import ConfirmModalProvider from './Shared/MensageBox/toggle.provider'
export const Providers = (input: any) => {
  return (
    <RouteChangeProvider>
      <UsersProvider>
        <ConfirmModalProvider>
          <ResumeMovimentacaoProvider>
            <AssetsTypesProvider>
              <OperationTypesProvider>{input.children}</OperationTypesProvider>
            </AssetsTypesProvider>
          </ResumeMovimentacaoProvider>
        </ConfirmModalProvider>
      </UsersProvider>
    </RouteChangeProvider>
  )
}
