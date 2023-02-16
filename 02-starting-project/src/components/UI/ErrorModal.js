import { ReactDOM } from 'react';
import styles from './ErrorModal.module.css';
import Card from './Card';

const Backdrop =(props) => {
    return (
        <div className={styles.backdrop} onClick={props.errorAbort} >
        </div>
    )
}

const ModelOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
             <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.action}>
                <button className={styles.button} onClick={props.errorAbort}>Okay</button>
            </footer>
        </Card>
    );
}

function ErrorModal (props) {
    return (
        <>
           {ReactDOM.createPortal(<Backdrop onClick={props.errorAbort}/>, document.getElementById('backdrop-root'))} 
           {ReactDOM.createPortal(<ModelOverlay title={props.title} message={props.message} onClick={props.errorAbort}/>, document.getElementById('modal-root'))} 
       
        </>
    )

}

export default ErrorModal;