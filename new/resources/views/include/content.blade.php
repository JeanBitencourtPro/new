<div class="content-page">
    <!-- Start content -->
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Bem vindo Jean !</h4>
                        <ol class="breadcrumb p-0 m-0">
                            <li>
                                <a href="#">Dashboard</a>
                            </li>
                            <!--<li>-->
                                <!--<a href="#">Dashboard</a>-->
                            <!--</li>-->
                            <li class="active">
                                Dashboard
                            </li>
                        </ol>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row">

                <div class="col-lg-3 col-md-6">
                    <div class="card-box widget-box-two widget-two-purple">
                        <i class="mdi mdi-chart-line widget-two-icon"></i>
                        <div class="wigdet-two-content">
                            <p class="m-0 text-uppercase text-white font-600 font-secondary text-overflow" title="Statistics">Estatística</p>
                            <h2 class="text-white"><span data-plugin="counterup">0</span> <small><i class="mdi mdi-arrow-up text-white"></i></small></h2>
                            <p class="text-white m-0"><b>0%</b> Texto</p>
                        </div>
                    </div>
                </div><!-- end col -->

                <div class="col-lg-3 col-md-6">
                    <div class="card-box widget-box-two widget-two-info">
                        <i class="mdi mdi-access-point-network widget-two-icon"></i>
                        <div class="wigdet-two-content">
                            <p class="m-0 text-white text-uppercase font-600 font-secondary text-overflow" title="User Today">Clientes</p>
                            <h2 class="text-white"><span data-plugin="counterup">0</span> <small><i class="mdi mdi-arrow-up text-white"></i></small></h2>
                            <p class="text-white m-0"><b>0%</b> Texto</p>
                        </div>
                    </div>
                </div><!-- end col -->

                <a href="{{ route('mensagens') }}">
                    <div class="col-lg-3 col-md-6">
                        <div class="card-box widget-box-two widget-two-pink">
                            <i class="mdi mdi-timetable widget-two-icon"></i>
                            <div class="wigdet-two-content">
                                <p class="m-0 text-uppercase text-white font-600 font-secondary text-overflow" title="Request Per Minute">Mensagens</p>
                            <h2 class="text-white"><span data-plugin="counterup">{{ $mensagens }}</span> <small><i class="mdi mdi-arrow-up text-white"></i></small></h2>
                                <p class="text-white m-0"><b>0%</b> Texto</p>
                            </div>
                        </div>
                    </div>
                </a>

                <div class="col-lg-3 col-md-6">
                    <div class="card-box widget-box-two widget-two-success">
                        <i class="mdi mdi-cloud-download widget-two-icon"></i>
                        <div class="wigdet-two-content">
                            <p class="m-0 text-white text-uppercase font-600 font-secondary text-overflow" title="New Downloads">Receita</p>
                            <h2 class="text-white"><span data-plugin="counterup">0</span> <small><i class="mdi mdi-arrow-up text-white"></i></small></h2>
                            <p class="text-white m-0"><b>0%</b> Texto</p>
                        </div>
                    </div>
                </div><!-- end col -->

            </div>
            <!-- end row -->

            <div class="row">
                <div class="col-lg-4">
                    <div class="card-box">
                        <h4 class="header-title m-t-0 m-b-30">Total Revenue share</h4>
                        <div>
                            <div id="combine-chart" class="ct-chart ct-golden-section dash-chart"></div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card-box">
                        <h4 class="header-title m-t-0 m-b-30">Total Revenue share</h4>
                        <div class="">
                            <div id="roated-chart" class="ct-chart ct-golden-section dash-chart"></div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card-box">
                        <h4 class="header-title m-t-0 m-b-30">Last 30 days statistics</h4>

                        <div class="">
                            <div id="donut-chart" class="ct-chart ct-golden-section dash-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<footer class="footer text-right">
    2020 © IMPERIUM SOFTWARE. - www.imperiumsoftware.com
</footer>