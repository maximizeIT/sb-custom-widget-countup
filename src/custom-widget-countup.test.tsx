import React from "react"
import {screen, render} from "@testing-library/react"

import {CustomWidgetCountup} from "./custom-widget-countup";

describe("CustomWidgetCountup", () => {
    it("should render the component", () => {
        render(<CustomWidgetCountup contentLanguage="en_US" title={""} showtitle={false} titlecolor={""} countupdate={""} boxescolorbg={""} boxescolortext={""} boxescolorborder={""}/>);

        // expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
