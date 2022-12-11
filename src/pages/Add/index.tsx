import React, { useEffect, useState } from 'react'
import './movimentacoes.scss'
import Template from './template'
import AddOperation from './AddOperation'
import { getMovementsList } from './../../service/http/app.get'
import { deleteMovimentation } from './../../service/http/app.delete'
import { useSessionStorage } from '../../components/SelectMounth/toggle.provider'
import { confirmAlert } from 'react-confirm-alert'
import MensageBox from '../../Shared/MensageBox'
import { toast } from 'react-toastify'
const Movimentacoes: React.FC = () => {
    const { selected } = useSessionStorage()
    const [add, toggleAdd] = useState<boolean>(false)
    const [total, setTototal] = useState<number>()
    const [content, setContent] = useState<any>([])
    const [editContent, setEditiContent] = useState<any>()

    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(5)

    useEffect(() => {
        listMovements()
    }, [page, limit])

    const listMovements = async () => {
        getMovementsList(selected.year || new Date().getFullYear(), limit, page)
            .then((res: any) => {
                setContent(res?.data)
                setTototal(res?.total)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }

    const setEdit = (index: number) => {
        setEditiContent(content[index])
        toggleAdd(!add)
    }

    const setDelete = async (e: any, close: any, id: number) => {
        if (e) {
            deleteMovimentation(id)
                .then(_ => {
                    toast.success('Deletado com sucesso')
                    close()
                })
                .catch(err => {
                    console.error(err)
                    toast.error('Ocorreu um erro, tente novamente!')
                })
        } else {
            close()
        }
    }
    const deleteMov = async (id: number) => {
        confirmAlert({
            customUI: ({ onClose }: any) => {
                return (
                    <MensageBox
                        onClose={(e: any) => setDelete(e, onClose, id)}
                        title="Tem certeza?"
                        text="Esta ação é irreversível"
                        secondaryButton="Não"
                        primaryButton="Sim"
                        icon="help"
                    />
                )
            },
        })
    }

    const showObs = (text: string) => {
        confirmAlert({
            customUI: () => {
                return <MensageBox text={text} />
            },
        })
    }

    return (
        <>
            <section className="movimentacoes">
                <div className="movimentacoes__head">
                    <h1>Movimentações</h1>
                    <button
                        className="btn"
                        onClick={() => {
                            toggleAdd(!add), setEditiContent(null)
                        }}
                    >
                        {!add ? 'Adicionar' : 'Fechar'}
                    </button>
                </div>
            </section>
            {add ? (
                <AddOperation
                    content={editContent}
                    closeForm={() => {
                        toggleAdd(!add), listMovements()
                    }}
                />
            ) : (
                <Template
                    content={content}
                    total={total}
                    changePage={(e: number) => setPage(e)}
                    changeLimit={(e: number) => setLimit(e)}
                    setIsEdit={(e: number) => setEdit(e)}
                    deleteMov={(id: number) => deleteMov(id)}
                    showObs={(text: string) => showObs(text)}
                />
            )}
        </>
    )
}

export default Movimentacoes
