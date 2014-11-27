define(['i18n!nls/ui_strings', 'knockout', 'view_models/list', 'text!views/list.html', 'list_manager', 'renderer'], function (uiStrings, ko, ListViewModel, listView, listManager, renderer) {
    'use strict';

    function App() {
        this.title = uiStrings.welcome;
        this.createText = uiStrings.createText;
        this.placeholderText = uiStrings.placeholderText;
        this.noListsText = uiStrings.noListsText;
        this.loadText = uiStrings.loadText;

        this.enableAdd = ko.observable(false);
        this.enableLoad = ko.observable(false);
        this.listName = ko.observable('');

        this.isButtonEnabled = ko.computed(function () {
            if (this.listName() !== '') {
                this.enableAdd(true);
            } else {
                this.enableAdd(false);
            }
        }, this);

        this.addList = function () {
            var list = listManager.createList(this.listName()),
                container = document.querySelector('.todo_app section');

            this.removeList(container);
            this.listViewModel = new ListViewModel();
            this.listViewModel.listName(list.id);
            this.listViewModel.list = list;

            this.listName('');

            renderer.render(container, listView, this);
        };
        this.addListHandler = this.addList.bind(this);

        this.removeList = function (container) {
            ko.cleanNode(container);
            container.innerHTML = '';
        }
    }

    return App;
});
