import style from '../styles/ErrorList.module.css'

export default function Error({ message, children, activeError, setActiveError, activeErrorCount }) {
    const descrease = () => {
        if (activeError > 0)
            setActiveError(--activeError)
    };

    const increase = () => {
        if ((activeError + 1) < activeErrorCount)
            setActiveError(++activeError)
    }

    return (
        <div className={`${style.errorBoxParent}`}>
            <div className={style.errorBox}>
                {children}

                {message && (
                    <small className={style.dBlock}>
                        <b className={`${style.dBlock} ${style.underLine}`}>Error Message</b>
                        <small className={style.dBlock}>
                            {message}
                        </small>
                    </small>
                )}
                {activeErrorCount > 1 && (
                    <div className={style.navigation}>
                        <i className={`fas fa-arrow-left  ${activeError === 0 ? style.disabledNav : ''}`} disabled={activeError === 0 ? true : false} onClick={() => descrease()} ></i>
                        <i className={`fas fa-arrow-right ${(activeError + 1) === activeErrorCount ? style.disabledNav : ''}`} disabled={(activeError + 1) === activeErrorCount ? true : false} onClick={() => increase()}></i>
                    </div>
                )}
            </div>
        </div>
    )
};
