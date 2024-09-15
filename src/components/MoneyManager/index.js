const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

class MoneyManager extends Component {
  state = {
    transactionTypeOptions: transactionTypeOptions,
    title: '',
    amount: '',
    type: 'Income',
    balance: 0,
    income: 0,
    expenses: 0,
    historyDetails: [],
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateAmount = event => {
    this.setState({amount: event.target.value})
  }

  optionSelected = event => {
    this.setState({type: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    const {balance, income, expenses, title, amount, type} = this.state
    if (type === 'Income') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        income: prevState.income + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        expenses: prevState.expenses + parseInt(amount),
      }))
    }

    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      historyDetails: [...prevState.historyDetails, newHistory],
      title: '',
      amount: '',
    }))
  }

  deleteHistory = (id, amount) => {
    const {historyDetails} = this.state
    const getDeletedHistory = historyDetails.find(
      eachHistory => eachHistory.id === id,
    )

    if (getDeletedHistory.type === 'Expenses') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        expenses: prevState.expenses - parseInt(amount),
        historyDetails: prevState.historyDetails.filter(
          eachHistory => eachHistory.id !== id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        income: prevState.income - parseInt(amount),
        historyDetails: prevState.historyDetails.filter(
          eachHistory => eachHistory.id !== id,
        ),
      }))
    }
  }

  render() {
    const {title, amount, type, balance, income, expenses, historyDetails} =
      this.state

    const displayOption = item => (
      <option value={item.displayText} id={item.optionId}>
        {item.displayText}
      </option>
    )

    return (
      <div className="money-manager-container">
        <div className="transaction-holder-container">
          <h1 className="holder-name">Hi, Richard</h1>
          <p className="greetings-holder">
            Welcome back to your<span> Money Manager</span>
          </p>
        </div>

        <div>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>

        <div className="history-form-container">
          <form className="form-container" onSubmit={this.formSubmit}>
            <h1 className="form-heading">Add Transaction</h1>
            <div>
              <label htmlFor="title">TITLE</label> <br />
              <input
                onChange={this.updateTitle}
                id="title"
                type="text"
                placeholder="TITLE"
                value={title}
              />
            </div>
            <div>
              <label htmlFor="amount">AMOUNT</label> <br />
              <input
                onChange={this.updateAmount}
                id="amount"
                type="text"
                placeholder="AMOUNT"
                value={amount}
              />
            </div>
            <div>
              <label htmlFor="select">TYPE</label> <br />
              <select onChange={this.optionSelected} id="select">
                {transactionTypeOptions.map(eachItem =>
                  displayOption(eachItem),
                )}
              </select>
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>

          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="history-tabs">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            <ul className="transaction-items">
              {historyDetails.map(eachHistory => (
                <TransactionItem
                  key={eachHistory.id}
                  eachHistory={eachHistory}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
