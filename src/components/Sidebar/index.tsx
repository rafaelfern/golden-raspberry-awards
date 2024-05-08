import { Link } from 'react-router-dom';
import './index.scss';

interface ISidebar {
  screenWidth: number;
}

function Sidebar(props: ISidebar) {
  const { screenWidth } = props;

  return (
    <>
      {screenWidth <= 768 ? (
        <div data-testid="sidebar" className="sidebar">
          <button role="button" onClick={() => window.location.assign('dashboard')} className="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3zm5 8a1 1 0 110-2 1 1 0 010 2zM3 12h6M13 8h8M13 16h8"
              />
            </svg>
          </button>
          <button onClick={() => window.location.assign('list')} className="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
        </div>
      ) : (
        <div data-testid="sidebar" className="sidebar">
          <ul>
            <li role="button" className="btn-link">
              <Link to={'dashboard'}>Dashboard</Link>
            </li>
            <li role="button">
              <Link to={'list'}>List</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
