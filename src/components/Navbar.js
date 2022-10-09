import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  // const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className='flex justify-between items-center h-92 bg-menu-color pl-32 pr-9'>
      <div>
        <div className='md: flex-shrink-0'>
          <img
            className='flex md:w-172 h-44 object-cover md:object-scale-down md:visible'
            src='/images/Logo-9 1.png'
            alt='Logo'
          />
        </div>
      </div>
      <div className='hidden md:flex items-center gap-8'>
        <Link className='font-Sora font-semibold text-secondary-base'>
          Home
        </Link>
        <Link className='font-Sora font-semibold text-neutral-black'>
          Our Work
        </Link>
        <Link className='font-Sora font-semibold text-neutral-black'>
          Let's Talk
        </Link>
        <Link
          className='font-Sora font-semibold text-neutral-black'
          to='/component'
        >
          Sample
        </Link>
      </div>
      {/* <button>
        <GiHamburgerMenu />
      </button> */}
    </nav>
  );
}

// className={isMobile ? 'nav-links-mobile' : 'nav-link-group'}
//         onClick={() => setIsMobile(false)}

// button className='mobile-menu-icon'
//         onClick={() => setIsMobile(!isMobile)}

// {
//   isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>;
// }
export default Navbar;
