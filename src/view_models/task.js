define(['knockout'], function (ko) {
    'use strict';

    function TaskViewModel() {
        this.name = ko.observable('');
        this.completed = ko.observable(false);

        this.deleteTask = function () {
            var task = document.querySelector('#' + this.id);
            task.parentNode.parentNode.removeChild(task.parentNode);
            this.emit('taskremoved');
        };
        this.deleteTaskHandler = this.deleteTask.bind(this);

        this.completeTaskClass = ko.computed(function () {
            return (this.completed() ? 'complete' : '');
        }, this);

        this.toggleTaskComplete = function () {
            this.completed(!this.completed());
            this.emit('taskcompleted', this);
            return true;
        };
        this.toggleTaskCompleteHandler = this.toggleTaskComplete.bind(this);
    }

    return TaskViewModel;
});
