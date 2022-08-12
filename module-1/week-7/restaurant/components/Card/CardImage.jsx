import './Card.css'

export const CardImage = (props) =>{
    return(
        <div><img src={props.src} alt={props.alt} /></div>
    )
}