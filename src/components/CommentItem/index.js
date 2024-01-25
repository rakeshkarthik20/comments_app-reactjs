// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {Comment, changeColorFunction, deleteComment} = props
  const {id, name, comment, isLiked, color} = Comment
  const firstLetter = name[0]

  const changeLikeButton = () => {
    changeColorFunction(id)
  }
  const deleteButton = () => {
    deleteComment(id)
  }
  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = isLiked ? 'likedText' : 'likeText'

  return (
    <li className="commentMainContainer">
      <div className="commentContainer">
        <span className={`${color} logo`}>{firstLetter}</span>
        <div className="commentBox">
          <div className="nameTimeContainer">
            <h1 className="userName">{name}</h1>
            <p className="time">{formatDistanceToNow(new Date())}</p>
          </div>

          <p className="userComment">{comment}</p>
        </div>
      </div>
      <div className="likeDeleteContainer">
        <div className="likeContainer">
          <button
            type="button"
            className="likeButton"
            onClick={changeLikeButton}
          >
            <img src={likeImage} className="likeImage" alt="like" />
          </button>
          <span className={`${likeText}`}>Like</span>
        </div>
        <button
          type="button"
          className="likeButton"
          data-testid="delete"
          onClick={deleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="likeImage"
            alt="delete"
          />
        </button>
      </div>
      <hr className="horizontalLine" />
    </li>
  )
}

export default CommentItem
