/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from '@tanstack/react-location';

import { useAuthStore } from '../store/authStore';
import { logout } from '../utils/api';

const Header = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const logoutHandler = async () => {
    const response = await logout();
    if (response) {
      setUser(null);
    }
  };

  return (
    <header className="navbar bg-base-100 shadow-sm sticky top-0 left-0 z-10 px-1 md:px-10">
      <div className="flex-1">
        <Link
          className="btn btn-ghost normal-case text-xl text-gray-700 no-animation content-center flex items-center gap-2"
          to="/highlights"
        >
          <img src="./logo.svg" alt="Logo" className="w-8" /> <span>Video Share</span>
        </Link>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <div className="flex items-center gap-2">
            <span className="normal-case text-gray-700">
              Hi, {user.display_name || 'anonymous'}!
            </span>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar no-animation cursor-pointer">
                <div className="w-10 rounded-full">
                  <img src={user.avatar_url || './default_avatar.svg'} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-md w-52 bg-base-100"
              >
                <li>
                  <button onClick={() => void logoutHandler()}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
