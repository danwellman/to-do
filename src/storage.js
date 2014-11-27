define(function () {
    'use strict';

    function save(list) {
        localStorage.setItem(list.id, JSON.stringify(list.tasks));
    }

    function load(listId) {
        return JSON.parse(localStorage.getItem(listId));
    }

    function getLists() {
        var x,
            lists = [],
            length = localStorage.length;

        for (x = 0; x < length; x += 1) {
            lists.push(localStorage.key(x));
        }
    }

    return {
        save: save,
        load: load,
        getLists: getLists
    };
});