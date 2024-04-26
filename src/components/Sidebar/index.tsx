import { useNavigate, Link } from 'react-router-dom';
import './index.css'

interface ISidebar {
  screenWidth: number
}

function Sidebar(props: ISidebar) {
    const { screenWidth } = props
    const navigate = useNavigate();

    return (
      <>
        {screenWidth <= 768 ? (
          <div className="">
            <button onClick={() => navigate('dashboard')} className="mt-4 p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18v18H3V3zm5 8a1 1 0 110-2 1 1 0 010 2zM3 12h6M13 8h8M13 16h8"
                />
              </svg>
            </button>
            <button onClick={() => navigate('list')} className="mt-4 p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
                <span className="sr-only">Search</span>
            </button>
          </div>

        ) : (
            <div className="sidebar">
              <ul>
                <li>
                  <Link to={'dashboard'}>Dashboard</Link>
                </li>
                <li>
                  <Link to={'list'}>List</Link>
                </li>
              </ul>
            </div>
        )}
      </>
    )
}

export default Sidebar
