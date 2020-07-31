TableManageButtons.init();

function dataTableCustoServidores() {
    $(document).ready(function () {

        $('#datatable-colvid').DataTable({
            "dom": 'C<"clear">lfrtip',
            "colVis": {
                "buttonText": "Change columns"
            }
        });

    });
}

// Exclui o contato da modal
function excluiCustoServidor() {
    $('.excluir').on('click', function () {
        var id = $(this).data('id');
        $('#cliente-excluir').val(id);
    });
}

function exibirProjetos() {
    $('.exibir_projetos').on('click', function () {

        var id = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirprojetosservidores',
            data: {
                id: id
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

function mascaras() {
    $(function () {
        $("#us").maskMoney()
    });
    $(function () {
        $('#rs').maskMoney()
    });
}

function exibiProjetosNoMultiSelect() {
    $('input[name="classificacao"]').click(function () {
        console.log($(this).val())
        if ($(this).val() === 'projetos') {
            $('.clona').removeClass('hidden')
        } else {
            $('.clona').addClass('hidden')
        }
    });
}

function estilização(){
    $(".slide-porcentagem").TouchSpin({
    min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
            postfix: '%'
    });
}

$(document).ready(function () {

    /********** infraestrutura/custoservidores.blade **********/
    dataTableCustoServidores();
    excluiCustoServidor();
    exibirProjetos();
    
    
    /********** infraestrutura/cadastrarcustoservidores.blade **********/
//    mascaras();
//    exibiProjetosNoMultiSelect();
//    estilização();
//    
});