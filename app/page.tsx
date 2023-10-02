import About from '@/components/about';
import Hero from '@/components/hero';
import Plans from '@/components/plans';
import Services from '@/components/services';
import Trainers from '@/components/trainers';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Plans />
      <Trainers />
      <About />
    </div>
  );
}
