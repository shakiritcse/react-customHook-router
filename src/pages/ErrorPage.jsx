
import { useRouteError } from 'react-router';
import '../ErrorPage.css';
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.statusText)
  
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className='error-message'>{error.statusText || error.message}</i>
      </p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
