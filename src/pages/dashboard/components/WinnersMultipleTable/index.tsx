import { useEffect } from 'react'
import useApi from '../../../../hooks/useApi';
import Spinner from '../../../../components/Spinner'

function WinnersMultipleTable() {
    const { data, loading, error, execute } = useApi()

    useEffect(
        function getMultipleWinnersPerYear() {
            if(!data) execute('get', { projection: 'years-with-multiple-winners' })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[])

    if(loading) return <p className="text-center"><Spinner /></p>;
    if(error) return <p>Ocorreu um erro: {error.message}</p>

    return (
        <div className="rounded overflow-hidden shadow-lg py-5 px-5">
            <div className='text-left mb-3'><span className='text-xl font-bold'>List Years with multiple winners</span></div>
            <table className="table-fixed text-left w-full">
                <thead>
                    <tr>
                        <th className='border border-spacing-2 bg-gray-200 border-slate-300 pl-2'>Name</th>
                        <th className='border bg-gray-200 border-slate-300 pl-2'>Years</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.years?.map((yr, index: number) => (
                        <tr key={index}>
                            <td className="border border-slate-300 pl-2">{yr.year}</td>
                            <td className="border border-slate-300 pl-2">{yr.winnerCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
       </div>
    )
}

export default WinnersMultipleTable
