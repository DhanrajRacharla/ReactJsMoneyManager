// Write your code here

import './index.css'
import {Component} from 'react'
import {uuidv4} from 'uuid'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="money-details-container">
      <div className="balance-details-background">
        <img
          className="balance-details-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="type-and-rupees">
          <p className="type">Your Balance</p>
          <p data-testid="balanceAmount" className="rupees">
            {`Rs ${balance}`}
          </p>
        </div>
      </div>

      <div className="income-details-background">
        <img
          className="income-details-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="type-and-rupees">
          <p className="type">Your Income</p>
          <p data-testid="incomeAmount" className="rupees">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="expenses-details-background">
        <img
          className="expenses-details-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="type-and-rupees">
          <p className="type">Your Expenses</p>
          <p data-testid="expensesAmount" className="rupees">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
