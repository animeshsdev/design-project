import './Card.styles.scss';
import { SecondaryBtn2 } from '../Buttons/Buttons';

interface CardProps {
    imgPath?: string;
    title: string;
    content: string | React.ReactElement;
    btnText?: string;
    infoCard?: boolean;
}

const Card = ({ imgPath, title, content, btnText, infoCard }: CardProps) => {
    return (<div className='swipe-card'>
        {!infoCard && <img alt={`${title}`} src={imgPath} className='card-img' />}
        <h6 className={`${infoCard ? 'info-card' : ''}`}>{title}</h6>
        <p className={`${infoCard ? 'secondary-text' : ''}`}>{content}</p>
        {btnText && <SecondaryBtn2 btnText={btnText} />}
    </div>)
}

export default Card;