<template>
    <div>
        <h1>Buttons</h1>
        <div class="">
            <div class="row">
                <div class="col-md-12">
                    <h4>Button Colors</h4>
                    <p class="bs-component">
                        <a href="#" class="btn btn-default">Default</a>
                        <a href="#" class="btn btn-primary">Primary</a>
                        <a href="#" class="btn btn-secondary">Secondary</a>
                        <a href="#" class="btn btn-tertiary">Tertiary</a>
                        <a href="#" class="btn btn-success">Success</a>
                        <a href="#" class="btn btn-info">Info</a>
                        <a href="#" class="btn btn-warning">Warning</a>
                        <a href="#" class="btn btn-danger">Danger</a>
                        <a href="#" class="btn btn-link">Link</a>
                    </p>

                    <br>
                    <h3>Disabled</h3>
                    <p class="bs-component">
                        <a href="#" class="btn btn-default disabled">Default</a>
                        <a href="#" class="btn btn-primary disabled">Primary</a>
                        <a href="#" class="btn btn-success disabled">Success</a>
                        <a href="#" class="btn btn-info disabled">Info</a>
                        <a href="#" class="btn btn-warning disabled">Warning</a>
                        <a href="#" class="btn btn-danger disabled">Danger</a>
                    </p>

                    <br>

                    <h3>With attached action</h3>
                    <div style="margin-bottom: 15px;">
                        <div class="btn-toolbar bs-component" style="margin: 0;">
                            <div class="btn-group">
                                <a href="#" class="btn btn-default">Default</a>
                                <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>

                            <div class="btn-group">
                                <a href="#" class="btn btn-primary">Primary</a>
                                <a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>

                            <div class="btn-group">
                                <a href="#" class="btn btn-success">Success</a>
                                <a href="#" class="btn btn-success dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>

                            <div class="btn-group">
                                <a href="#" class="btn btn-info">Info</a>
                                <a href="#" class="btn btn-info dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <br>

                    <h4>Button Sizes</h4>
                    <p class="bs-component">
                        <a href="#" class="btn btn-primary btn-lg">Large button</a>
                        <a href="#" class="btn btn-primary">Default button</a>
                        <a href="#" class="btn btn-primary btn-sm">Small button</a>
                        <a href="#" class="btn btn-primary btn-xs">Mini button</a>
                    </p>

                    <br>

                    <h4>Floating action buttons <small>a.k.a FAB</small></h4>
                    <p class="bs-component">
                        <a href="javascript:void(0)" class="btn btn-default btn-fab"><i class="fa fa-pencil-square-o"></i></a>
                        <a href="javascript:void(0)" class="btn btn-primary btn-fab"><i class="fa fa-pencil-square-o"></i></a>
                        <a href="javascript:void(0)" class="btn btn-success btn-fab"><i class="fa fa-pencil-square-o"></i></a>
                        <a href="javascript:void(0)" class="btn btn-info btn-lg btn-fab"><i class="fa fa-pencil-square-o"></i></a>
                        <a href="javascript:void(0)" class="btn btn-warning btn-sm btn-fab"><i class="fa fa-pencil-square-o"></i></a>
                        <a href="javascript:void(0)" class="btn btn-danger btn-xs btn-fab"><i class="fa fa-pencil-square-o"></i></a>
                    </p>

                </div>
                <br>
                <div class="col-md-12">
                    <h3>Other Buttons</h3>
                </div>
                <div class="col-md-12" style="margin-top: 30px;">
                    <p class="bs-component">
                        <a href="#" class="btn btn-default btn-lg btn-block">Block level button</a>
                    </p>
                    <div class="bs-component" style="margin-bottom: 15px;">
                        <div class="btn-group btn-group-justified">
                            <a href="#" class="btn btn-default">Left</a>
                            <a href="#" class="btn btn-default">Middle</a>
                            <a href="#" class="btn btn-default">Right</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="bs-component" style="margin-bottom: 15px;">
                                <div class="btn-toolbar">
                                    <div class="btn-group">
                                        <a href="#" class="btn btn-default">1</a>
                                        <a href="#" class="btn btn-default">2</a>
                                        <a href="#" class="btn btn-default">3</a>
                                        <a href="#" class="btn btn-default">4</a>
                                    </div>

                                    <div class="btn-group">
                                        <a href="#" class="btn btn-default">5</a>
                                        <a href="#" class="btn btn-default">6</a>
                                        <a href="#" class="btn btn-default">7</a>
                                    </div>

                                    <div class="btn-group">
                                        <a href="#" class="btn btn-default">8</a>
                                        <div class="btn-group">
                                            <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                Dropdown
                                                <span class="caret"></span>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Dropdown link</a></li>
                                                <li><a href="#">Dropdown link</a></li>
                                                <li><a href="#">Dropdown link</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="bs-component">
                                <div class="btn-group-vertical">
                                    <a href="#" class="btn btn-default">Button</a>
                                    <a href="#" class="btn btn-default">Button</a>
                                    <a href="#" class="btn btn-default">Button</a>
                                    <a href="#" class="btn btn-default">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>