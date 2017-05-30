var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList = (function (_super) {
    __extends(ToDoList, _super);
    function ToDoList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToDoList.prototype.render = function () {
        return (React.createElement("div", null, "It seems there is still much to do."));
    };
    return ToDoList;
}(React.Component));
window.onload = function () {
    var el = document.getElementById('content');
    var jsx = React.createElement("div", null, "Not hello anymore");
    ReactDOM.render(jsx, el);
};
//# sourceMappingURL=app.js.map