import { EuiButtonIcon } from "@elastic/eui";
import React, { useEffect, useState } from "react";

interface TopnavToggleBtnProps {
    mode: boolean,
    onClick: (isFloatingOn: boolean) => void
}

export function TopnavToggleBtn(props: TopnavToggleBtnProps) {
    const [isFloatingOn, setFloatingOn] = useState(props.mode);

    useEffect(() => {
        props.onClick(isFloatingOn)
    }, [isFloatingOn]);

    return <EuiButtonIcon
        className="euiHeaderSectionItemCustomButton"
        title={isFloatingOn ? 'Dock menu' : 'Float menu'}
        aria-label={isFloatingOn ? 'Dock menu' : 'Float menu'}
        iconType={isFloatingOn ? 'pin' : 'menuUp'}
        onClick={() => {
            setFloatingOn((isOn) => !isOn);
        }}
    />
}