TableManageButtons.init();

function dataTableServidores() {
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

function mais() {
    $('.descricao').on('click', '.mais', function () {
        $(this).addClass('menos');
        $(this).removeClass('mais');
        $(this).parent().parent().find('.hide-text').html($(this).data('mais'));
    });
}

function menos() {
    $('.descricao').on('click', '.menos', function () {
        $(this).addClass('mais');
        $(this).removeClass('menos');
        $(this).parent().parent().find('.hide-text').html($(this).data('menos'));
    });
}

function exibirBackupsOvh3() {
    $('.exibir_backups_ovh3').on('click', function () {

        var id = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirbackupsovh3',
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

function exibirBackupsOvh() {
    $('.exibir_backups_ovh').on('click', function () {

        var id = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirbackupsovh',
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

function exibirBackupsF1() {
    $('.exibir_backups_f1').on('click', function () {

        var id = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirbackupsf1',
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


function exibirFirewall() {
    $('.exibir_firewall').on('click', function () {

        var id = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirfirewall',
            data: {
                id: id
            },
            dataType: 'json',
            success: function (data) {

                $('#exibirModal').html(data.html);

            },
            error: function () {

                alert('erro');
                return;
            }
        });
    });
}

function exibirRcLocal() {
    $('.exibir_rclocal').on('click', function () {

        var id = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirrclocal',
            data: {
                id: id
            },
            dataType: 'json',
            success: function (data) {

                $('#exibirModal').html(data.html);

            },
            error: function () {

                alert('erro');
                return;
            }
        });
    });
}

function exibirFsTab() {
    $('.exibir_fstab').on('click', function () {

        var id = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirfstab',
            data: {
                id: id
            },
            dataType: 'json',
            success: function (data) {

                $('#exibirModal').html(data.html);

            },
            error: function () {

                alert('erro');
                return;
            }
        });
    });
}

function exibirWho() {
    $('.exibir_who').on('click', function () {

        var id = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirwho',
            data: {
                id: id
            },
            dataType: 'json',
            success: function (data) {

                $('#exibirModal').html(data.html);

            },
            error: function () {

                alert('erro');
                return;
            }
        });
    });
}

function exibirTudo() {
    $('.exibir_tudo').on('click', function () {

        var id = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirtudo',
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
function exibirSites() {
    $('.exibir_sites').on('click', function () {

        var idHost = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirsites',
            data: {
                idHost: idHost
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

function exibirCronTab() {
    $('.exibir_crontab').on('click', function () {

        var id = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibircrontab',
            data: {
                id: id
            },
            dataType: 'json',
            success: function (data) {

                $('#exibirModal').html(data.html);

            },
            error: function () {

                alert('erro');
                return;
            }
        });
    });
}

$(document).ready(function () {

    /********** produtos/produtos.blade **********/
    dataTableServidores();
    mais();
    menos();
    exibirFirewall();
    exibirCronTab();
    exibirRcLocal();
    exibirFsTab();
    exibirWho();
    exibirSites();
    exibirTudo();
    exibirBackupsOvh3();
    exibirBackupsOvh();
    exibirBackupsF1();
    
});