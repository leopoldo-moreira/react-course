import Button from './evento/Button'

function Evento(){

    const firstEvent = (() => console.log('Primeiro evento'));
    const secondEvent = (() => console.log('Segundo evento'));
    return(
        <>
            <p>Clique para disparar um evento</p>
            <Button event={firstEvent} text='Primeiro evento'/>
            <Button event={secondEvent} text='Segundo evento'/>
            
        </>
    )
};

export default Evento