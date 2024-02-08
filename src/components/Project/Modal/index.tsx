import { Modal } from "@mui/base/Modal";
import * as React from 'react';
import style from "../project.module.scss";

export function ModalBase({id, image}:{id: string, image: string}){

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button type="button" onClick={handleOpen} className={style.buttonProject}>
                <img src={image} alt="" key={id} className={style.projectImg}/>
            </button>
            <img src={image} alt="" key={id} className={style.mobileImg}/>
            
            <Modal aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClick={handleClose}
                onClose={handleClose}
                slots={{ backdrop: 'div' }}
            className={style.modal}>

                <div className={style.modal__content}>
                    <img src={image} alt="" className={style.zoom}/>
                </div>

            </Modal>
        </div>
    )
}