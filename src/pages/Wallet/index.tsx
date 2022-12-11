import React, { useEffect, useState } from 'react'
import Template from './template'
import './wallet.scss'
import { getHistoryApport, getAssetsList } from '../../service/http/app.get'
import { useSessionStorage } from '../../components/SelectMounth/toggle.provider'
const Wallet: React.FC = () => {
    const { selected } = useSessionStorage()
    const [aports, setAports] = useState<any>([])
    const [assets, setAssets] = useState<any>([])

    useEffect(() => {
        getAssets()
        getHistory()
    }, [])

    const getHistory = () => {
        getHistoryApport(selected.year || new Date().getFullYear())
            .then((res: any) => {
                setAports(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    const getAssets = () => {
        getAssetsList()
            .then((res: any) => {
                setAssets(res)
                console.log(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    return <Template aports={aports} assets={assets} />
}

export default Wallet
