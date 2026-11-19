import { useTranslation } from "react-i18next"
import type Args from "./type"


function Task(args: Args) {
    const { t, i18n } = useTranslation()

    return (
        <>
            <a className="task" href={args.href}>
                {t(args.name)}
            </a>
        </>
    )
}

export default Task
