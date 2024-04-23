import { useEffect } from 'react'
import useApi from '../../../../hooks/useApi';
import Spinner from '../../../../components/Spinner'

const rows = [
    {id: 1, label: "Producer"},
    {id: 1, label: "Interval"},
    {id: 1, label: "Previous Year"},
    {id: 1, label: "Following Year"},
]

function ProducersMaxMinWins() {

    const { data, loading, error, execute } = useApi()

    useEffect(
        function getMaxMinInterval(){
            if(!data) execute('get',{projection: 'max-min-win-interval-for-producers'})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[])

    if(loading) return <p className="text-center"><Spinner /></p>;
    if(error) return <p>Ocorreu um erro: {error.message}</p>

    return (
        <div className="rounded overflow-hidden shadow-lg py-5 px-5">
            <div className='text-left mb-3'><span className='text-xl font-bold'>Producers with longest and shortest interval between wins</span></div>
            <span className='flex text-xl'>Maximum</span>
            <table className="table-fixed text-left w-full mb-5">
                <thead>
                    <tr>
                        {rows.map((row) => (
                            <th key={row.id} className='border border-spacing-2 bg-gray-200 border-slate-300 pl-2'>{row.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.max?.map((max, index: number) => (
                        <tr key={index}>
                            <td className="border border-slate-300 pl-2">{max.producer}</td>
                            <td className="border border-slate-300 pl-2">{max.interval}</td>
                            <td className="border border-slate-300 pl-2">{max.previousWin}</td>
                            <td className="border border-slate-300 pl-2">{max.followingWin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <span className='flex text-xl'>Minimum</span>
            <table className="table-fixed text-left w-full">
                <thead>
                    <tr>
                        {rows.map((row) => (
                            <th key={row.id} className='border border-spacing-2 bg-gray-200 border-slate-300 pl-2'>{row.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {data?.min?.map((min, index: number) => (
                    <tr key={index}>
                        <td className="border border-slate-300 pl-2">{min.producer}</td>
                        <td className="border border-slate-300 pl-2">{min.interval}</td>
                        <td className="border border-slate-300 pl-2">{min.previousWin}</td>
                        <td className="border border-slate-300 pl-2">{min.followingWin}</td>
                    </tr>
                ))}
            </tbody>
            </table>
       </div>
    )
}

export default ProducersMaxMinWins
