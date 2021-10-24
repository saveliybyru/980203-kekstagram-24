const commentView = document.querySelector('.social__comments');
const commentTemplate = commentView.querySelector('.social__comment').content;

const renderComments = (commentsList) => {
  const commentFragment = document.createDocumentFragment();
  const comments = Array.from(commentsList);
  comments.forEach(({url, name, message}) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').setAttribute('src', url);
    commentElement.querySelector('.social__picture').setAttribute('alt', name);
    commentElement.querySelector('.social-text').textContent = message;
    commentFragment.appendChild(commentElement);
  });
  commentView.appendChild(commentFragment);
};

export {renderComments};
