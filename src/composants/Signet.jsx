import '../sass/Signet.scss';
import ListeDossiers from './ListeDossiers';
import Entete from './Entete';
import BoutonPlus from './BoutonPlus';


export default function Signet() {

  return (
    <div className="Signet">
        <Entete/>
        <ListeDossiers/>
        <BoutonPlus/>
    </div>
  );
}
