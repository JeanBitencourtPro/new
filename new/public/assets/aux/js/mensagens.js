TableManageButtons.init();

function dataTableMensagens() {
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
function excluiMensagem() {
    $('.excluir').on('click', function () {
        var id = $(this).data('id');
        $('#excluir-mensagem').val(id);
    })
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

function visualizarMensagem() {
    $('.exibir_mensagem').on('click', function () {

        var idMensagem = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirmensagem',
            data: {
                idMensagem: idMensagem
            },
            dataType: 'json',
            success: function (data) {
                tinymce.remove("textarea#descricao");

                $('#exibirMensagem').html(data.html);
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

            },
            error: function () {

                alert('erro');
                return;
            }
        });
    });
}

function validaCamposCadastroDeMensagem() {
    $('#cadastro_mensagem').validate({
        submitHandler: function (form) {
            //                $('#modal-sucesso').modal('show');
            form.submit();
        },
        errorElement: 'span',
        errorClass: 'has-error',
        focusInvalid: true,
        rules: {
            'identificador': {
                required: true
            },
            'assunto': {
                required: true
            },
            'tipos': {
                required: true
            }
        },
        messages: {
            'identificador': {
                required: 'Campo Obrigatório!'
            },
            'assunto': {
                required: 'Campo Obrigatório!'
            },
            'tipos': {
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

    $('#tarefa').on('click', '.excluiTarefa', function () {
        $(this).parents('.form-group').remove();
    });

    $('#excluitarefa').on('click', '.excluiTarefa', function () {
        $(this).parents('.form-group').remove();
    });
}

function textAreaMensagem() {
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
function dataTableMensagensEnviadas(){
    $(document).ready(function () {

        $('#datatable-colvid-mensagensEnviadas').DataTable({
            "dom": 'C<"clear">lfrtip',
            "colVis": {
                "buttonText": "Change columns"
            }
        });

    });
}
TableManageButtons.init();
            
// Exclui o contato da modal
function excluiMensagemEnviada() {
    $('.excluir').on('click', function () {
        var id = $(this).data('id');
        $('#excluir-mensagem').val(id);
    })
}

function exibirMensagemEnviada() {
    $('.exibir_mensagem').on('click', function () {

        var idMensagem = $(this).data('id');

        $.ajax({
            type: "POST",
            url: rota.urlBase + 'exibirmensagem',
            data: {
                idMensagem: idMensagem
            },
            dataType: 'json',
            success: function (data) {
                tinymce.remove("textarea#descricao");

                $('#exibirMensagem').html(data.html);
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

            },
            error: function () {

                alert('erro');
                return;
            }
        });
    });
}

$(document).ready(function () {
    /********** mensagem/mensagens.blade **********/
    dataTableMensagens();
    excluiMensagem();
    mais();
    menos();
    visualizarMensagem();
    
    /********** mesangem/cadastrarmensagem.blade **********/
    validaCamposCadastroDeMensagem();
    textAreaMensagem();
    
    /********** mesangem/mensagensenviadas.blade **********/
    dataTableMensagensEnviadas();
    excluiMensagemEnviada();
    exibirMensagemEnviada();
});