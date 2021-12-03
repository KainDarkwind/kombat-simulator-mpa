import React from "react";

export default class ActionInfoList extends React.Component {
   constructor(props) {
      super(props);
      console.log("In Hero component");
      this.state = {
         isHoveredOver: false,
      };
   }

   setIsHoveredOver(isHoveredOver) {
      this.setState({ isHoveredOver: isHoveredOver });
      return;
   }

   render() {
      return (
         <div className="col-10 mb-1">
            <div
               onMouseEnter={() => {
                  this.setIsHoveredOver(true);
               }}
               onMouseLeave={() => {
                  this.setIsHoveredOver(false);
               }}
               className="d-inline font-weight-bold"
            >
               {this.props.name}
            </div>
         </div>
      );
   }
}
