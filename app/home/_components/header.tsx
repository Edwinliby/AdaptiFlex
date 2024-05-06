import Image from 'next/image';
import Link from 'next/link';
// import Logo from '../../../public/adaptiflexlogo.svg';

const Header = () => {
    return (
        <header className="p-4 fixed top-0">
            <Link
                href={'/'}
                className="w-full flex gap-1 justify-left items-center"
            >
                {/* <Image
                    src={Logo}
                    alt="Adaptiflex Logo"
                    width={45}
                    height={45}
                /> */}
                <span className="font-semibold dark:text-white">
                    AdaptiFlex.
                </span>
            </Link>
        </header>
    );
};

export default Header;