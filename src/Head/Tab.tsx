import { useTranslation } from "react-i18next"


function Tab({ name }: {name: string}) {
    const { t, i18n } = useTranslation()

    return (
        <>
            <button className="head tab">
                <i className="bi bi-book tab icon"/>
                {t(name)}
            </button>
        </>
    )
}

export default Tab

