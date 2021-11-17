const  listaCores  =  [ 'verde' , '# FA67CD' , '# 777ABC' , 'rgb (200,45,0)' ]

 botão var =  documento . getElementById ( 'botao' )
var  input  =  document . getElementById ( 'input_cor' )
var  span  =  document . getElementById ( 'texto_cor' )

function  numeroRandomico ( ) {
    return  Math . floor ( Math . random ( )  *  listaCores . length )
}

function  quandoClicar ( ) {
    var  cor 
    
    if ( entrada . valor ) {
          cor =  entrada . valor
    } else {
        var  randômico = numeroRandomico ( )
        CR =  listaCores [ randômico ]
    }

    documento . corpo . estilo . backgroundColor =  cor
    extensão . textContent  =  cor

}
function  numeroHex ( ) {
    
}

botão . addEventListener ( 'click' , quandoClicar )
