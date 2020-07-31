function mascaras() {

    $('#cnpj').mask('99.999.999/9999-99');
    $('#cpf').mask('999.999.999-99');
    $('#cpfResponsavelEmpresa').mask('999.999.999-99');
    $('#cpfResponsavelProjeto').mask('999.999.999-99');
    $('#cnpjmodal').mask('99.999.999/9999-99');
    $('#cep').mask('99.999-999');
    $('#numero').mask('(99)99999-9999');
    $('#telefoneResponsavelEmpresa').mask('(99)99999-9999');
    $('#telefoneResponsavelFinanceiro').mask('(99)99999-9999');
    $('#telefoneResponsavelProjeto').mask('(99)99999-9999');
    $('#esforco').mask('999:99:99');
}

function validaCnpj() {

    jQuery.validator.addMethod("cnpj", function (cnpj, element) {

        cnpj = cnpj.replace(/[^\d]+/g, '');

        var numeros, digitos, soma, resultado, pos, tamanho,
                digitos_iguais = true;

        if (cnpj.length < 14 && cnpj.length > 15)
            return false;

        for (var i = 0; i < cnpj.length - 1; i++)
            if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
                digitos_iguais = false;
                break;
            }

        if (!digitos_iguais) {
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
        }

        return false;
    }, "Informe um CNPJ válido.");

}

$(document).ready(function () {
    mascaras();
    validaCnpj();
});

			
function validarForm(formulario, inputs) {

    setPristine(formulario, inputs, true)
    habilitaBotao()

    $(inputs, formulario).focus(function () {
        setPristine(formulario, this, false)
        habilitaBotao()
        camposVazios(formulario, inputs)
    })

    $(inputs, formulario).change(function () {
        setPristine(formulario, this, false)
        habilitaBotao()
        camposVazios(formulario, inputs)
    })

    $('input.required, textarea.required').keydown(function () {
        setPristine(formulario, this, false)
        habilitaBotao()
        camposVazios(formulario, inputs)
    })

    $('.addTarefa').click(function () {
        var div = $('.clonaTarefa').html();
        $('#tarefa').append(div);
        habilitaBotao()
        // console.log(temCamposVazios())
//					habilitaBotao();

        $('input.tarefa').click(function () {
            setPristine(formulario, this, false)
            camposVazios(formulario, inputs)
        })

        $('input.tarefa').keyup(function () {
            setPristine(formulario, this, false)
            habilitaBotao()
            camposVazios(formulario, inputs)
        })
    })

    function getPristine(elemento) {
        return elemento.attr('data-pristine')
    }

    function setPristine(formulario, inputs, condicao) {
        $(inputs, formulario).attr('data-pristine', condicao)
    }

    function temPendencia() {
        return temCamposVazios()
    }

    function habilitaBotao() {
        if (temPendencia()) {
            $('#submit', formulario).attr('disabled', 'disabled')
        } else {
            $('#submit', formulario).removeAttr('disabled')
        }
    }

    function temCamposVazios() {
        var validar = false
        $('.required').each(function (i, item) {
            if ($(item).val() == '' && $(item).is(':visible')) {
                validar = true
            }
        })
        return validar
    }

    function camposVazios(formulario, inputs) {
        $(inputs, formulario).each(function (i, item) {
            var elemento = $(item)
            var label = elemento.parent()
            var container = elemento.closest('.form-group')

            if (elemento.val() == '' && elemento.hasClass('required') && getPristine(elemento) !== "true") {
                container.addClass('has-error')
                $('span.has-error', label).remove()
                label.append('<span class="has-error">Campo obrigatório!</span>')
            }
            if (container.hasClass('has-error') && elemento.val() != '') {
                container.removeClass('has-error')
                $('span.has-error', label).remove()
            }
            habilitaBotao()
        })
    }
}

validarForm("#demanda", "input, textarea, select")