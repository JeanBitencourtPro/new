<div class="topbar">
    <!-- LOGO -->
    <div class="topbar-left">
        <!-- Image logo -->
        <a href="index.html" class="logo">
            <span>
                <img src="{{ URL::asset('assets/institucional/images/ciano.png') }}" alt="" height="60">
            </span>
        </a>
    </div>

    <!-- Button mobile view to collapse sidebar menu -->
    <div class="navbar navbar-default" role="navigation">
        <div class="container">

            <!-- Navbar-left -->
            <ul class="nav navbar-nav navbar-left">
                <li>
                    <button type="button" class="button-menu-mobile open-left waves-effect">
                        <i class="dripicons-menu"></i>
                    </button>
                </li>
            </ul>

            <!-- Right(Notification) -->
            <ul class="nav navbar-nav navbar-right">
                <li class="hidden-xs">
                    <form role="search" class="app-search">
                        <input type="text" placeholder="Search..."
                               class="form-control">
                        <a href=""><i class="fa fa-search"></i></a>
                    </form>
                </li>
                <li>
                    <a href="#" class="right-menu-item dropdown-toggle" data-toggle="dropdown">
                        <i class="dripicons-bell"></i>
                        <span class="badge badge-pink">4</span>
                    </a>

                    <ul class="dropdown-menu dropdown-menu-right dropdown-lg user-list notify-list">
                        <li class="list-group notification-list m-b-0">
                            <div class="slimscroll">
                               <!-- list item-->
                               <a href="#;" class="list-group-item">
                                  <div class="media">
                                     <div class="media-left p-r-10">
                                        <em class="fa fa-diamond bg-primary"></em>
                                     </div>
                                     <div class="media-body">
                                        <h5 class="media-heading">Título Notificação</h5>
                                        <p class="m-0">
                                            Notificação
                                        </p>
                                     </div>
                                  </div>
                               </a>

                               <!-- list item-->
                               <a href="#;" class="list-group-item">
                                  <div class="media">
                                     <div class="media-left p-r-10">
                                        <em class="fa fa-cog bg-warning"></em>
                                     </div>
                                     <div class="media-body">
                                        <h5 class="media-heading">Título Notificação</h5>
                                        <p class="m-0">
                                            Notificação
                                        </p>
                                     </div>
                                  </div>
                               </a>

                               <!-- list item-->
                               <a href="#;" class="list-group-item">
                                  <div class="media">
                                     <div class="media-left p-r-10">
                                        <em class="fa fa-bell-o bg-custom"></em>
                                     </div>
                                     <div class="media-body">
                                        <h5 class="media-heading">Título Notificação</h5>
                                        <p class="m-0">
                                            Notificação
                                        </p>
                                     </div>
                                  </div>
                               </a>

                               <!-- list item-->
                               <a href="#;" class="list-group-item">
                                  <div class="media">
                                     <div class="media-left p-r-10">
                                        <em class="fa fa-user-plus bg-danger"></em>
                                     </div>
                                     <div class="media-body">
                                        <h5 class="media-heading">Título Notificação</h5>
                                        <p class="m-0">
                                            Notificação
                                        </p>
                                     </div>
                                  </div>
                               </a>

                                <!-- list item-->
                               <a href="#;" class="list-group-item">
                                  <div class="media">
                                     <div class="media-left p-r-10">
                                        <em class="fa fa-diamond bg-primary"></em>
                                     </div>
                                     <div class="media-body">
                                        <h5 class="media-heading">Título Notificação</h5>
                                        <p class="m-0">
                                            Notificação
                                        </p>
                                     </div>
                                  </div>
                               </a>

                               <!-- list item-->
                               <a href="#;" class="list-group-item">
                                  <div class="media">
                                     <div class="media-left p-r-10">
                                        <em class="fa fa-cog bg-warning"></em>
                                     </div>
                                     <div class="media-body">
                                        <h5 class="media-heading">Título Notificação</h5>
                                        <p class="m-0">
                                            Notificação
                                        </p>
                                     </div>
                                  </div>
                               </a>
                           </div>
                        </li>
                        <!-- end notification list -->
                    </ul>
                </li>

                <li class="dropdown user-box">
                    <a href="" class="dropdown-toggle waves-effect user-link" data-toggle="dropdown" aria-expanded="true">
                        <img src="{{ URL::asset('assets/aux/images/users/avatar-1.jpg') }}" alt="user-img" class="img-circle user-img">
                    </a>

                    <ul class="dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right user-list notify-list">
                        <li><a href="#">Profile</a></li>
                        <li><a href="#"><span class="badge badge-info pull-right">4</span>Settings</a></li>
                        <li><a href="#">Lock screen</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </li>

            </ul> <!-- end navbar-right -->

        </div><!-- end container -->
    </div><!-- end navbar -->
</div>
<!-- Top Bar End -->