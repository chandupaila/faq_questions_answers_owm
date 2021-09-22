import {Component} from 'react'
import './index.css'

class FaqList extends Component {
  state = {
    isShowing: false,
  }

  renderFaqList = () => {
    const {isShowing} = this.state
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <div>
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {isShowing ? (
            <button
              className="button"
              type="button"
              onClick={this.showingAnswer}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                className="image"
                alt="minus"
              />
            </button>
          ) : (
            <button
              className="button"
              type="button"
              onClick={this.showingAnswer}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                className="image"
                alt="plus"
              />
            </button>
          )}
        </div>
      </div>
    )
  }

  showingAnswer = () => {
    this.setState(prevState => ({
      isShowing: !prevState.isShowing,
    }))
  }

  render() {
    const {isShowing} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    return (
      <li className="list">
        {this.renderFaqList()}
        {isShowing ? (
          <div className="answer">
            <p>{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}

export default FaqList
