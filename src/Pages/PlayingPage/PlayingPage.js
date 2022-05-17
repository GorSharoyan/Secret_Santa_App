//components
import PlayerSelectionInput from "../../Components/PlayerSelectionInput/PlayerSelectionInput";
import SecretSantaCardGenerator from "../../Components/SecretSantaCardGenerator/SecretSantaCardGenerator";

//UI
import "./PlayingPage.css";

export default function PlayingPage() {
  return (
    <div className="page">
      <SecretSantaCardGenerator />
    </div>
  );
}
