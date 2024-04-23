import { useEffect } from 'react'
import useApi from '../../../../hooks/useApi';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const topStudiosPosition = 3;

function WinnersMultipleTable() {
    const { data, loading, error, execute } = useApi(apiUrl)

    useEffect(
        function getMultipleWinnersPerYear(){
            execute('get', {projection: 'studios-with-win-count'})
        }
    ,[])
 
    if(loading) return <p>Carregando ... </p>;
    if(error) return <p>Ocorreu um erro: {error.message}</p>

    return (
        <div className="rounded overflow-hidden shadow-lg py-5 px-5">
            <div className='text-left mb-3'><span className='text-xl font-bold'>{`Top ${topStudiosPosition} studios with winners`}</span></div>
            <table className="table-fixed text-left w-full">
                <thead>
                    <tr>
                        <th className='border border-spacing-2 bg-gray-200 border-slate-300 pl-2'>Year</th>
                        <th className='border bg-gray-200 border-slate-300 pl-2'>Win Count</th>
                    </tr>
                </thead>
                <tbody>
                {data?.studios?.sort((a,b) => b.winCount - a.winCount).slice(0,topStudiosPosition).map((st, index) => (
                    <tr key={index}>
                        <td className="border border-slate-300 pl-2">{st.name}</td>
                        <td className="border border-slate-300 pl-2">{st.winCount}</td>
                    </tr>
                ))}
            </tbody>
            </table>
       </div>
    )
}

export default WinnersMultipleTable
