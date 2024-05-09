import { Link } from 'react-router-dom';
import './index.scss';
import { Home, List } from 'react-feather';
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
            <Home />
          </button>
          <button onClick={() => window.location.assign('list')} className="button">
            <List />
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
