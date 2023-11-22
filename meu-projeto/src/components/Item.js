import PropTypes from 'prop-types'

function Item({marca,anoLancamento}){
    return(
        <>
            <li>{marca} - {anoLancamento}</li>
        </>
    )
};

Item.propTypes={
    marca: PropTypes.string.isRequired
}

Item.defaultProps = {
    
    anoLancamento: 99999
};

export default Item;