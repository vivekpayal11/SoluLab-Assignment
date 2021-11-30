import React from "react";
import Sidebar from "react-sidebar";

const GenerateCharges = (props) => {
  return (
    <Sidebar className="sidebar"
      sidebar={ <div className="col-xs-4 col-sm-6">
         <button onClick={() => props.onSetSidebarOpen(false)}>
        X
        </button>

        <b>Generate A Charges </b>
       
        </div>
     }
      open={props.open}
      onSetOpen={props.onSetSidebarOpen}
      styles={{ sidebar: { background: "white" } }}
    >
    </Sidebar>
  );
}

export default GenerateCharges;
