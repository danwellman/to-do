define(['task_manager'], function (taskManager) {
    'use strict';

    describe('task_manager', function () {
        describe('the createTask() method', function () {
            var testTask;

            beforeEach(function () {
                testTask = taskManager.createTask('test task');
            });

            it('should return a new task', function () {
                expect(testTask.constructor.name).toEqual('Task');
                expect(testTask.name).toEqual('test task');
            });
        });
    });
});