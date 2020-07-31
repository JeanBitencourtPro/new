function dataTableExtensao() {
    $(document).ready(function () {

        $('#datatable-colvid').DataTable({
            "dom": 'C<"clear">lfrtip',
            "colVis": {
                "buttonText": "Change columns"
            }
        });

    });
}
TableManageButtons.init();

function mask() {
    $(function () {
        $("#valorAtivacao").maskMoney({symbol: 'R$ ',
            showSymbol: true, thousands: '.', decimal: ',', symbolStay: true});
    });
    
    $(function () {
        $("#valorSustentacao").maskMoney({symbol: 'R$ ',
            showSymbol: true, thousands: '.', decimal: ',', symbolStay: true});
    });
}

// Exclui o contato da modal
function excluiExtensao() {
    $('.excluir').on('click', function () {
        var id = $(this).data('id');
        $('#cliente-excluir').val(id);
    });
}

function validaCadastroExtensao() {
    $('#demanda').validate({
        submitHandler: function (form) {
            //                $('#modal-sucesso').modal('show');
            form.submit();
        },
        errorElement: 'span',
        errorClass: 'has-error',
        focusInvalid: true,
        rules: {
            'nome': {
                required: true
            }
        },
        messages: {
            'nome': {
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

    /********** extensoes/extensoes.blade **********/
    dataTableExtensao();
    excluiExtensao();

    /********** extensoes/cadastrarextensao.blade **********/
    validaCadastroExtensao();
    mask();
});