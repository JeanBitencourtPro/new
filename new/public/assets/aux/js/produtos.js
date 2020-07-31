TableManageButtons.init();

function dataTableProdutos() {
    $(document).ready(function () {

        $('#datatable-colvid').DataTable({
            "dom": 'C<"clear">lfrtip',
            "colVis": {
                "buttonText": "Change columns"
            }
        });
    });
}

function mask() {
    $(function () {
        $("#valorAtivacao").maskMoney({symbol: 'R$ ',
            showSymbol: true, thousands: '.', decimal: ',', symbolStay: true});
    });
}

// Exclui o contato da modal
function excluiProduto() {
    $('.excluir').on('click', function () {
        var id = $(this).data('id');
        $('#cliente-excluir').val(id);
    });
}

// Exibe o contato na modal
function exibiProdutoModal() {
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

function validaCadastroProduto() {
    $('#cliente').validate({
        submitHandler: function (form) {
            //                $('#modal-sucesso').modal('show');
            form.submit();
        },
        errorElement: 'span',
        errorClass: 'has-error',
        focusInvalid: true,
        rules: {
            'nome': {
                required: true,
            }
        },
        messages: {
            'nome': {
                required: 'Campo Obrigatório!',
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

    /********** produtos/produtos.blade **********/
    dataTableProdutos();
    excluiProduto();
    exibiProdutoModal();

    /********** produto/cadastrarproduto.blade **********/
    validaCadastroProduto();
    mask();
});