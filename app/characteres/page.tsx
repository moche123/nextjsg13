import { getCharacteres } from "./service/characteres.service-next";

export default async function Characteres() {
  const characteres = await getCharacteres();
  return (
    <>
      {characteres.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </>
  );
}
