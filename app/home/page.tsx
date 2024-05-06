import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css'

// import banner from '../../../public/Banner.webp'

const features = [
  {
    title: 'Real-Time Cursor'
  },
  {
    title: 'Real-Time Collaboration'
  },
  {
    title: 'Shared/ Private Work-Spaces'
  },
  {
    title: 'Unlimited Folders & Files'
  },
];

const HomePage = () => {
  return (
    <section className={styles.homePage}>
      <div className={styles.title}>
        <h1>
          An all-In-One <br />
          Collaboration and <br />
          Productivity Platform
        </h1>
        <div className="flex gap-4">
          <Link href={'/login'}>
            <Button
              variant="default"
              className="text-[#FF471F] hover:bg-white hover:text-[#FF471F] border-[#FF471F] hover:border-[#FF471F]"
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="default"
              className="bg-[#FF471F] text-white border-[#FF471F] hover:bg-[#FF471F]  hover:border-[#FF471F]"
            >
              Sign Up
            </Button>
          </Link>
        </div>
        <div className={styles.feat}>
          {
            features.map((feature, index) => (
              <span key={index} className='bg-white/10 p-1 pl-3 pr-3 rounded-full text-sm'>
                {feature.title}
              </span>
            ))
          }
        </div>
      </div>
      {/* <Image
        src={banner}
        alt='banner'
        width={1500}
        height={1500}
        className={styles.banner}
      /> */}
    </section>
  );
};

export default HomePage;