TableManageButtons.init();

function dataTableDemandas() {
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

function sortableDemandas() {
    $('#valores').sortable();
}

function excluirDemanda() {
    $('.excluir').on('click', function () {
        var idTemplate = $(this).data('idtemplate');
        var idDemanda = $(this).data('iddemanda');
        $('#excluir-demanda').val(idDemanda);
        $('#excluir-template').val(idTemplate);
    });
}



function mostrarMaisDescricaoDemandas() {
    $('.descricao').on('click', '.mais', function () {
        $(this).addClass('menos');
        $(this).removeClass('mais');
        $(this).parent().parent().find('.hide-text').html($(this).data('mais'));
    });
}
function mostrarMenosDescricaoDemandas() {
    $('.descricao').on('click', '.menos', function () {
        $(this).addClass('mais');
        $(this).removeClass('menos');
        $(this).parent().parent().find('.hide-text').html($(this).data('menos'));
    });
}
function sortableTarefa() {
    $('#tarefa').sortable();
}

function excluiTarefaUm() {
    $('#tarefa').on('click', '.excluiTarefa', function () {
        $(this).parents('.form-group').remove();
    });
}

function excluiTarefaDois() {
    $('#excluitarefa').on('click', '.excluiTarefa', function () {
        $(this).parents('.form-group').remove();
    });
}

function textAreaDemandas() {
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

$(document).ready(function () {
    /********** demandascategorias/demandascategorias.blade **********/
    dataTableDemandas();
    sortableDemandas();
    excluirDemanda();
    mostrarMaisDescricaoDemandas();
    mostrarMenosDescricaoDemandas();

    /********** demandascategorias/cadastrardemandascategorias.blade **********/
    sortableTarefa();
    excluiTarefaUm();
    excluiTarefaDois();
    textAreaDemandas();
    
});