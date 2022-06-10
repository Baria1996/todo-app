import React, { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoInputItem, setTodoInputItem] = useState("");

  const onChangeInput = (e) => {
    setTodoInputItem(e.target.value);
  };

  const onChangeCheckbox = (e) => {
    let newTodoList = todoList;
    if (e.target.checked === true) {
      newTodoList = todoList.map((item, id) => {
        return parseInt(id) === parseInt(e.target.id)
          ? { ...item, checked: true }
          : item;
      });
    } else if (e.target.checked === false) {
      newTodoList = todoList.map((item, id) => {
        return parseInt(id) === parseInt(e.target.id)
          ? { ...item, checked: false }
          : item;
      });
    }
    setTodoList(newTodoList);
  };

  const addTodoItem = () => {
    if (!todoInputItem?.trim()) return;
    const newTodoList = [
      {
        text: todoInputItem,
        checked: false,
      },
      ...todoList,
    ];
    setTodoList(newTodoList);
    setTodoInputItem("");
  };

  const removeTodoItem = (deleteId) => {
    const newTodoList = todoList.filter((item, id) => id !== deleteId);
    setTodoList(newTodoList);
  };

  return (
    <div className="todo-list">
      {/* form to add items */}
      <div className="todo-list-form">
        <div className="form-item">
          <input
            placeholder="Add an item..."
            onChange={onChangeInput}
            value={todoInputItem}
            className="form-input"
            type="text"
          />
          <button className="form-button" onClick={addTodoItem}>
            Add
          </button>
        </div>
      </div>
      {/* list of added items */}
      <div className="todo-list-items">
        {todoList.length > 0 ? (
          todoList.map((item, id) => {
            return (
              <div className="todo-list-item" key={id}>
                <input
                  type="checkbox"
                  onChange={onChangeCheckbox}
                  id={id}
                  checked={item.checked}
                  name={item.text}
                />
                <span className={item.checked ? "checked" : ""}>
                  {item.text}
                </span>
                <span
                  className="delete-icon"
                  onClick={() => {
                    removeTodoItem(id);
                  }}
                >
                  ❌
                </span>
              </div>
            );
          })
        ) : (
          <div className="todo-list-item">
            <span>Theres nothing to do!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
