import React from "react";

import "./PageLayout.css"


const PageLayout = ({children}) => {

    return (
        <div className="pageLayout">
          {children}
        </div>
    )
}

export default  PageLayout