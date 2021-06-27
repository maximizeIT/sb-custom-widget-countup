import React from "react"
import {screen, render} from "@testing-library/react"

import {CustomWidgetCountup} from "./custom-widget-countup";

describe("CustomWidgetCountup", () => {
    it("should render the component", () => {
        render(<CustomWidgetCountup contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
