import { useTranslation } from "react-i18next"
import type Args from "./type"


function Option(args: Args) {
    const { t, i18n } = useTranslation()

    return (
        <>
            <a className="option" href={args.href}>
                {t(args.name)}
            </a>
        </>
    )
}

export default Option
