import "../sass/ListeDossiers.scss"
import Dossier from './Dossier';
import tabDossier from "../data/dossier.json";

export default function ListeDossiers(props) {
    return (
        <section className="ListeDossiers">
            {tabDossier.map(signet => 
            <Dossier key={signet.id} id={signet.id} titre={signet.titre} couleur={signet.couleur} dateDeModif={signet.dateDeModif}/>
        )}
        </section>
        
    );
}