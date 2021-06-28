import React from "react";


interface Props {}

const Layout:React.FC<Props> = ({children}) => {
    return <div className="container-fluid">
        <div className="container">
          {children}
        </div>
    </div>
}

export default Layout;
