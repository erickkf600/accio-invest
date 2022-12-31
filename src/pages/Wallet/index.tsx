import React, { useEffect, useState } from 'react'
import Template from './template'
import './wallet.scss'
import {
    getAssetsList,
    getDividendsList,
    getAportsList,
    getPatrimonyList,
    getVariatonsList,
    getDividensGraph,
} from '../../service/http/app.get'
import { useSessionStorage } from '../../components/SelectMonth/toggle.provider'
import Modal from './modal.template'
const Wallet: React.FC = () => {
    const { selected } = useSessionStorage()
    const [aports, setAports] = useState<any>([])
    const [assets, setAssets] = useState<any>([])
    const [dividends, setDividends] = useState<any>([])
    const [patrimony, setPatrimony] = useState<any>([])
    const [variations, setVariations] = useState<any>([])
    const [dataGraph, setDataGraph] = useState<any>([])
    const [open, setOpen] = useState(false)
    const [itemsList, setItem] = useState([])

    useEffect(() => {
        getAssets()
        getDividends()
        getAports()
        getPatrimony()
        getVariatons()
        getDataGraph()
    }, [])

    const getAssets = () => {
        getAssetsList()
            .then((res: any) => {
                setAssets(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }

    const getDividends = () => {
        getDividendsList()
            .then((res: any) => {
                setDividends(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    const getAports = () => {
        getAportsList()
            .then((res: any) => {
                setAports(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    const getPatrimony = () => {
        getPatrimonyList()
            .then((res: any) => {
                setPatrimony(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    const getVariatons = () => {
        getVariatonsList()
            .then((res: any) => {
                setVariations(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    const getDataGraph = () => {
        getDividensGraph(selected?.year || new Date().getFullYear())
            .then((res: any) => {
                setDataGraph(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    const openModal = (index: number) => {
        setOpen(true)
        setItem(aports[index]?.items)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Template
                aports={aports}
                assets={assets}
                dividends={dividends}
                patrimony={patrimony}
                variations={variations}
                dataGraph={dataGraph}
                openModal={openModal}
            />
            <Modal open={open} setClose={handleClose} itemsList={itemsList} />
        </>
    )
}

export default Wallet
