import { useTranslation } from "react-i18next"


function Main() {
    const { t, i18n } = useTranslation()

    return (
        <>
            <button className="head general">
                <i className="bi bi-book-half general icon"/>
                {t("general")}
            </button>
        </>
    )
}

export default Main
