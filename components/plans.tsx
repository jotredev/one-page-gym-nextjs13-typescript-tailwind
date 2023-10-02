import Container from './shared/container';

import Title from '@/components/ui/title';
import Plan from '@/components/ui/plan';

const Plans = () => {
  return (
    <section
      id='plans'
      className='min-h-screen flex items-center justify-center'
    >
      <Container>
        <Title title='Subscribe To' titlePrimary='Plans' />
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
          <Plan name='Standard' duration={6} price={4800} priceMonth={800} />
          <Plan
            name='Fitness'
            duration={12}
            price={7200}
            priceMonth={600}
            active
          />
          <Plan
            name='Enterprise'
            duration={24}
            price={12000}
            priceMonth={500}
          />
        </div>
      </Container>
    </section>
  );
};

export default Plans;
