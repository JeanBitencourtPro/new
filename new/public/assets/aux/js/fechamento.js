function validaFormularioFechamento() {
    $('#fechamento').validate({
        submitHandler: function (form) {
            // $('#modal-sucesso').modal('show');
            form.submit();
        },
        errorElement: 'span',
        errorClass: 'has-error',
        errorPlacement: function(error, element){
            if (element.attr('name') === 'teste') {
                element.closest('.col-sm-7').append(error)
            } else {
                element.parent().append(error);
            }
        },
        focusInvalid: true,
        rules: {
            'cnpjl': {
                required: true,
                cnpjl: true
            },
            'razaosocial': {
                required: true
            },
            'nomefantasia': {
                required: true
            },
            'produtos': {
                required: true
            },
            'valorativacao': {
                required: true
            },
            'datafechamento': {
                required: true
            },
            'prazoentrega': {
                required: true
            },
            'customizacoes': {
                required: true
            },
            'escopo': {
                required: true
            },
            'responsaveldesk': {
                required: true
            },
            'teste': {
                required: true
            },
            'responsavelmobile': {
                required: true
            },
            'integracaoerp': {
                required: true
            },
            'tiposustentacao': {
                required: true
            },
            'sustentacao': {
                required: true
            },
            'parcela': {
                required: true
            },
            'nomeloja': {
                required: true
            },
            'dominio': {
                required: true
            },
            'descontosustentacao': {
                required: true
            },
            'projetos': {
                required: true
            }
        },
        messages: {
            'cnpjl': {
                required: 'Campo Obrigatório!'
           },
            'razaosocial': {
                required: 'Campo Obrigatório!'
            },
            'nomefantasia': {
                required: 'Campo Obrigatório!'
            },
            'produtos': {
                required: 'Campo Obrigatório!'
            },
            'valorativacao': {
                required: 'Campo Obrigatório!'
            },
            'datafechamento': {
                required: 'Campo Obrigatório!'
            },
            'prazoentrega': {
                required: 'Campo Obrigatório!'
            },
            'customizacoes': {
                required: 'Campo Obrigatório!'
            },
            'escopo': {
                required: 'Campo Obrigatório!'
            },
            'responsaveldesk': {
                required: 'Campo Obrigatório!'
            },
            'responsavelmobile': {
                required: 'Campo Obrigatório!'
            },
            'teste': {
                required: 'Campo Obrigatório!'
            },
            'integracaoerp': {
                required: 'Campo Obrigatório!'
            },
            'tiposustentacao': {
                required: 'Campo Obrigatório!'
            },
            'sustentacao': {
                required: 'Campo Obrigatório!'
            },
            'parcela': {
                required: 'Campo Obrigatório!'
            },
            'nomeloja': {
                required: 'Campo Obrigatório'
            },
            'dominio': {
                required: '!'
            },
            'descontosustentacao': {
                required: 'Campo Obrigatório!'
            },
            'projetos': {
                required: 'Campo Obrigatório!'
            }
        },
        invalidHandler: function (event, validator) { //Exibi o alerta de erro no formulário quando clicar em submit
            $('.alert-error', $('.login-form')).show();
        },
        highlight: function (e) {
            $(e).closest('.form-group').addClass('has-error');
        },
        success: function (e) {
            $(e).closest('.form-group').removeClass('has-error');
            $(e).remove();
        }
    });
}

function textAreaFechamento() {
    $(document).ready(function () {
        if ($("#descricao").length > 0) {
            tinymce.init({
                selector: "textarea#descricao",
                theme: "modern",
                height: 300,
                plugins: [
                ],
                toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
                style_formats: [
                    {title: 'Bold text', inline: 'b'},
                    {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                    {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                    {title: 'Example 1', inline: 'span', classes: 'example1'},
                    {title: 'Example 2', inline: 'span', classes: 'example2'},
                    {title: 'Table styles'},
                    {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
                ]
            });
        }
    });
}
function textAreaCustomizacoes() {
    $(document).ready(function () {
        if ($("#customizacoes").length > 0) {
            tinymce.init({
                selector: "textarea#customizacoes",
                theme: "modern",
                height: 300,
                plugins: [
                ],
                toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
                style_formats: [
                    {title: 'Bold text', inline: 'b'},
                    {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                    {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                    {title: 'Example 1', inline: 'span', classes: 'example1'},
                    {title: 'Example 2', inline: 'span', classes: 'example2'},
                    {title: 'Table styles'},
                    {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
                ]
            });
        }
    });
}

            
$(document).ready(function () {
    
    /********** comercial/fechamento.blade **********/
//    validaCnpjFechamento();
    validaFormularioFechamento();
    textAreaFechamento();
    textAreaCustomizacoes();
    
});