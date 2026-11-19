import { useTranslation } from "react-i18next"
import type Args from "./type"


function Curse(args: Args) {
    const { t, i18n } = useTranslation()

    return (
        <>
            <a className="curses" href={args.href}>
                {t(args.name)}
            </a>
        </>
    )
}

export default Curse
