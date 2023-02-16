import classes from './Modal.module.css';
import ReactDom from 'react-dom';

const BackDrop = () => {
    return <div className={classes.backdrop} ></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlay')

const Modal = (props) => {

    return(
        <>
            {ReactDom.createPortal(<BackDrop />, portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
        
    )

}

export default Modal;