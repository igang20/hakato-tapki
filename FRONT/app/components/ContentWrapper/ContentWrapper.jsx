import Styles from './Contentwrapper.module.css'


export default function ContentWrapper({ children }) {
    return (
        <div className={Styles.contentWrapper}>
            {children}
        </div>
    )
}