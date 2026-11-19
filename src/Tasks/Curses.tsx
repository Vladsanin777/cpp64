import { useTranslation } from "react-i18next"
import Curse from "./Curses"
import Unit from "./Unit"
import Lesson from "./Lesson"
import Task from "./Task"
import Option from "./Option"


function Curses() {
    const { t, i18n } = useTranslation()

    return (
        <>
            <div className="curses">
                <Curse name="class_7" href="/curse/1">
                    <Unit name="quarter_1" href="/curse/1/unit/1">
                        <Lesson name="lesson_1" href="/curse/1/unit/1/lesson/1">
                            <Task name="binary_sum" href="/curse/1/unit/1/lesson/1/task/1">
                                <Option name="a" href="/curse/1/unit/1/lesson/1/task/1/option/1"/>
                                <Option name="b" href="/curse/1/unit/1/lesson/1/task/1/option/2"/>
                                <Option name="c" href="/curse/1/unit/1/lesson/1/task/1/option/3"/>
                            </Task>
                        </Lesson>
                        <Lesson name="lesson_2" href="/curse/1/unit/1/lesson/2">
                            <Task name="binary_sum" href="/curse/1/unit/1/lesson/2/task/1">
                                <Option name="a" href="/curse/1/unit/1/lesson/2/task/1/option/1"/>
                                <Option name="b" href="/curse/1/unit/1/lesson/2/task/1/option/2"/>
                                <Option name="c" href="/curse/1/unit/1/lesson/2/task/1/option/3"/>
                            </Task>
                        </Lesson>
                    </Unit>
                </Curse>
            </div>
        </>
    )
}

export default Curses
