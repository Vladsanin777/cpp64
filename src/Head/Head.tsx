import { useTranslation } from "react-i18next"
import General from "./General"
import Tab from "./Tab"
import HeadSpace from "./HeadSpace"

import "./style.css"


function Head() {
    const { t, i18n } = useTranslation()

    return (
        <>
            <div className="head">
                <HeadSpace/>
                <General/>
                <Tab name="class_7"/>
                <Tab name="class_8"/>
                <Tab name="class_9"/>
                <Tab name="class_10"/>
                <Tab name="class_11"/>
                <Tab name="curse_1"/>
                <Tab name="curse_2"/>
                <Tab name="curse_3"/>
                <Tab name="curse_4"/>
            </div>
        </>
    )
}

export default Head
