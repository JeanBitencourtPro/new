// Valida os campos do formulário

TableManageButtons.init();
function dataTableClientes() {
    $(document).ready(function () {

        $('#datatable-colvid').DataTable({
            "dom": 'C<"clear">lfrtip',
            "colVis": {
                "buttonText": "Change columns"
            }
        });
    });
}

function excluirCliente() {
    $('.excluir').on('click', function () {
        var id = $(this).data('idcliente');
        $('#cliente-excluir').val(id);
    });
}
function validaFormulario() {
    $('#cliente').validate({
        submitHandler: function (form) {
            // $('#modal-sucesso').modal('show');
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
            }
        },
        messages: {
            'nomecompleto': {
                required: 'Campo Obrigatório!'
            },
            'primeironome': {
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

function adicionaCampoTelefoneModal() {
    $('#addTelefone').on('click', function () {
        var div = $('.clonaTelefone').html();
        $('#telefones').append(div);
    });
}
function excluiCampoTelefoneModal() {
    $('#telefones').on('click', '.excluirTipo', function () {
        $(this).parents('.contatoAdicional').remove();
    });
}

function exibeContatoEmpresa() {
    $('.empresa_contatos').click(function () {

        var id = $(this).data('idcontatos');

        $.ajax({
            type: "GET",
            url: rota.urlBase + 'contatosempresas/' + id,
            dataType: 'json',
            success: function (data) {
                $("#contatosEmpresas").html(data.html)
            },
            error: function (error) {
                console.log(error)
                return;
            }
        });
    });
}

function validaFormularioCadastroCliente() {

    $('#cadastro_cliente').validate({
        submitHandler: function (form) {
//            $('#modal-sucesso').modal('show');
            form.submit();
        },
        errorElement: 'span',
        errorClass: 'has-error',
        focusInvalid: true,
        rules: {
            'cnpj': {
                required: true,
                cnpj: true
            },
            'razaosocial': {
                required: true
            }
        },
        messages: {
            'cnpj': {
                required: 'Campo Obrigatório!',
                cnpj: 'CNPJ Inválido!'
            },
            'razaosocial': {
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


$(document).ready(function () {

    /********** clientes/listagemclientes.blade **********/
    dataTableClientes();
    excluirCliente();
    validaFormulario();
    adicionaCampoTelefoneModal();
    excluiCampoTelefoneModal();
    exibeContatoEmpresa();

    /********** cliente/cadastro.blade **********/
    validaFormularioCadastroCliente();
});