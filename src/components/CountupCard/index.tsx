import React, { FunctionComponent } from "react";

import { CountupBox } from "../CountupBox";

/**
 * React Component
 */
export interface CountupCardProperties {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountupCard: FunctionComponent<CountupCardProperties> = (props) => {

  return (
    <div>
      <CountupBox value={props.days} text="Days" />
      <CountupBox value={props.hours} text="Hours" />
      <CountupBox value={props.minutes} text="Minutes" />
      <CountupBox value={props.seconds} text="Seconds" />
    </div>
  );
};
