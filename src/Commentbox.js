import Faker from 'faker';
function Comment(props) { 
    return (
<div className="ui cards">
    <div className="card">
        <div className="content">
            <img className="right floated mini ui image" src={Faker.image.image()} />
            <div className="header">
                {props.name}
            </div>
            <div className="meta">
                {props.place}
            </div>
            <div className="description">
                {props.info}
            </div>
        </div>

    </div>
</div> 
    )
};
export default Comment;