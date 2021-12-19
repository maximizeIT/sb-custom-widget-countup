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
  
  return <div><CountupView
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
  /><br/><br/><div data-widget-conf-grid-type="100" data-widget-type="Section" data-widget-src="internal://staffbase.content.widgets.Section"><div>
  <div data-widget-conf-type="warning" data-widget-on-card="true" data-widget-type="Infobox" data-widget-src="internal://staffbase.content.widgets.Infobox"><p>PROTOTYPES AND FOR DEMO PURPOSES ONLY!</p><p>NOT FOR PRODUCTION USE!</p><p>NOT AVAILABLE TO CUSTOMERS!</p></div>
  </div></div></div>
};

