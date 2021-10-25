const commentView = document.querySelector('.social__comments');
const commentTemplate = commentView.querySelector('.social__comment').content;

const renderComments = (comments) => {
  const commentNodes = comments.map(({url, name, message}) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentAvatar = commentElement.querySelector('.social__picture');
    commentAvatar.src = url;
    commentAvatar.alt = name;
    commentElement.querySelector('.social-text').textContent = message;
    return commentElement;
  });
  commentView.append(...commentNodes);
};

export {renderComments};
