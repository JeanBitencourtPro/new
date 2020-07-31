<!DOCTYPE html>
<html>
    @include('include.header_admin')
    <body class="bg-transparent">

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">

                        <div class="wrapper-page">

                            <div class="m-t-40 account-pages">
                                <div class="text-center account-logo-box">
                                    <h2 class="text-uppercase">
                                        <a href="index.html" class="text-success">
                                            <span>
                                                <img id="profile-img" class="rounded-circle profile-img-card" src="{{ URL::asset('/assets/institucional/images/666.png') }}"/>
                                            </span>
                                        </a>
                                    </h2>
                                </div>
                                <div class="account-content">

                                    <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                                        @csrf
                                        <div class="form-group m-b-25">
                                            <div class="col-xs-12">
                                                <input class="form-control input-lg @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="E-mail">
                                                @error('email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="form-group m-b-25">
                                            <div class="col-xs-12">
                                                <input class="form-control input-lg @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Senha">

                                                @error('password')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                        </div>

                                        <div class="form-group account-btn text-center m-t-10">
                                            <div class="col-xs-12">
                                                <button class="btn w-lg btn-rounded btn-lg btn-primary waves-effect waves-light" type="submit">Entrar</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

        <script>
            var resizefunc = [];
        </script>

        @include('include.javascript_admin')

    </body>
</html>
