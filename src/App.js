import React, {useState} from 'react';
import './App.css';
import "antd/dist/antd.css";
import MasterRouter from "./Routers/MasterRouter";
import {AddData} from "./Logic/addingData";
import {Management} from "./Logic/Management";
import {Database} from "./Logic/Database";

// function App() {
//     // Database.readState();
//     const [management, setManagement] = useState();
//     setManagement(Management);
//     AddData();
//     return (
//         <MasterRouter />
//         )
// }

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            management: Management.getInstance()
        };
    }

    // setManagement(manage){
    //     this.setState()
    //     this.setState({management: ${manage}});
    // }

    componentWillMount() {
        AddData();
        // this.setManagement(Management.getInstance());
        this.setState({management: Management.getInstance()});
        console.log(this.state.management.Customers);
        // Database.readState();
        // sessionStorage.setItem('management', JSON.stringify(Management.getInstance()))
        // console.log(sessionStorage.getItem('management'))
    }

    render(){
        let manageHook = {management: this.state.management, setManagement: (management) => this.setState({management: management})}
        return(
            <MasterRouter manageHook={manageHook}/>
        )
    }
}

export default App;
