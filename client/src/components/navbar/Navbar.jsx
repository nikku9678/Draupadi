import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate ,Link} from 'react-router-dom'
import { Base_url } from '../../config'
import axios from 'axios'
import toast from 'react-hot-toast'
import { authActions } from '../../redux/store'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const token = localStorage.getItem("user");
    let isLogin = useSelector((state) => state.isLogin);
    let {user} = JSON.parse(localStorage.getItem("user")) || ""
    isLogin = isLogin || localStorage.getItem("user");
    console.log(user)

    const navigation = [
      { name: 'Home', href: '/', current: true },
      { name: 'Why the Dias?', href: '/dias', current: false },
      { name: 'Find an Expert', href: '/find-expert', current: false },
    ]
    const speakerNavigation = [
      { name: 'Home', href: '/', current: true },
      { name: 'Why the Dias?', href: '/dias', current: false },
      { name: 'Find an Expert', href: '/find-expert', current: false },
    ]
    const orgNavigation = [
      { name: 'Home', href: '/', current: true },
      { name: 'Why the Dias?', href: '/dias', current: false },
      { name: 'Find an Expert', href: '/find-expert', current: false },
      { name: 'Org', href: '/find-expert', current: false },
    ]
    const adminNavigation = [
      { name: 'Home', href: '/', current: true },
      { name: 'user', href: '/ad-user', current: false },
      { name: 'Speaker', href: '/ad-speaker', current: false },
      { name: 'Organization', href: '/ad-org', current: false },
      { name: 'Help', href: '/help', current: false },
      { name: 'Recomended Speaker', href: '/recom', current: false },
      // { name: 'Register as an Expert', href: '/register', current: false },
    ]
    const handleLogout = async () => {
      console.log("hello")
      try {
        await axios.get(`${Base_url}/user/logout`, {
          withCredentials: true,
        });
  
        toast.success("Logged Out Successfully");
        dispatch(authActions.logout());
        navigate("/");
        localStorage.clear();
      } catch (error) {
        toast.error(error);
      }
    };
  


  return (
    <Disclosure as="nav" className="bg-pink-50 py-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto"
                    src="images/logo.webp"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {user && user.role==='Organization' ? orgNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-[1rem] font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    )):user && user.isAdmin===true ? adminNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-[1rem] font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    )): user && user.role ==='Speaker ' ?speakerNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-[1rem] font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    )):navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-[1rem] font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                {
                  token ? <><button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-7 w-7" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-5">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-[1rem] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-9 w-9 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      
                      {
                        user && user.role==="user" ? <><Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/user-profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item></>: user && user.role==='Speaker' ? <><Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/speaker-profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item><Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/s-verify"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Get Verified
                          </Link>
                        )}
                      </Menu.Item><Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/s-event"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            My Events
                          </Link>
                        )}
                      </Menu.Item></>: user && user.role==='Organization' ? <><Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/org-profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item><Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/org-verify"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Get Verified
                          </Link>
                        )}
                      </Menu.Item><Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Requests event
                          </a>
                        )}
                      </Menu.Item></>:<><Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/admin-profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item><Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Get Verified
                          </a>
                        )}
                      </Menu.Item></>
                      }
                      
                      <Menu.Item >
                        {({ active }) => (
                          <a
                           to='/'
                          onClick={handleLogout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu></>: <><Link to='/register'
                  type="button"
                  className="mx-3 relative rounded-full p-1 text-black-400 "
                >
                  Register
                </Link>
                <Link to='/login'
                  type="button"
                  className="mx-3 relative rounded-full p-1 text-black-400 "
                >
                  Login
                </Link></>
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
