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
            <img alt="SecondaryBtn" src={"src/img/Swipe/arrow-right-purple.svg"} />
        </button></>
}

export const SecondaryBtn2 = ({ btnText }: BtnProps) => {
    return <>
        <button className='secondary-button sec-btn-variant-2 with-icon'> {btnText}
            <img alt="SecondaryBtn" src={"src/img/Swipe/arrow-right-blue.svg"} />
        </button></>
}

export const PrimaryBtn2 = ({ btnText }: BtnProps) => {
    return <>
        <button className='primary-button btn-variant-2'> {btnText}
        </button></>
}

export const PrimaryBtn3 = ({ btnText }: BtnProps) => {
    return <>
        <button className='primary-button prm-btn-var3 with-icon'> {btnText}
            <img alt="PrimaryBtn" src={"src/img/Swipe/arrow-right-dark.svg"} />
        </button></>
}
