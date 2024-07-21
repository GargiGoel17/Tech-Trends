// import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from '../redux/theme/themeSlice';
// import { signoutSuccess } from '../redux/user/userSlice';
// import { useEffect, useState } from 'react';

// export default function Header() {
//   const path = useLocation().pathname;
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const { theme } = useSelector((state) => state.theme);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
//     }
//   }, [location.search]);

//   const handleSignout = async () => {
//     try {
//       const res = await fetch('/api/user/signout', {
//         method: 'POST',
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.message);
//       } else {
//         dispatch(signoutSuccess());
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('searchTerm', searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   return (
//     <Navbar className='border-b-2'>
//       <Link
//         to='/'
//         className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
//       >
//         {/* <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'> */}
//         <span className='px-2 py-1 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 rounded-lg text-white'>
//           Tech
//         </span>
//         Trends
//       </Link>
//       <form onSubmit={handleSubmit}>
//         <TextInput
//           type='text'
//           placeholder='Search...'
//           rightIcon={AiOutlineSearch}
//           className='hidden lg:inline'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </form>
//       <Button className='w-12 h-10 lg:hidden' color='gray' pill>
//         <AiOutlineSearch />
//       </Button>
//       <div className='flex gap-2 md:order-2'>
//         <Button
//           className='w-12 h-10 hidden sm:inline'
//           color='gray'
//           pill
//           onClick={() => dispatch(toggleTheme())}
//         >
//           {theme === 'light' ? <FaSun /> : <FaMoon />}
//         </Button>
//         {currentUser ? (
//           <Dropdown
//             arrowIcon={false}
//             inline
//             label={
//               <Avatar alt='user' img={currentUser.profilePicture} rounded />
//             }
//           >
//             <Dropdown.Header>
//               <span className='block text-sm'>@{currentUser.username}</span>
//               <span className='block text-sm font-medium truncate'>
//                 {currentUser.email}
//               </span>
//             </Dropdown.Header>
//             <Link to={'/dashboard?tab=profile'}>
//               <Dropdown.Item>Profile</Dropdown.Item>
//             </Link>
//             <Dropdown.Divider />
//             <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
//           </Dropdown>
//         ) : (
//           <Link to='/sign-in'>
//             <Button gradientDuoTone='purpleToBlue' outline>
//               Sign In
//             </Button>
//           </Link>
//         )}
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse>
//         <Navbar.Link active={path === '/'} as={'div'}>
//           <Link to='/'>Home</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === '/about'} as={'div'}>
//           <Link to='/about'>About</Link>
//         </Navbar.Link>
//         {currentUser && currentUser.isAdmin && (
//           <Navbar.Link active={path === '/create-post'} as={'div'}>
//             <Link to='/create-post'>Create a Post</Link>
//           </Navbar.Link>
//         )}
//         {currentUser && currentUser.isAdmin && (
//           <Navbar.Link active={path === '/dashboard?tab=dash'} as={'div'}>
//             <Link to='/dashboard?tab=dash'>Dashboard</Link>
//           </Navbar.Link>
//         )}
//       </Navbar.Collapse>

//     </Navbar>
//   );
// }

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';

const NavLink = ({ to, children, active }) => (
  <Link
    to={to}
    className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
      active ? 'bg-gray-100 dark:bg-gray-700' : ''
    }`}
  >
    {children}
  </Link>
);

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-11xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="px-2 py-1 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 rounded-lg text-white text-xl font-semibold">
                Tech
              </span>
              <span className="text-xl font-semibold text-gray-900 dark:text-white ml-2">
                Trends
              </span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
                <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
                {currentUser && currentUser.isAdmin && (
                  <>
                    <NavLink to="/create-post" active={location.pathname === '/create-post'}>Create a Post</NavLink>
                    <NavLink to="/dashboard?tab=dash" active={location.pathname === '/dashboard'}>Dashboard</NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <form onSubmit={handleSubmit} className="mr-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </form>
              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-1 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </button>
              {currentUser ? (
                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <img className="h-8 w-8 rounded-full" src={currentUser.profilePicture} alt="" />
                    </button>
                  </div>
                  {isMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Link to="/dashboard?tab=profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Profile</Link>
                      <button onClick={handleSignout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/sign-in">
                  <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
            {currentUser && currentUser.isAdmin && (
              <>
                <NavLink to="/create-post" active={location.pathname === '/create-post'}>Create a Post</NavLink>
                <NavLink to="/dashboard?tab=dash" active={location.pathname === '/dashboard'}>Dashboard</NavLink>
              </>
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            {currentUser ? (
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={currentUser.profilePicture} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">{currentUser.username}</div>
                  <div className="text-sm font-medium leading-none text-gray-400">{currentUser.email}</div>
                </div>
              </div>
            ) : (
              <div className="px-5">
                <Link to="/sign-in">
                  <button className="w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Sign In
                  </button>
                </Link>
              </div>
            )}
            <div className="mt-3 px-2 space-y-1">
              {currentUser && (
                <>
                  <Link to="/dashboard?tab=profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Profile</Link>
                  <button onClick={handleSignout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}