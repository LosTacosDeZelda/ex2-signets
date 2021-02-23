import "../sass/Dossier.scss";
import Sort from '@material-ui/icons/Sort';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from "@material-ui/core/Fab";

export default function Dossier(props) {

  const styleDossier = {
    backgroundImage: `url(images-dossiers/${props.id}.png)`
  };

  const styleInfo = {
    backgroundColor: props.couleur
  }

  function moreOptions(params) {
    alert("Plus d'options dans " + props.titre + ", aaaah c'est trop fantastique");
  }

    return (
      <div className="Dossier" style={styleDossier}>
        <Fab color="primary" className="sortIcon" size="small">
          <Sort color="default" fontSize="medium"/>
        </Fab>
        <div className="info" style={styleInfo}>
          <h3>{props.titre}</h3>
          <p>Modifié : {props.dateDeModif}</p>
          <IconButton className='moreIcon' onClick={moreOptions}>
            <MoreVertIcon color='action'/>
          </IconButton>
        </div>
      </div>
    );
}