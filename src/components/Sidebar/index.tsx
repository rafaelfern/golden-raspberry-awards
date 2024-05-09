import { Link, useLocation } from 'react-router-dom';
import './index.scss';
import { Home, List } from 'react-feather';
interface ISidebar {
  screenWidth: number;
}

function Sidebar(props: ISidebar) {
  const { screenWidth } = props;
  const location = useLocation();
  return (
    <>
      {screenWidth <= 768 ? (
        <div data-testid="sidebar" className="sidebar">
          <button role="button" onClick={() => window.location.assign('dashboard')} className="button">
            <Home />
          </button>
          <button onClick={() => window.location.assign('list')} className="button">
            <List />
          </button>
        </div>
      ) : (
        <div data-testid="sidebar" className="sidebar">
          <ul>
            <li role="button">
              <Link to={'dashboard'} className={location.pathname === '/dashboard' ? 'btn-link active' : 'btn-link'}>
                Dashboard
              </Link>
            </li>
            <li role="button">
              <Link to={'list'} className={location.pathname === '/list' ? 'active' : ''}>
                List
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
