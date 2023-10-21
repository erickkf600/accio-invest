import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Modal from './modal.template'
import useWalletQuery from './service/wallet.query'
import Template from './template'
import './wallet.scss'
import { Assets } from './interface/assets.interface'
import { Dividends } from './interface/dividens.interface'
import { History, ItemsEntity } from './interface/history.interface'
import { PatrimonyGain } from './interface/patrimonyGain.interface'
import { Variations } from './interface/variations.interface'
import { DividendsGrapthEntity } from './interface/dividendsGraph.interface'
const Wallet: React.FC = () => {
    const walletReq = useWalletQuery(new Date().getFullYear())
    const [aports, setAports] = useState<History[]>([])
    const [assets, setAssets] = useState<Assets[]>([])
    const [dividends, setDividends] = useState<Dividends[]>([])
    const [patrimony, setPatrimony] = useState<PatrimonyGain[]>([])
    const [variations, setVariations] = useState<Variations[]>([])
    const [dataGraph, setDataGraph] = useState<DividendsGrapthEntity[]>([])
    const [open, setOpen] = useState(false)
    const [itemsList, setItem] = useState<ItemsEntity[]>([])
    const loading = walletReq.some(result => result.isLoading)
    const error = walletReq.some(result => result.isError)
    useEffect(() => {
        if (!loading) {
            setAssets(walletReq[0].data)
            setDividends(walletReq[1].data)
            setAports(walletReq[2].data)
            setPatrimony(walletReq[3].data)
            setVariations(walletReq[4].data)
            setDataGraph(walletReq[5].data)
        }
    }, [loading])

    const openModal = (index: number) => {
        setOpen(true)
        setItem(aports[index]?.items)
    }
    const handleClose = () => {
        setOpen(false)
    }

    if (error) {
        toast.error('Ocorreu um erro em uma requisição')
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
