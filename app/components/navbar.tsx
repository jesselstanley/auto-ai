import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faHistory, faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="w-64 bg-primary-bg h-screen p-4 flex flex-col">
      <ul className="space-y-2 flex-grow">
        <li>
          <Link href="/" className="flex items-center p-2 text-primary-text hover:bg-hover-bg rounded transition duration-150 ease-in-out">
            <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-3" />
            Home
          </Link>
        </li>
        <li>
          <Link href="/manuals" className="flex items-center p-2 text-primary-text hover:bg-hover-bg rounded transition duration-150 ease-in-out">
            <FontAwesomeIcon icon={faBook} className="w-5 h-5 mr-3" />
            Manuals
          </Link>
        </li>
        <li>
          <Link href="/history" className="flex items-center p-2 text-primary-text hover:bg-hover-bg rounded transition duration-150 ease-in-out">
            <FontAwesomeIcon icon={faHistory} className="w-5 h-5 mr-3" />
            History
          </Link>
        </li>
      </ul>
      <div className="mt-auto">
        <div className="flex items-center my-4">
          <hr className="flex-grow border-primary-text/30" />
          <span className="px-3 text-primary-text/60 text-sm">Settings</span>
          <hr className="flex-grow border-primary-text/30" />
        </div>
        <Link href="/settings" className="flex items-center p-2 text-primary-text hover:bg-hover-bg rounded transition duration-150 ease-in-out">
          <FontAwesomeIcon icon={faCog} className="w-5 h-5 mr-3" />
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;