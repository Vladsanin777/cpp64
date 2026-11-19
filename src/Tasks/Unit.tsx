import { useTranslation } from "react-i18next"
import type Args from "./type"


function Unit(args: Args) {
    const { t, i18n } = useTranslation()

    return (
        <>
            <a className="unit" href={args.href}>
                {t(args.name)}
            </a>
        </>
    )
}

export default Unit
