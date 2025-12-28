import './Buttons.styles.scss';

interface BtnProps {
    btnText: string;
}

export const PrimaryBtn = ({ btnText }: BtnProps) => {
    return <>
        <button className='primary-button with-icon'> {btnText}
            <img alt="PrimaryBtn" src={"src/img/Swipe/arrow-right-light.svg"} />
        </button></>
}

export const SecondaryBtn = ({ btnText }: BtnProps) => {
    return <>
        <button className='secondary-button with-icon'> {btnText}
            <img alt="SecondaryBtn" src={"src/img/Swipe/arrow-right-dark.svg"} />
        </button></>
}

export const PrimaryBtn2 = ({ btnText }: BtnProps) => {
    return <>
        <button className='primary-button btn-variant-2'> {btnText}
        </button></>
}