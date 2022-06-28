import { useEffect, useState, FC } from "react";
import { connect, useDispatch } from "react-redux";
import Toggle from "react-toggle";
import themeAction from "../store/actions/theme.action";
import "react-toggle/style.css"
import { IReduxProps } from "../types/redux-props";


type Props = {
    theme: string
}

const ToggleComponent: FC<Props> = ({ theme }) => {

    const dispatch = useDispatch();

    const [dark, setDark] = useState(false);

    useEffect(() => {
        setDark(false)
    }, [])

    const handleSoupChange = (e: any) => {
        setDark(!dark);

    }
    useEffect(() => {
        const type = dark ? 'dark' : 'light';
        dispatch(themeAction(type))
    }, [dark])



    useEffect(() => {
        document.body.className = ''
        document.body.classList.add(theme);
    }, [theme])

    return (
        <>
            <Toggle
                defaultChecked={dark}
                icons={{
                    checked: <img src='/images/light.png' />,
                    unchecked: <img src='/images/dark.png' />,
                }}
                onChange={(e) => handleSoupChange(e)} />
        </>
    )

}

const mapStateToProps = (state: IReduxProps) => {
    return {
        theme: state.theme
    }
}

export default connect(mapStateToProps, {})(ToggleComponent);