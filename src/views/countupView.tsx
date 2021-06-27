import React, { FunctionComponent } from "react";
import { BlockAttributes } from "widget-sdk";

import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { CountupCard } from "../components/CountupCard";

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

const calculatedifference=(start: number, startdate: string)=>{
  const countFrom = new Date(startdate).getTime();
  
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  const timeDifference = start - countFrom;
  const days= Math.floor(timeDifference / (day));
  const hours = Math.floor((timeDifference % (day)) / (hour));
  const minutes = Math.floor((timeDifference % (hour)) / (minute));
  const seconds = Math.floor((timeDifference % (minute)) / second);
  
  return {days, hours, minutes, seconds}
}

export const CountupView: FunctionComponent<CustomWidgetCountupProps> = ({ title, showtitle, titlecolor, boxescolorbg, boxescolorborder, boxescolortext, countupdate }: CustomWidgetCountupProps) => {

    const [ actualdate, setactualdate ] = React.useState(Date.now());
    const { days, hours, minutes, seconds } = calculatedifference(actualdate,countupdate)
    React.useEffect(()=>{ setInterval(()=>{setactualdate(Date.now())},1000) },[])

    const isTitleShown = typeof showtitle == "string" ? showtitle === "true" : !!showtitle;

    return ( <div>
        { isTitleShown ? 
            <Title 
                title={title}
                titlecolor={titlecolor} /> 
            : ''
        }
        <Card
            boxescolorbg={boxescolorbg}
            boxescolorborder={boxescolorborder}
            boxescolortext={boxescolortext} >
            <CountupCard
                days={days} 
                hours={hours}
                minutes={minutes} 
                seconds={seconds} />
        </Card>
    </div> )
};
