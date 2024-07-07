import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../components/Logo';
import HomeImage from '../public/output.jpg';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HomeImage} alt="Hero" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
        <Logo />
        <p>
          Generate SEO-optimized blog posts in just one click.
        </p>
        <Link href="/post/new" className="btn text-center">
          Begin
        </Link>
      </div>
    </div>
  );
}
