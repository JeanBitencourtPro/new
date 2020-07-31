TableManageButtons.init();

function dataTableDemandasCategorias() {
    $(document).ready(function () {

        $('#datatable-colvid').DataTable({
            "dom": 'C<"clear">lfrtip',
            "colVis": {
                "buttonText": "Change columns"
            }
        });
    });
}
function validaCadastroDemandaCategoria() {
    $('#categoria').validate({
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
            },
            'codigoAcelerato': {
                required: true
            }
        },
        messages: {
            'nome': {
                required: 'Campo Obrigatório!'
            },
            'codigoAcelerato': {
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
    /********** demandascategorias/demandascategorias.blade **********/
    dataTableDemandasCategorias();

    /********** demandascategorias/cadastrardemandascategorias.blade **********/
    validaCadastroDemandaCategoria();
});