import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Fosham</span>
            <span className='text-slate-700'>ESTATE</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search....' className='bg-transparent focus:outlinew-24 sm:w64'/>
            <FaSearch className='text-slate-500' />
        </form>
        <ul className='flex items-center space-x-4'>
            <Link to='/'>
            <li className='text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className='text-slate-700 hover:underline'>Sign in</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}
