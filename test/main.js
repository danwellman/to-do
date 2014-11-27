define(function () {
    'use strict';

    var specs = [
        'spec/task_manager'
    ];

    require(['boot'], function () {
        require(specs, function () {
            window.onload();
        });
    });
});