require(['text!views/app.html', 'view_models/app', 'renderer'], function (appView, App, renderer) {
    'use strict';

    var container = document.body,
        viewModel = new App();

    renderer.render(container, appView, viewModel);
});
define();