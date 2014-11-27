define(['knockout'], function (ko) {
    'use strict';

    function render(container, view, viewModel, useChild) {
        var intermediateContainer = document.createElement('div');
        intermediateContainer.innerHTML = view;
        container.appendChild(intermediateContainer);

        ko.applyBindings(viewModel, (useChild) ? intermediateContainer.childNodes[0] : container);
    }

    return {
        render: render
    };
});