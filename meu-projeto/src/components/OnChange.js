function OnChange(){

    function NewText(e){
        const textElement =  document.getElementById('currentText');
        return textElement.innerText = `Voce Digitou: ${e.target.value}`;
    }

    return(
        <>
            <h1 id='currentText'>Voce Digitou:</h1>
            <input id='inputTest' type='text' onChange={NewText} placeholder='digite algo'></input>
        </>
    )
};

export default OnChange;