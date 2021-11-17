const  listaCores  =  [ '0' ,  '1' ,  '2' ,  '3' ,  '4' ,  '5' ,  '6' ,  '7' ,  '8' ,  '9' ,  'A' ,  'B ' ,  ' C ' ,  ' D ' ,  ' E ' ,  ' F ' ]

 botão var =  documento . getElementById ( 'botao' )
var  span  =  document . getElementById ( 'texto_cor' )
var  cor

function  corRandomico ( ) {
     
    var  str  =  '#' ;

    enquanto  ( comprimento do str . < 7 ) {   
        str + = matemática . floor ( Math . random ( )  *  listaCores . length )
    }
return  str
}


function  quandoClicar ( ) {

    cor  = corRandomico ( )

    documento . corpo . estilo . backgroundColor =  cor
    extensão . textContent  =  cor
    }

botão . addEventListener ( 'click' , quandoClicar )
