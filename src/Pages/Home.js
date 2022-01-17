//components
import PlayerSelectionInput from "../Components/PlayerSelectionInput/PlayerSelectionInput";
import SecretSantaCardGenerator from "../Components/SecretSantaCardGenerator/SecretSantaCardGenerator";

export default function Home() {
  const handelSubmit = () => {};
  return (
    <div>
      <PlayerSelectionInput />
      <SecretSantaCardGenerator />
    </div>
  );
}
