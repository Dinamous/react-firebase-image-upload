import React from 'react';
import {motion} from 'framer-motion'

const Modal = ({selectedImage,setSelectedImage}) => {

    return(
        <motion.div className="backdrop" 
        initial={{opacity:0}}
        animate={{opacity:1}}

        onClick={()=> setSelectedImage(null)}>
            <motion.img src={selectedImage} alt="imagem grande"
            initial={{y:"-100vh"}}
            animate={{y:0}}/>
        </motion.div>
    );
}

export default Modal;