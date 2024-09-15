// Write your code here

import './index.css'

const TransactionItem = props => {
  const {eachHistory, deleteHistory} = props
  const {id, title, amount, type} = eachHistory

  const deleteItem = () => {
    deleteHistory(id, amount)
  }
  return (
    <li className="transaction-list">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button data-testid="delete" type="button" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
