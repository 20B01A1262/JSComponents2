import Faker from 'faker'; 
import './styles.css';
function Button(props) {
    return ( 
        <div className='cpnt'>
<div  className="ui cards">
<div className="extra content">
{props.children}
    <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
    </div>
</div>
</div> 
</div>
    )
};
export default Button;