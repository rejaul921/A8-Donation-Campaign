
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <h2 className='text-2xl font-bold h-[100vh] flex justify-center items-center'>Oops! You have lost the Route.Please go back to <Link to="/"> <span className='text-red-800 bg-slate-100 p-1'>HOME</span> </Link> </h2>
            
        </div>
    );
};

export default ErrorPage;