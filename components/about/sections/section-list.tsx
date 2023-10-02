import ButtonPrimary from '@/components/ui/button-primary';

const SectionList = () => {
  return (
    <section className='flex-1 flex flex-col items-center gap-8'>
      <ul className='space-y-4 text-xl'>
        <li className='relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4'>
          Best Gym
        </li>
        <li className='relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4'>
          Experts Coach
        </li>
        <li className='relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4'>
          Flexible Workout Time
        </li>
        <li className='relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4'>
          Good Workout Facilities
        </li>
        <li className='relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4'>
          Consultation With Experts
        </li>
      </ul>
      <ButtonPrimary type='button' text='See More Benifits' />
    </section>
  );
};

export default SectionList;
