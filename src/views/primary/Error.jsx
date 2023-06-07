// import './sup.css';
import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <div className='error-page'>
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but an error occurred.</p>
      <Link to='/'>Go Home</Link>
    </div>
  );
};
