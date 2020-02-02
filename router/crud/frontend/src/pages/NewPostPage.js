import React from 'react';
import { useHistory } from 'react-router-dom';

import EditPost from './../components/EditPost';

function NewPostPage() {
  const history = useHistory();

  const handleCloseClick = () => {
    history.push('/');
  };

  const handleSaveSuccess = () => {
    history.push('/');
  };

  return (
    <div className="container">
      <EditPost
        saveButtonDefaultText="Опубликовать"
        saveButtonProcessText="Публикуем..."
        onSaveSuccess={handleSaveSuccess}
        onCloseClick={handleCloseClick}
      />
    </div>
  );
}

export default NewPostPage;

