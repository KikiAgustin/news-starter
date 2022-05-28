import style from './Error.module.css'

const Error = () => {
    return (
        <div className={style.container}>
            <p className={style.error} >Error, Please reload page!</p>
        </div>
    )
}

export default Error