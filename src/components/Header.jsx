export default function Header() {
  return (
    <header className='flex items-center justify-between bg-neutral-700 p-4'>
      <h1 className='font-jersey text-5xl tracking-wide text-neutral-50'>
        Memory Card Game
      </h1>
      <a href='https://portfolio-steel-kappa-78.vercel.app/' target='_blank'>
        <img
          className='w-10 rounded-full'
          src='https://avatars.githubusercontent.com/u/127145057?v=4'
          alt='Profile pic of my personal GitHub account'
        />
      </a>
    </header>
  );
}
