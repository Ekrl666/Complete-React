class Todo {
    title: string
    id: string

    constructor(todoText: string) {
        this.title = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo