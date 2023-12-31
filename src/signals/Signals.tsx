import { lastUpdated, inputTodo, todos } from "./todo.signals";
import { InfoBar } from "./info-bar";
import { TodoList, TodoWrapper } from "../components";

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  inputTodo.value = e.target.value;
};

const handleAddTodo = () => {
  todos.value = [
    ...todos.value,
    { text: inputTodo.value, completed: false },
  ];
  inputTodo.value = "";
};

const handleTodoClick = (index: number) => () => {
  todos.value = todos.value.map((todo, idx) =>
    idx === index ? { ...todo, completed: !todo.completed } : todo
  );
  lastUpdated.value = new Date().toLocaleString();
};

const handleRemoveTodo = (index: number) => {
  todos.value = todos.value.filter((_, idx) => idx !== index);
};

export const Signals = () => {
  return (
    <TodoWrapper>
      <InfoBar />
      <TodoList
        inputValue={inputTodo.value}
        onAddTodo={handleAddTodo}
        onInputChange={handleInputChange}
        onTodoClick={handleTodoClick}
        onRemoveTodo={handleRemoveTodo}
        todos={todos.value}
      />
    </TodoWrapper>
  );
};
