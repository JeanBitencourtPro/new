
TableManageButtons.init();
function dataTableContatos(){
    $(document).ready(function () {
        $('#datatable-colvid').DataTable({
            "dom": 'C<"clear">lfrtip',
            "colVis": {
                "buttonText": "Change columns"
            }
        });
    });
}

// Exibe o contato na modal
function exibirContatoModal(){
    $('.exibir_contato').on('click', function () {

        var idCliente = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibircontato',
            data: {
                idCliente: idCliente
            },
            dataType: 'json',
            success: function (data) {

                $('#exibirContato').html(data.html);

            },
            error: function () {

                alert('erro');
                return;
            }
        });
    });
}

// Valida os campos do Formulário em cadastro de contatos.
function validaCamposFormulario() {
    $('#cadastra_contato').validate({
        submitHandler: function (form) {
            form.submit();
        },
        errorElement: 'span',
        errorClass: 'has-error',
        focusInvalid: true,
        rules: {
            'nomecompleto': {
                required: true
            },
            'primeironome': {
                required: true
            },
            'email': {
                required: true
            }
        },
        messages: {
            'nomecompleto': {
                required: 'Campo Obrigatório!'
            },
            'primeironome': {
                required: 'Campo Obrigatório!'
            },
            'email': {
                required: 'Campo Obrigatório!'
            }
        },
        invalidHandler: function (event, validator) { //display error alert on form submit
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
			
function adicionaCampoExtraDentroDaModal(){
    $('#addTelefone').on('click', function () {
    var div = $('.clonaTelefone').html();
            $('#telefones').append(div);
    });
}

function excluiCampoExtraDentroDaModal() {
    $('#telefones').on('click', '.excluirTipo', function () {
        $(this).parents('.contatoAdicional').remove();
    });
}


$(document).ready(function () {
    /********** contatos/contatos.blade **********/
    dataTableContatos();
    exibirContatoModal();
    
    
    /********** contatos/cadastrarcontato.blade **********/
    validaCamposFormulario();
    adicionaCampoExtraDentroDaModal();
    excluiCampoExtraDentroDaModal();
    
});