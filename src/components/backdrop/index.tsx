import Spinner from '../Spinner';
import './index.scss';

interface IBackdrop {
  isLoading: boolean;
}

const Backdrop = ({ isLoading }: IBackdrop) => {
  return (
    <>
      {isLoading && (
        <div data-testid="backdrop" className="backdrop-content fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Backdrop;
