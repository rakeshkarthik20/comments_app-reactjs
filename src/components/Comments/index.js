import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialCommentList = []
class Comments extends Component {
  state = {commentsList: initialCommentList, name: '', comment: '', count: 0}

  addComment = e => {
    e.preventDefault()
    const {name, comment, count} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      color: initialContainerBackgroundClassNames[count],
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  changeName = e => {
    this.setState({name: e.target.value})
  }

  changeDescription = e => {
    this.setState({comment: e.target.value})
  }

  changeColor = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => each.id !== id),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentsList, name, comment, count} = this.state
    return (
      <>
        <div className="mainContainer">
          <h1 className="heading">Comments</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="headingImage"
          />
          <div className="subContainer">
            <div className="inputContainer">
              <p className="description">
                Say Something about 4.0 Technologies
              </p>
              <form className="inputContainer" onSubmit={this.addComment}>
                <input
                  type="text"
                  className="name"
                  value={name}
                  placeholder="Your Name"
                  onChange={this.changeName}
                />
                <textarea
                  rows="6"
                  cols="32"
                  className="comment"
                  placeholder="Your Comment"
                  onChange={this.changeDescription}
                  value={comment}
                />
                <button type="submit" className="button">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="mainImage"
            />
          </div>
          <hr className="horizontalLine" />
          <div className="countContainer">
            <span className="count">{count}</span>
            <p className="commentName">Comments</p>
          </div>
        </div>
        <ul className="commentList">
          {commentsList.map(each => (
            <CommentItem
              Comment={each}
              changeColorFunction={this.changeColor}
              deleteComment={this.deleteComment}
              key={each.id}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default Comments
