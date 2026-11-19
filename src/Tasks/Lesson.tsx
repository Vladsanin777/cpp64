import { useTranslation } from "react-i18next"
import type Args from "./type"


function Lesson(args: Args) {
    const { t, i18n } = useTranslation()

    return (
        <>
            <a className="lesson" href={args.href}>
                {t(args.name)}
            </a>
        </>
    )
}

export default Lesson
