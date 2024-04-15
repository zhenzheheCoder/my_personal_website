import Card from './Card'


const CardContainer = (obj) =>{
    return (
        <div>
            {obj.map(function(data) {
      return (
        <Card obj={data}/>
      )
    })}
        </div>
    )
}

export default CardContainer