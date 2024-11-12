import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="container flex m-auto mt-3">
        <div className="navbar ml-3 md:ml-6">
          <Link href={'/'}>
            <button className="btn btn-ghost">whatstrackin</button>
          </Link>
        </div>
        <div className="navbar justify-end mr-3 md:ml-6">
          <button>click</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
