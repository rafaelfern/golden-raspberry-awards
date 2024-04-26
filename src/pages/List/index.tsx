import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
import SearchInputBoolean from '../../components/SearchInputBoolean';
import SearchInputYear from '../../components/SearchInputYear';
import Backdrop from '../../components/backdrop';
import { SkipBack, ChevronLeft, ChevronRight, SkipForward } from 'react-feather';

function List() {
    const { data, loading, error, execute } = useApi()
    const [currentPage, setCurrentPage] = useState(1);
    const [disabledPrevBtn, setDisabledPrevBtn ] = useState(false);
    const [disabledNextBtn, setDisabledNextBtn] = useState(false);
    const [winnerSelection, setWinnerSelection] = useState('');
    const [yearInput, setYearInput] = useState("");

    const handlePageChange = page => setCurrentPage(page);

    const getPageNumbers = () => {
        const maxPagesToShow = 5;
        const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(startPage + maxPagesToShow - 1, data?.totalPages);
        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const handleSearchByYear = event => {
        setYearInput(event.target.value);
        const year = event.target.value.length === 4 ? event.target.value : null;
        if (year) execute('get',{page: 0, size: 10, winner: winnerSelection, year: year })
    }

    useEffect(() => {
        if(currentPage === 1) {
            setDisabledPrevBtn(true);
            setDisabledNextBtn(false);
        }else if(currentPage === data?.totalPages){
            setDisabledNextBtn(true);
            setDisabledPrevBtn(false);
        }else{
            setDisabledPrevBtn(false);
            setDisabledNextBtn(false);
        }
    },[currentPage])



    const previousPage = () => {
        if(currentPage > 1) { 
            setCurrentPage(prevState => prevState - 1);
            setDisabledPrevBtn(true);
        }
    }

    const backFirstPage = () => {
        if(currentPage > 1) {
            setCurrentPage(1);
            setDisabledPrevBtn(true);
        }
    }

    const nextPage = () => {
        if(currentPage !== data?.totalPages) {
            setCurrentPage(prevState => prevState + 1);
        }else{
            setDisabledNextBtn(true)
        }
    }

    const advanceLastPage = () => {
        if(currentPage < data?.totalPages) {
            setCurrentPage(data?.totalPages);
            setDisabledNextBtn(true);
        }
    }

    const renderBackButton = () => (
        <button 
            onClick={() => previousPage()} 
            className={`p-2.5 ms-2 text-sm font-medium text-white ${disabledPrevBtn ? 'bg-gray-400 rounded-lg border border-gray-400' : 'bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800'} focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            disabled={disabledPrevBtn}
        >
            <ChevronLeft size={10} />
        </button>
    )

    const renderFirstPageButton = () => (
        <button 
            onClick={() => backFirstPage()} 
            className={`p-2.5 ms-2 text-sm font-medium text-white ${disabledPrevBtn ? 'bg-gray-400 rounded-lg border border-gray-400' : 'bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800'} focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            disabled={disabledPrevBtn}
        >
            <SkipBack size={10} />
        </button>
    )
    
    const renderNextButton = () => (
        <button 
            onClick={() => nextPage()} 
            className={`p-2.5 ms-2 text-sm font-medium text-white ${disabledNextBtn ? 'bg-gray-400 rounded-lg border border-gray-400' : 'bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800'} focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            disabled={disabledNextBtn}
        >
            <ChevronRight size={10} />
        </button>
    )

    const renderLastPageButton = () => (
        <button 
            onClick={() => advanceLastPage()} 
            className={`p-2.5 ms-2 text-sm font-medium text-white ${disabledNextBtn ? 'bg-gray-400 rounded-lg border border-gray-400' : 'bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800'} focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            disabled={disabledNextBtn}
        >
            <SkipForward size={10} />
        </button>
    )


    useEffect(
        function getListMovies(){
            execute('get',{page: currentPage, size: 10, winner: winnerSelection })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[currentPage, winnerSelection])

    if(error) return <p>Ocorreu um erro: {error.message}</p>

    return (
        <div>
            <div className="w-full text-left mb-4">
                <span className='text-2xl font-bold'>List movies</span>
            </div>
            <table className="table-fixed text-left w-full">
                <thead className="text-center">
                    <tr>
                        <th className='border border-spacing-2 bg-gray-200 border-slate-300 pl-2'>ID</th>
                        <th className='border bg-gray-200 border-slate-300 pl-2 pr-2 flex flex-col'>
                            Year
                            <SearchInputYear value={yearInput} onChange={handleSearchByYear}/>
                        </th>
                        <th className='border bg-gray-200 border-slate-300 pl-2'>Title</th>
                        <th className='border bg-gray-200 border-slate-300 pl-2 pr-2 flex flex-col'>
                            Winner?
                            <SearchInputBoolean value={winnerSelection} onChange={setWinnerSelection}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.content?.map(movie => (
                        <tr key={movie.id}>
                            <td className="border border-slate-300 pl-2">{movie.id}</td>
                            <td className="border border-slate-300 pl-2">{movie.year}</td>
                            <td className="border border-slate-300 pl-2">{movie.title}</td>
                            <td className="border border-slate-300 pl-2">{movie.winner ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                {renderFirstPageButton()}
                {renderBackButton()}
                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        className={`mx-1 px-3 py-1 text-xs ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}
                {renderNextButton()}
                {renderLastPageButton()}
            </div>
            <Backdrop isLoading={loading} />
        </div>
    )
}

export default List
