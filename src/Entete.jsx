import "./Entete.scss";
import Avatar from '@material-ui/core/Avatar';

export default function Entete(props) {
    return (
      <header className="Entete">
          <p>Signets (Beta)</p>
          <div className='userInfo'>
            <p>Raphaël Jeudy</p>
            <Avatar className='Avatar' src="img/avatars/Raph.jpg"></Avatar>
          </div>
      </header>
    );
}