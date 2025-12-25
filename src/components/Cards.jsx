import Card from './Card';

export default function Cards() {
  return (
    <section>
      <div className='flex gap-2 p-4'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
