var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
window.onload = function () {
    var el = document.getElementById('content');
    var jsx = React.createElement(ToDoList, { name: "Brennan" });
    ReactDOM.render(jsx, el);
};
var ToDoList = (function (_super) {
    __extends(ToDoList, _super);
    function ToDoList(props) {
        var _this = _super.call(this, props) || this;
        _this.onInputChange = function (e) {
            var newState = __assign({}, _this.state, { newItemName: e.currentTarget.value });
            _this.setState(newState);
        };
        _this.addItem = function () {
            var newItems = _this.state.items.concat([{ name: _this.state.newItemName, completed: false }]);
            var newState = __assign({}, _this.state, { items: newItems, newItemName: "" });
            _this.setState(newState);
        };
        _this.toggleItemCompleted = function (index) {
            var newItems = _this.state.items.slice();
            newItems[index] = __assign({}, newItems[index], { completed: !newItems[index].completed });
            var newState = __assign({}, _this.state, { items: newItems });
            _this.setState(newState);
        };
        _this.state = {
            items: [
                { name: "Milk", completed: false },
                { name: "Eggs", completed: false },
                { name: "Bread", completed: false },
            ],
            newItemName: ""
        };
        return _this;
    }
    ToDoList.prototype.render = function () {
        var _this = this;
        var renderItem = function (item, index) {
            var itemClass = item.completed ? "completed-item" : "incompleted-item";
            itemClass += " todo-item";
            var checkMark = item.completed ? " ✓" : "";
            return (React.createElement("li", null,
                React.createElement("div", { className: itemClass, onClick: function () { return _this.toggleItemCompleted(index); } },
                    item.name,
                    checkMark)));
        };
        var itemsJSX = this.state.items.map(function (item, i) { return renderItem(item, i); });
        return (React.createElement("div", null,
            React.createElement("h3", null,
                this.props.name,
                "'s To-Do List"),
            React.createElement("ul", null, itemsJSX),
            React.createElement("input", { value: this.state.newItemName, onChange: this.onInputChange }),
            React.createElement("button", { onClick: this.addItem }, "Add Item")));
    };
    return ToDoList;
}(React.Component));
//# sourceMappingURL=app.js.map