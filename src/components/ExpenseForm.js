  import {MdSend} from "react-icons/md";

  const ExpenseForm = ({edit,charge,amount,handleCharge,handleAmount,handleSubmit}) =>{
    return(
        <form onSubmit={handleSubmit}>
          <div className="form-center">
            <div className="form-group">
              <label htmlFor="charge">charge</label>
              <input type="text" className="form-control" name="charge" id="charge" placeholder=" e.g rent" value={charge} onChange={handleCharge}/>
              </div>
              <div className="form-group">
              <label htmlFor="amount">amount</label>
              <input type="text" className="form-control" name="amount" id="amount" placeholder=" e.g rent" value={amount} onChange={handleAmount}/>
            </div>

          </div>
          <button type="submit" className="btn">{edit ? "edit" : "Submit"} <MdSend className="btn-icon"/></button>
        </form>
    )
  }



  export default ExpenseForm;
