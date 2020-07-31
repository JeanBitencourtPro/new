<script src="{{ URL::asset('assets/institucional/js/jquery-2.1.3.min.js') }}"></script>
<script src="{{ URL::asset('assets/institucional/js/plugins.js') }}"></script>
<script src="{{ URL::asset('assets/institucional/js/main.js') }}"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"></script>

<script>
    jQuery("input.telefone")
        .mask("(99) 9999-9999?9")
        .focusout(function (event) {  
        var target, phone, element;  
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
        phone = target.value.replace(/\D/g, '');
        element = $(target);  
        element.unmask();  
        if(phone.length > 10) {  
            element.mask("(99) 99999-999?9");  
        } else {  
            element.mask("(99) 9999-9999?9");  
        }  
    }); 

    $(".gif-rubik").focus(function(){
        $(".gif-rubik").off("click");
    });

    $('.enviar-mensagem').on('click', function () {
        var nome = $('#contactName').val();
        var telefone = $('#telefone').val();
        var email = $('#contactEmail').val();
        var assunto = $('#contactSubject').val();
        var mensagem = $('#contactMessage').val();
        var mensagemAlert = '';
        
        if (nome == '') {
            mensagemAlert = 'O nome precisa ser preenchido!';
            modal(mensagemAlert);
        } else if (telefone == '') {
            alert('O telefone precisa ser preenchido!');
        } else if (email == '') {
            alert('O email precisa ser preenchido');
        } else if (assunto == '') {
            alert('O assunto da mensagem precisa ser preenchido');
        } else if (mensagem == '') {
            alert('Preencha a sua mensagem');
        }else{
            $.ajax({
                url: '/enviar_mensagem',
                dataType: 'json',
                method: 'POST',
                data: {
                    '_token': '{{ csrf_token() }}',
                    'nome': nome,
                    'telefone': telefone,
                    'email': email,
                    'assunto': assunto,
                    'mensagem': mensagem
                },
                success: function (data) {
                    // console.log(data);
                },
                error: function () {
                    // alert('erro');
                    return;
                }
            });

            $('.mensagem-enviada-js').removeClass('hide');
            $('.contato-js').addClass('hide');
        }
    });

    function modal (mensagem = '') {
        var html = '';
        alert(mensagem);

        html = '<div class="popup-modal slider mfp-hide">',	
        html +=    '<div class="media">',
        html +=        '<img src="images/portfolio/modals/m-liberty.jpg" alt="" />',
        html +=    '</div>',

        html +=    '<div class="description-box">',
        html +=        '<h4>ATENÇÃO</h4>',
        html +=        '<p>'+ mensagem +'</p>',
        html +=        '<div class="categories">Web Development</div>', 
        html +=    '</div>',

        html +=    '<div class="link-box">',
        html +=        '<a href="#" class="popup-modal-dismiss">Close</a>',
        html +=    '</div>',		      
        html += '</div>';
        
        alert(html);
    }
</script>