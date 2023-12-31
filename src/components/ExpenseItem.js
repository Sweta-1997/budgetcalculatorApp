import { MdEdit, MdDelete } from "react-icons/md";
const ExpenseItem = ({ expense, handleDelete, handleEdit, clearItems }) => {
  const { id, charge, amount } = expense;

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">{amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit-button"
          onClick={() => handleEdit(id)}
        >
          {/* we use aria label here as we didnt specify name of button */}
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="delete-button"
          onClick={() => handleDelete(id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
