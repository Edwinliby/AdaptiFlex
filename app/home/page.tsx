import { Button } from '@/components/ui/button';
// import Image from 'next/image';
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
          <Link href='https://humble-glowworm-59.accounts.dev/sign-in'>
            <Button
              variant="default"
            >
              Sign in
            </Button>
          </Link>
          <Link href='https://humble-glowworm-59.accounts.dev/sign-up'>
            <Button
              variant="default"
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
        priority
        className={styles.banner}
      /> */}
    </section>
  );
};

export default HomePage;