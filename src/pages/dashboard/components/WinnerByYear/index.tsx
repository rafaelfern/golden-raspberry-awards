import { useState } from 'react'
import SearchInput from '../../../../components/SearchInput'
import useApi from '../../../../hooks/useApi';

function WinnerByYear() {
    const { data, execute } = useApi()
    const [searchYear, setSearchYear] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovieByYear()
    }
    
    const getMovieByYear = () => {
        if(searchYear) execute('get', {winner: true, year: searchYear})
    }
    

    return (
        <div className="rounded overflow-hidden shadow-lg py-5 px-5">
            <div className='text-left mb-3'><span className='text-xl font-bold'>List movie winners by year</span></div>
            <div className='w-full flex mb-5 mt-5'>
                <SearchInput setSearchYear={setSearchYear} searchYear={searchYear} handleSubmit={handleSubmit}/>
            </div>
            <table role="table-winner" className="table-fixed text-left w-full">
                <thead>
                    <tr>
                        <th className='border border-spacing-2 bg-gray-200 border-slate-300 pl-2'>Id</th>
                        <th className='border bg-gray-200 border-slate-300 pl-2'>Year</th>
                        <th className='border bg-gray-200 border-slate-300 pl-2'>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((dt, index) => (
                        <tr key={dt.id}>
                            <td className="border border-slate-300 pl-2">{dt.id}</td>
                            <td className="border border-slate-300 pl-2">{dt.year}</td>
                            <td className="border border-slate-300 pl-2">{dt.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
       </div>
    )
}

export default WinnerByYear
