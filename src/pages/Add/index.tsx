import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify'
import MensageBox from '../../Shared/MensageBox'
import useDebounce from '../../utils/hooks/debounce.hook'
import { deleteMovimentation } from './../../service/http/app.delete'
import AddOperation from './AddOperation'
import './movimentacoes.scss'
import Template from './template'
import useMovimentsQuery from './service/moviments.query'
import { http } from '../../api.axios'
import { useQueryClient } from 'react-query'
const Movimentacoes: React.FC = () => {
    const client = useQueryClient()
    const [search, setSearch] = useState<string | null>()
    const [add, toggleAdd] = useState<boolean>(false)
    const [total, setTototal] = useState<number>()
    const [content, setContent] = useState<any>([])
    const [contentFiltetred, setContentFiltered] = useState<any>([])
    const [editContent, setEditiContent] = useState<any>()
    const debouncedSearch = useDebounce(search, 500)

    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(5)
    const { data, isError, isLoading } = useMovimentsQuery({
        page: page,
        limit: limit,
    })
    const filters = [
        { type: 1, text: 'compra' },
        { type: 2, text: 'venda' },
        { type: 3, text: 'dividendos' },
    ]
    const listMovements = () => {
        if (!isLoading) {
            setContent(data?.data)
            setTototal(data?.total)
            setContentFiltered(data?.data)
        }
    }
    if (isError) {
        toast.error('Ocorreu um erro na requisição, tente novamente!')
    }

    const setEdit = (item: any) => {
        setEditiContent(item)
        toggleAdd(!add)
    }

    const setDelete = async (e: any, close: any, id: number) => {
        if (e) {
            deleteMovimentation(id)
                .then(() => {
                    toast.success('Deletado com sucesso')
                    client.invalidateQueries(['moviments'])
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
                        text="Após realizar esta ação, não será mais possível recuperar"
                        secondaryButton="Não"
                        primaryButton="Sim"
                    />
                )
            },
        })
    }

    const showObs = (text: string) => {
        confirmAlert({
            customUI: () => {
                return <MensageBox title="Observações" text={text} />
            },
        })
    }

    useEffect(() => {
        if (debouncedSearch) searchData()
        else listMovements()
    }, [debouncedSearch, page, limit, data])

    const searchData = async () => {
        http.get(`moviments/search?search=${search || ''}`)
            .then((res: any) => {
                setContent(res.data)
                setContentFiltered(res.data)
                setTototal(0)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }

    const setFilter = (e: string) => {
        const filtered = content.filter((el: any) => {
            if (e === 'all') {
                return el
            } else {
                return el.type_operation.id == e
            }
        })

        setContentFiltered(filtered)
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
                        toggleAdd(!add), client.invalidateQueries(['moviments'])
                    }}
                />
            ) : (
                <Template
                    content={contentFiltetred}
                    total={total}
                    loading={isLoading}
                    changePage={(e: number) => setPage(e)}
                    changeLimit={(e: number) => setLimit(e)}
                    setIsEdit={(e: any) => setEdit(e)}
                    deleteMov={(id: number) => deleteMov(id)}
                    showObs={(text: string) => showObs(text)}
                    filters={filters}
                    setFilter={(e: string) => setFilter(e)}
                    search={(e: any) => setSearch(e.target.value)}
                />
            )}
        </>
    )
}

export default Movimentacoes
