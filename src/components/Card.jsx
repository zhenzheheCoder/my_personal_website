const Card = (props) =>{
   
    return (
        
        <div style ={{ padding: "30px",}}>
            <div style ={{ padding: "10px", fontSize: "20pt"}}> {props.obj.name}</div>
            <div style ={{ padding: "10px", fontSize: "15pt"}}>{props.obj.location}</div>
            <div style ={{ padding: "10px",}}>
                {props.obj.info.map(function(data){
                    return(<div style ={{ padding: "5px",}}>
                        /{data}
                    </div>);
                })}
            </div>
        </div>
    )
}

export default Card

