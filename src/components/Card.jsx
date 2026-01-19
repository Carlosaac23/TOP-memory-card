export default function Card({ id, pokemonName, imageURL, handleClick }) {
  return (
    <div
      onClick={() => handleClick(id)}
      className='flex min-h-60 min-w-64 flex-col justify-between rounded-md border-2 border-neutral-700 p-2 shadow-md transition-transform duration-150 hover:scale-105 hover:cursor-pointer'
    >
      <img
        className='rounded-sm border bg-neutral-200'
        src={imageURL}
        alt='Pokemon image'
      />
      <h2 className='text-center text-xl tracking-wide capitalize'>
        {pokemonName}
      </h2>
    </div>
  );
}
