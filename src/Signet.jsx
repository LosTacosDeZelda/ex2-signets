import './Signet.scss';
import Dossier from './Dossier';
import ListeDossiers from './ListeDossiers';
import Entete from './Entete';
import BoutonPlus from './BoutonPlus';


export default function Signet() {

  return (
    <div className="Appli">
        <Entete/>
        <ListeDossiers/>
        <BoutonPlus/>
    </div>
  );
}
