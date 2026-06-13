import React from "react";


const ChartHeadingSection  = ({Heading, Subheading, SecondSection}) => {
    return (
        <div className="flex justify-between">
            <div>
           {Heading &&  <div className="charts-heading">{Heading}</div>}
            {Subheading && <div className="charts-subheading">{Subheading}</div>}
            </div>
            {SecondSection && <div>{SecondSection}</div>}
        </div>
    )
}

export default ChartHeadingSection