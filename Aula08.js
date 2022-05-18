function podeSubir ( altura , acomp ) {
    if ( altura >= 1.40 && altura < 2.00 ) {
        return "acesso autorizado";
    } else if ( ( altura < 1.40 && acomp) || ( altura < 1.20 && acomp ) ) {
        return "acesso autorizado com acompanhante";
    } else  {
        return "acesso negado";
    } 
}

let altura = 2.00 ;
let acomp = true ; 

console.log (podeSubir( altura , acomp ));


// EXERCICIO I
// 1. Escreva     um     programa     para     ler     2     valores     (considere     que          não     serão
//     informados    valores    iguais)    e    escrever    o    maior    deles.

function valorMaior ( x , y ) {
    if ( x > y ) {
        return x ;
    } else {
        return y;
    }
}
let x = 3;
let y = 2;

console.log (valorMaior( x , y ));

// EXERCICIO II
// 2. Escreva     um     programa     para     ler     o     ano     de     nascimento     de     uma     pessoa     e
//     escrever     uma     mensagem     que     diga     se     ela     poderá     ou     não     votar     este     ano
//     (não    é    necessário    considerar    o    mês    em    que    ela    nasceu).

function podeVotar ( ano ) {
    if ( ano <= 2006 ) {
        return "pode votar, man" ;
    } else {
        return "não pode votar, guri";
    }
}
let idade = 2006;

console.log ( podeVotar ( idade ));


// EXERCICIO III
// 3. Escreva     um     programa     que     verifique     a     validade     de     uma     senha     fornecida
//     pelo     usuário.     A     senha     válida     é     o     número     1234.    Devem     ser    impressas     as
//     seguintes    mensagens:
//     ACESSO    PERMITIDO    caso    a    senha    seja    válida.
//     ACESSO    NEGADO    caso    a    senha    seja    inválida.

function validarSenha ( senha ) {
    if ( senha == 1234 ) {
        return "ACESSO PERMITIDO" ;
    } else {
        return "ACESSO NEGADO";
    }
}
let senha = 1234;

console.log ( validarSenha ( senha ));



// EXERCICIO IV
// 4. As    maçãs     custam     R$     0,30     cada     se     forem     compradas    menos     do     que     uma
//     dúzia,     e     R$     0,25     se     forem     compradas     pelo     menos     doze.     Escreva     um
//     programa     que     leia     o     número     de     maçãs     compradas,     calcule     e     escreva     o
//     valor    total    da    compra.

function valorCompra ( qtd ) {
    if ( qtd < 12 ) {
        return ( qtd * 0.30) ;
    } else {
        return ( qtd * 0.25);
    }
}
let qtd = 12;

console.log ( valorCompra ( qtd ));


// EXERCICIO V
// 5. Tendo     como     entrada     a     altura     e     o     sexo     (codificado     da     seguinte     forma:
//     1:feminino          2:masculino)     de     uma     pessoa,     construa     um     programa     que
//     calcule    e    imprima    seu    peso    ideal,    utilizando    as    seguintes
//     Fórmulas:
//     - para    homens:    (72.7    *    Altura)    – 58
//     - para    mulheres:    (62.1    *    Altura)    – 44.7


function pesoIdeal ( alt , sexo ) {
    if ( sexo == 1 ) {
        return ( ( 62.1 * alt ) - 44.7 ) ;
    } else {
        return ( ( 72.7 * alt ) - 58 ) ;
    }
}

let alt = 1.83 ;
let sexo = 1 ;

console.log ( pesoIdeal ( alt , sexo ));