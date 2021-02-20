import "./BoutonPlus.scss";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function BoutonPlus(props) {
    return (
        <Fab className="BoutonPlus" color="secondary" size="medium" aria-label="add">
            <AddIcon></AddIcon>
        </Fab>
    );
}