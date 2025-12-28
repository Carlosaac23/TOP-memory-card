export default function Card({ imageURL, pokemonName }) {
  return (
    <div className='rounded-md border border-neutral-700 p-2'>
      <img src={imageURL} alt='' />
      <h2>{pokemonName}</h2>
    </div>
  );
}
