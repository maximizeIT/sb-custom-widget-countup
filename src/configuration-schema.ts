import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  description: "DEMO / SHOWCASE: This custom widget was developed for demonstration purposes only. This is not covered by Staffbase Support.",
  required: [
    "title",
    "countupdate"
  ],
  properties: {  
    title: {
      type: "string",
      title: "Title"
    },
    showtitle: {
      type: "boolean",
      title: "Show Title"
    },
    titlecolor: {
      type: "string",
      title: "Title Color",
      default: "#333333"
    },
    countupdate: {
      type: "string",
      title: "Countup Date + Time",
      format: "date-time"
    },
    boxescolorbg: {
      type: "string",
      title: "Background Color",
      default: "#FBC91E"
    },
    boxescolorborder: {
      type: "string",
      title: "Border Color",
      default: "#FBC91E"
    },
    boxescolortext: {
      type: "string",
      title: "Text Color",
      default: "#FFFFFF"
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  title: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:autocomplete": "off",
    "ui:help": "Choose a title for the countup."
  },
  showtitle: {
    "ui:help": "Do you want to display the title?"
  },
  titlecolor: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the title of the countup. Default: #333333"
  },
  countupdate: {
    "ui:help": "Choose a date and time for the countup."
  },
  boxescolorbg: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the background of the countup boxes. Default: #FBC91E"
  },
  boxescolorborder: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the border of the countup boxes. Default: #FBC91E"
  },
  boxescolortext: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the text in the countup boxes. Default: #FFFFFF"
  },
};
