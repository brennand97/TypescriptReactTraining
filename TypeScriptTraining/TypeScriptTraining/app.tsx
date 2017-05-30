class ToDoList extends React.Component<void, void> {
    render() {
        return (
            <div>It seems there is still much to do.</div>
        );
    }
}

window.onload = () => {
    const el = document.getElementById('content');
    const jsx = <div>Not hello anymore</div>;
    ReactDOM.render(jsx, el);
};