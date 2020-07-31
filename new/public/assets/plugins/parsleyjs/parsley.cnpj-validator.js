'use strict';

(function ($) {
    window.Parsley.addValidator('validcnpj', function (value, requirement) {
        cnpj = value.replace(/[^\d]+/g, ''); alert(cnpj);
        if (cnpj == '')
            return false;

        if (cnpj.length != 14)
            return false;

// Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
                cnpj == "11111111111111" ||
                cnpj == "22222222222222" ||
                cnpj == "33333333333333" ||
                cnpj == "44444444444444" ||
                cnpj == "55555555555555" ||
                cnpj == "66666666666666" ||
                cnpj == "77777777777777" ||
                cnpj == "88888888888888" ||
                cnpj == "99999999999999")
            return false;

// Valida DVs
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0, tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;

//            var   cnpj        = value.replace(/[^0-9]/g, '')
//                , len         = cnpj.length - 2
//                , numbers     = cnpj.substring(0,len)
//                , digits      = cnpj.substring(len)
//                , add         = 0
//                , pos         = len - 7
//                , invalidCNPJ = [
//                    '00000000000000',
//                    '11111111111111',
//                    '22222222222222',
//                    '33333333333333',
//                    '44444444444444',
//                    '55555555555555',
//                    '66666666666666',
//                    '77777777777777',
//                    '88888888888888',
//                    '99999999999999'
//                ]
//                , result
//                ;
//
//
//            if ( cnpj.length < 11 || $.inArray(cnpj, invalidCNPJ) !== -1 ) {
//                return false;
//            }
//
//            for (i = len; i >= 1; i--) {
//                add = add + parseInt(numbers.charAt(len - i)) * pos--;
//                if (pos < 2) { pos = 9; }
//            }
//
//            result = (add % 11) < 2 ? 0 : 11 - (add % 11);
//            if (result != digits.charAt(0)) {
//                return false;
//            }
//
//            len = len + 1;
//            numbers = cnpj.substring(0,len);
//            add = 0;
//            pos = len - 7;
//
//            for (i = 13; i >= 1; i--) {
//                add = add + parseInt(numbers.charAt(len - i)) * pos--;
//                if (pos < 2) { pos = 9; }
//            }
//
//            result = (add % 11) < 2 ? 0 : 11 - (add % 11);
//            if (result != digits.charAt(1)) {
//                return false;
//            }
//
//            return true;

    }, 32)
            .addMessage('pt-br', 'validcnpj', 'Este campo deve ser um CNPJ válido.');

}(window.jQuery));
