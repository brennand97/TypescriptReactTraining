window.onload = () => {
    const el = document.getElementById('content');
    const jsx = <ToDoList name="Brennan"/>;
    ReactDOM.render(jsx, el);
};

interface Props {
    name: string;
}

interface State {
    items: Item[];
    newItemName: string;
}

interface Item {
    name: string;
    completed: boolean;
}

class ToDoList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: [
                { name: "Milk", completed: false },
                { name: "Eggs", completed: false },
                { name: "Bread", completed: false },
            ],
            newItemName: ""
        };
    }

    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...this.state,
            newItemName: e.currentTarget.value
        };
        this.setState(newState);
    }

    addItem = () => {
        const newItems = [...this.state.items, { name: this.state.newItemName, completed: false }];
        const newState = {
            ...this.state,
            items: newItems,
            newItemName: ""
        };
        this.setState(newState);
    }

    toggleItemCompleted = (index: number) => {
        const newItems = this.state.items.slice();
        newItems[index] = {
            ...newItems[index],
            completed: !newItems[index].completed
        };
        const newState = {
            ...this.state,
            items: newItems
        }
        this.setState(newState);
    }

    render() {
        const renderItem = (item: Item, index: number) => {
            let itemClass: string = item.completed ? "completed-item" : "incompleted-item";
            itemClass += " todo-item";
            const checkMark: string = item.completed ? " ✓" : "";
            return (
                <li>
                    <div className={itemClass} onClick={() => this.toggleItemCompleted(index)}>
                        {item.name}{checkMark}
                    </div>
                </li>
            );
        }

        const itemsJSX = this.state.items.map((item, i) => renderItem(item, i));

        return (
            <div>
                <h3>{this.props.name}'s To-Do List</h3>
                <ul>
                    {itemsJSX}
                </ul>
                <input value={this.state.newItemName} onChange={this.onInputChange} />
                <button onClick={this.addItem} >Add Item</button>
            </div>
        );
    }
}