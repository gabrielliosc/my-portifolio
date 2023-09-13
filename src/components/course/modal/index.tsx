import style from '../course.module.scss';
import certImg from '../../../assets/img/profile.jpg';
import certJs from '../../../assets/img/jscursoemvideo.png';
import certReact from '../../../assets/img/reactalura.png';
export default function Modal(){
    return (
        <div className={style.modal}>
            <p>Certificado</p>            
            <img className={style.certificate} src={certReact} alt="Certificado" />    
            <p>Seção em construção</p>        
        </div>
    )
}