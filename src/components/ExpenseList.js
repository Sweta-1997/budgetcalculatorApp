import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
  return (
    <div>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          Clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </div>
  );
};

export default ExpenseList;
