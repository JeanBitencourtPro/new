<section id="contact">
    <div class="row section-intro contato-js">
        <div class="col-twelve">
            <h5 style="color: #03ad91 !important;">contato</h5>
            <h1>Mande uma mensagem!</h1>
        </div> 
    </div>
        
    <div class="row contact-form">
        <div class="col-twelve">
            <div class="contato-js">
                <fieldset>
                    <div class="form-field">
                        <input name="nome" type="text" id="contactName" placeholder="Nome" value="" minlength="2">
                    </div>

                    <div class="form-field">
                        <input name="telefone" type="text" id="telefone" class="telefone" placeholder="Telefone" value="" pattern="\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4,5}">
                    </div>

                    <div class="form-field">
                        <input name="email" type="email" id="contactEmail" placeholder="Email" value="">
                    </div>

                    <div class="form-field">
                        <input name="Assunto" type="text" id="contactSubject" placeholder="Assunto" value="">
                    </div>  

                    <div class="form-field">
                        <textarea name="Mensagem" id="contactMessage" placeholder="Mensagem" rows="10" cols="50"></textarea>
                    </div> 

                    <div class="form-field">
                        <button type="submit" class="submitform enviar-mensagem">Enviar</button>
                    </div>
                </fieldset>
            </div>
                
            <div class="mensagem-enviada-js margin-b hide">
                    <center><h1 style="color: #03ad91 !important;">Obrigado pelo contato!</h1></center>
                    <center><i class="fa fa-check"></i> Sua mensagem foi enviada com sucesso!<br></center>
                    <center>Logo entraremos em contato.<br></center>
            </div>
        </div> 
    </div>
        
    <div class="row contact-info">
        <div class="col-four tab-full">
            <div class="icon">
                <i class="icon-pin"></i>
            </div>
            <p>
                Sapucaia do Sul<br>
                93214-170 | RS
            </p>
        </div>
        <div class="tab-full">
            <div class="icon">
                <a href="#"><i class="fa fa-whatsapp midias-sociais"></i></a>
            </div>
            
            <div>
                <p>
                    ciano.software@outlook.com<br>
                    (51) 9996-43416
                </p>
            </div>
        </div>
    </div>
</section>