import { useTranslation } from "react-i18next"
import "./style.css"


function General() {
    const { t, i18n } = useTranslation()

    return (
        <>
            <div className="general">
                <h1 className="logo general">
                    {t("app")}
                </h1>
                <a className="general-element" href="https://vscode.dev/">
                    <i className="bi bi-pencil-square icon"/>
                    {t("vs_code")}
                </a>
                <button className="general-element">
                    <i className="bi bi-5-circle icon"/>
                    {t("general_state_exam")}
                </button>
                <button className="general-element">
                    <i className="bi bi-list-task icon"/>
                    {t("tasks")}
                </button>
                <button className="general-element">
                    <i className="bi bi-1-square icon"/>
                    {t("schedule")}
                </button>
            </div>
        </>
    )
}

export default General
