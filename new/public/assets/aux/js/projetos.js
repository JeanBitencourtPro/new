TableManageButtons.init();

function dataTableProjetos() {
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
                                '<tr class="group"><td colspan="10">' + group + '</td></tr>'
                                );
                        last = group;
                    }
                });
            }
        });
    });
}

function dataTableProjetosModalLog() {
//alert('toma');
        $('.modallog').DataTable({
            "dom": 'C<"clear">lfrtip',
            "colVis": {
                "buttonText": "Change columns"
            },
            "columnDefs": [
//                {"visible": false, "targets": 0}
                
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
}


// Exclui o contato da modal
function excluiProjeto() {
    $('.excluir').on('click', function () {
        var id = $(this).data('id');
        $('#cliente-excluir').val(id);
    });
}

// Exibe outros dominios do projeto
function exibirDominioModal() {
    $('.exibir_dominio').on('click', function () {

        var idProjeto = $(this).data('id');
        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirdominio',
            data: {
                idProjeto: idProjeto
            },
            dataType: 'json',
            success: function (data) {

                $('#exibir').html(data.html);

            },
            error: function () {

                alert('erro');
                return;
            }
        });
    });
}

// Exibe os logs de demanda do projeto
function exibirLogModal() {
    $('.log_de_demanda').on('click', function () {

        var idProjeto = $(this).data('idprojeto');
        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirlogdedemanda',
            data: {
                idProjeto: idProjeto
            },
            dataType: 'json',
            success: function (data) {

                $('#exibirLogs').html(data.html);
                dataTableProjetosModalLog();
//                alert('aqui');

            },
            error: function () {

                alert('erro');
                return;
            }
        });
    });
}

function validaCadastroProjetos() {
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
                required: true,
            },
            'segmento': {
                required: true
            },
            'identificador': {
                required: true
            },
            'urlf1': {
                required: true
            },
            'urlpublico': {
                required: true
            },
            'extensao[]': {
                required: true
            },
            'outrosDominios': {
                required: true
            },
            'produto': {
                required: true
            },
            'nome': {
                required: true
            }
        },
        messages: {
            'empresa': {
                required: 'Campo Obrigatório!'
            },
            'segmento': {
                required: 'Campo Obrigatório!'
            },
            'identificador': {
                required: 'Campo Obrigatório!'
            },
            'urlf1': {
                required: 'Campo Obrigatório!'
            },
            'urlpublico': {
                required: 'Campo Obrigatório!'
            },
            'extensao[]': {
                required: 'Campo Obrigatório!'
            },
            'outrosDominios': {
                required: 'Campo Obrigatório!'
            },
            'produto': {
                required: 'Campo Obrigatório!'
            },
            'nome': {
                required: 'Campo Obrigatório!'
            }
        },
        errorPlacement: function (error, element) {
            // insere a mensagem de erro dentro da div que contém o campo do formulário
            element.parent().append(error);
        },
        highlight: function (e) {
            // adiciona a classe "has-error" na div que contém o campo do formulário
            $(e).closest('.form-group').addClass('has-error');
        },
        success: function (e) {
            $(e).closest('.form-group').removeClass('has-error');
            $(e).remove();
        }
    });

    $('#addContrato').on('click', function () {
        var div = $('.clonaContrato').html();
        $('#contratos').append(div);
    });

    $('#contratos').on('click', '.excluirTipo', function () {
        $(this).parents('.contratoAdicional').remove();
    });
}

$(document).ready(function () {

    /********** produtos/produtos.blade **********/
    dataTableProjetos();
    excluiProjeto();
    exibirDominioModal();
//    dataTableProjetosModalLog();
    exibirLogModal();

    /********** produto/cadastrarproduto.blade **********/
    validaCadastroProjetos();
});