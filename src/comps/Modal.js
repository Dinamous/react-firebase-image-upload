import React from 'react';

const Modal = ({selectedImage,setSelectedImage}) => {

    return(
        <div className="backdrop" 
        onClick={()=> setSelectedImage(null)}>
            <img src={selectedImage} alt="imagem grande"/>
        </div>
    );
}

export default Modal;