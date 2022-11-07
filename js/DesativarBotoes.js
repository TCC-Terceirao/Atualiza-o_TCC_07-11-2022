function filtrar() {
    var Valores = document.querySelector('#selecao').value;

    console.log(Valores);

    if(Valores == "nao_metal"){
        document.querySelector('.nao-metal').disabled = false;
        document.querySelector('.gas-nobre').disabled = true;
        document.querySelector('.metal-alcalino').disabled = true;
        document.querySelector('.metal-alcalino-terroso').disabled = true;
        document.querySelector('.semimetal').disabled = true;
        document.querySelector('.halogenio').disabled = true;
        document.querySelector('.outros-metais').disabled = true;
        document.querySelector('.metal-transicao').disabled = true;
        document.querySelector('.lantanideo').disabled = true;
        document.querySelector('.actinidio').disabled = true;
    return
    }
    
    if(Valores == "gas_nobre"){
        document.querySelector('.nao-metal').disabled = true;
        document.querySelector('.gas-nobre').disabled = false;
        document.querySelector('.metal-alcalino').disabled = true;
        document.querySelector('.metal-alcalino-terroso').disabled = true;
        document.querySelector('.semimetal').disabled = true;
        document.querySelector('.halogenio').disabled = true;
        document.querySelector('.outros-metais').disabled = true;
        document.querySelector('.metal-transicao').disabled = true;
        document.querySelector('.lantanideo').disabled = true;
        document.querySelector('.actinidio').disabled = true;
    return
    }

    if(Valores == "metal_alcalino"){
        document.querySelector('.nao-metal').disabled = true;
        document.querySelector('.gas-nobre').disabled = true;
        document.querySelector('.metal-alcalino').disabled = false;
        document.querySelector('.metal-alcalino-terroso').disabled = true;
        document.querySelector('.semimetal').disabled = true;
        document.querySelector('.halogenio').disabled = true;
        document.querySelector('.outros-metais').disabled = true;
        document.querySelector('.metal-transicao').disabled = true;
        document.querySelector('.lantanideo').disabled = true;
        document.querySelector('.actinidio').disabled = true;
    return
    }

    if(Valores == "metal_alcalino_terroso"){
        document.querySelector('.nao-metal').disabled = true;
        document.querySelector('.gas-nobre').disabled = true;
        document.querySelector('.metal-alcalino').disabled = true;
        document.querySelector('.metal-alcalino-terroso').disabled = false;
        document.querySelector('.semimetal').disabled = true;
        document.querySelector('.halogenio').disabled = true;
        document.querySelector('.outros-metais').disabled = true;
        document.querySelector('.metal-transicao').disabled = true;
        document.querySelector('.lantanideo').disabled = true;
        document.querySelector('.actinidio').disabled = true;
    return
    }

    if(Valores == "semimetal"){
        document.querySelector('.nao-metal').disabled = true;
        document.querySelector('.gas-nobre').disabled = true;
        document.querySelector('.metal-alcalino').disabled = true;
        document.querySelector('.metal-alcalino-terroso').disabled = true;
        document.querySelector('.semimetal').disabled = false;
        document.querySelector('.halogenio').disabled = true;
        document.querySelector('.outros-metais').disabled = true;
        document.querySelector('.metal-transicao').disabled = true;
        document.querySelector('.lantanideo').disabled = true;
        document.querySelector('.actinidio').disabled = true;
    return
    }

    if(Valores == "halogenio"){
        document.querySelector('.nao-metal').disabled = true;
        document.querySelector('.gas-nobre').disabled = true;
        document.querySelector('.metal-alcalino').disabled = true;
        document.querySelector('.metal-alcalino-terroso').disabled = true;
        document.querySelector('.semimetal').disabled = true;
        document.querySelector('.halogenio').disabled = false;
        document.querySelector('.outros-metais').disabled = true;
        document.querySelector('.metal-transicao').disabled = true;
        document.querySelector('.lantanideo').disabled = true;
        document.querySelector('.actinidio').disabled = true;
    return
    }

    if(Valores == "outros_metais"){
        document.querySelector('.nao-metal').disabled = true;
        document.querySelector('.gas-nobre').disabled = true;
        document.querySelector('.metal-alcalino').disabled = true;
        document.querySelector('.metal-alcalino-terroso').disabled = true;
        document.querySelector('.semimetal').disabled = true;
        document.querySelector('.halogenio').disabled = true;
        document.querySelector('.outros-metais').disabled = false;
        document.querySelector('.metal-transicao').disabled = true;
        document.querySelector('.lantanideo').disabled = true;
        document.querySelector('.actinidio').disabled = true;
    return
    }

    if(Valores == "metal_transicao"){
        document.querySelector('.nao-metal').disabled = true;
        document.querySelector('.gas-nobre').disabled = true;
        document.querySelector('.metal-alcalino').disabled = true;
        document.querySelector('.metal-alcalino-terroso').disabled = true;
        document.querySelector('.semimetal').disabled = true;
        document.querySelector('.halogenio').disabled = true;
        document.querySelector('.outros-metais').disabled = true;
        document.querySelector('.metal-transicao').disabled = false;
        document.querySelector('.lantanideo').disabled = true;
        document.querySelector('.actinidio').disabled = true;
    return
    }

    if(Valores == "lantanideo"){
        document.querySelector('.nao-metal').disabled = true;
        document.querySelector('.gas-nobre').disabled = true;
        document.querySelector('.metal-alcalino').disabled = true;
        document.querySelector('.metal-alcalino-terroso').disabled = true;
        document.querySelector('.semimetal').disabled = true;
        document.querySelector('.halogenio').disabled = true;
        document.querySelector('.outros-metais').disabled = true;
        document.querySelector('.metal-transicao').disabled = true;
        document.querySelector('.lantanideo').disabled = false;
        document.querySelector('.actinidio').disabled = true;
    return
    }
    
    if(Valores == "actinidio"){
        document.querySelector('.nao-metal').disabled = true;
        document.querySelector('.gas-nobre').disabled = true;
        document.querySelector('.metal-alcalino').disabled = true;
        document.querySelector('.metal-alcalino-terroso').disabled = true;
        document.querySelector('.semimetal').disabled = true;
        document.querySelector('.halogenio').disabled = true;
        document.querySelector('.outros-metais').disabled = true;
        document.querySelector('.metal-transicao').disabled = true;
        document.querySelector('.lantanideo').disabled = true;
        document.querySelector('.actinidio').disabled = false;
    return
    }
}

updates()