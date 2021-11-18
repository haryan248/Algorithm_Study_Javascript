function Employee(title) {
    this.title = title;
}
Employee.prototype.setTitle = function () {
    this.title = title;
};
Employee.prototype.getTitle = function () {
    return this.title;
};

function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
}
Engineer.prototype.setIsManager = function () {
    this.isManager = isManager;
};
Engineer.prototype.getIsManager = function () {
    return this.isManager;
};
Engineer.prototype = Object.assign({}, Employee.prototype);
