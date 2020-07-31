TableManageButtons.init();

function dataTableContratos() {
    $(document).ready(function () {

        $('#datatable-colvid').DataTable({
            "dom": 'C<"clear">lfrtip',
            "colVis": {
                "buttonText": "Change columns"
            },
            "columnDefs": [
                {"visible": false, "targets": 0}
            ],
            "drawCallback": function (settings) {
                var api = this.api();
                var rows = api.rows({page: 'current'}).nodes();
                var last = null;

                api.column(0, {page: 'current'}).data().each(function (group, i) {
                    if (last !== group) {
                        $(rows).eq(i).before(
                                '<tr class="group"><td colspan="9">' + group + '</td></tr>'
                                );

                        last = group;
                    }
                });
            }
        });

    });
}

function addProjeto() {
    $('#addContrato').on('click', function () {
        var div = $('.clonaContrato').html();
        $('#contratos').append(div);
    });
}

function excluiProjeto() {
    $('#contratos').on('click', '.excluirTipo', function () {
        $(this).parents('.contratoAdicional').remove();
    });
}
    
function excluiContrato() {
    $('.excluir').on('click', function () {
        var id = $(this).data('id');
        $('#cliente-excluir').val(id);
    });
}

function exibiProjetoDoContrato() {
    $('.exibir_projeto').on('click', function () {

        var idContrato = $(this).data('id');
        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirprojeto',
            data: {
                idContrato: idContrato
            },
            dataType: 'json',
            success: function (data) {

                $('#exibirProjeto').html(data.html);

            },
            error: function () {

                alert('erro');
                return;
            }
        });
    });
}

function mask() {
    $(function () {
        $("#dataAssinatura").mask('99/99/9999', {placeholder: "DATA DA ASSINATURA"});
    })
    $(document).ready(function () {
        $("#rs").maskMoney({
            decimal: ",",
            thousands: "."
        });
    });
}


function validaCadastroContrato() {
    $('#cliente').validate({
        submitHandler: function (form) {
            //                $('#modal-sucesso').modal('show');
            form.submit();
        },
        errorElement: 'span',
        errorClass: 'has-error',
        focusInvalid: true,
        rules: {
            'empresa': {
                required: true
            },
            'codigocontrato': {
                required: true
            },
            'dataassinatura': {
                required: true
            },
            'valorhora': {
                required: true
            }
        },
        messages: {
            'empresa': {
                required: 'Campo Obrigatório!'
            },
            'codigocontrato': {
                required: 'Campo Obrigatório!'
            },
            'dataassinatura': {
                required: 'Campo Obrigatório!'
            },
            'valorhora': {
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
    /********** contratos/contratos.blade **********/
    dataTableContratos();
    excluiContrato();
    exibiProjetoDoContrato();

    /********** contratos/cadastrarcontratos.blade **********/
    mask();
    validaCadastroContrato();
    addProjeto();
    excluiProjeto();

    /********** contratos/cadastroextensoes.blade **********/

});