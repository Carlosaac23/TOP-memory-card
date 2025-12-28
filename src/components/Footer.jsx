export default function Footer() {
  return (
    <footer className='font-jersey mt-auto bg-neutral-700 p-4 text-neutral-50'>
      <p className='text-center text-lg font-light tracking-wide'>
        Rights Reserved &copy;{' '}
        <a
          className='hover:underline hover:underline-offset-2'
          href='https://portfolio-steel-kappa-78.vercel.app/'
          target='_blank'
        >
          Carlos Acosta
        </a>{' '}
        {new Date().getFullYear()}{' '}
      </p>
    </footer>
  );
}
