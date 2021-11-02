const photoView = document.querySelector('.big-picture');
const commentsContainerElement = photoView.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content;


const renderComments = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  const commentAvatar = commentElement.querySelector('.social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  commentsContainerElement.append(commentElement);
};

export {renderComments};
