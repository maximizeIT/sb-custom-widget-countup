import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

import { CountupView } from "./views/countupView";

/**
 * React Component
 */
export interface CustomWidgetCountupProps extends BlockAttributes {
  title: string;
  showtitle: boolean;
  titlecolor: string;
  countupdate: string;
  boxescolorbg: string;
  boxescolortext: string;
  boxescolorborder: string;
}

export const CustomWidgetCountup = ({ title, showtitle, titlecolor, boxescolorbg, boxescolorborder, boxescolortext, countupdate, contentLanguage }: CustomWidgetCountupProps): ReactElement => {
  
  return <>
      <CountupView
      {...{
        title,
        showtitle,
        titlecolor,
        boxescolorbg,
        boxescolorborder,
        boxescolortext,
        countupdate,
        contentLanguage,
      }}
    />
  </>
};

