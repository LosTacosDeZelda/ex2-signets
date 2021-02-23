import "../sass/Entete.scss";
import avatar from '../images/Raph.jpg'
import Avatar from '@material-ui/core/Avatar';

export default function Entete(props) {
    return (
      <header className="Entete">
          <p>Signets (Beta)</p>
          <div className='userInfo'>
            <p>Raphaël Jeudy</p>
            <Avatar className='Avatar' src={avatar} alt="Raphaël Jeudy"></Avatar>
          </div>
      </header>
    );
}