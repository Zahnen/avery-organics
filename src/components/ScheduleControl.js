import React from 'react';
// import Schedule from './Schedule';
import ScheduleList from './ScheduleList';


class ScheduleControl extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    dayVisibleOnPage: "Monday"
  };
}

//   handleClick =() => {
//     if (this.state.dayVisibleOnPage === 7){
//       this.setState({dayVisibleOnPage: 1})
//     } else { this.setState(prevState => ({
//       dayVisibleOnPage: prevState.dayVisibleOnPage + 1
//     }));
//   }
// }

  render(){
    // let currentlyVisibleState = null;
    // // const scheduleList = <ScheduleList/>;
    // // key={this.state.dayVisibleOnPage}
    // currentlyVisibleState = <Schedule key="1"/>

    return (
      <>
        <ScheduleList/>
        {/* {<Schedule/>} */}
        {/* {currentlyVisibleState} */}
        {/* <button onClick={this.handleClick}>NEXT!</button> */}
      </>
    );
  }
}
export default ScheduleControl;