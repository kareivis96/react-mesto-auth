import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function EditAvatarPopup(props) {
  const inputRef = React.useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onUpdateAvatar({ avatar: inputRef.current.value });
    props.onClose();
    inputRef.current.value = '';
  }

  return (
    <PopupWithForm name="change-avatar" title="Обновить аватар" buttonText="Сохранить" isOpened={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <div className="popup__input-wrapper">
        <input ref={inputRef} id="change-avatar-input-url" type="url" className="popup__input" placeholder="Ссылка на картинку" required />
        <p className="popup__error-text"></p>
      </div>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;