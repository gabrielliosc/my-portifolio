import { LinkInfo } from '../Interface';
import style from './linksinfo.module.scss';

export function LinksInfo(links: LinkInfo) {

    const { url, src, type } = links

    return (
        <span className={style.links}>
            <a href={url} target='_blank' rel='noreferrer'>
                <img src={src} alt="" /> { type }
            </a>
        </span>
    )
}