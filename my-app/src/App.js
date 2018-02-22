import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//         <div class="container">
//             <h2>Stacked form</h2>
//             <div class="row">
//                 <div calss="col-sm-3">
//                     <form action="">
//                         <div class="form-group">
//                             <label for="email">Email:</label>
//                             <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
//                         </div>
//                         <div class="form-group">
//                             <label for="pwd">Password:</label>
//                             <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
//                         </div>
//                         <div class="form-check">
//                             <label class="form-check-label">
//                                 <input class="form-check-input" type="checkbox" name="remember" /> Remember me
//                             </label>
//                         </div>
//                         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Submit</button>
//                     </form>
//                 </div>
//             </div>
//
//             <div class="modal fade" id="myModal">
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//
//                         <div class="modal-header">
//                             <h4 class="modal-title">Modal Heading</h4>
//                             <button type="button" class="close" data-dismiss="modal">&times;</button>
//                         </div>
//
//                         <div class="modal-body">
//                             Modal body..
//                         </div>
//
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
//                         </div>
//
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
//   }
// }

//userController
class App extends Component{
    constructor(){
        super();
        this.state ={
            name : ""
        }
    }

    onChangeInput = (event) =>
    {
        this.setState({
            name : event.target.value
        })
    }

    getName = () => {
        //console.log(this._name.value);
        console.log("Submit");
    }

    render(){
        return(
            <div>
                {/*<input type="text" ref={(input) => this._name = input} />*/}
                <input type="text" value={this.state.name} onChange={this.onChangeInput} />
                <button disabled={this.state.name.length ? false : true} onClick={this.getName}>Submit</button>
            </div>
        )
    }
}

export default App;
