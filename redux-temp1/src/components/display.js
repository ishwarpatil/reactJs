import React from 'react';
import {displayData,deleteData,editData} from './../actionMethods/auth';
import {allCity} from './../actionMethods/auth';
import {bindActionCreators} from 'redux';
import './comoponents.css';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import { connect} from 'react-redux';

class Display extends React.Component{
    constructor(){
        super();
        this.state = {
            id:'',
            isEditing: false,
            userValues: {
                _id:'',
                name: '',
                email: '',
                hobby: [],
                city: '',
            }
        }
    }

    componentWillMount(){
        this.props.displayData();
        this.props.allCity();
    };

    initial = () => {
        debugger;
        this.props.deleteData(this.state.id);
    };

    dataDelete = (data) =>{
        debugger;
        this.setState({
            id:data
        },()=>{
            this.initial();
        });
    };

    formHandler = (e) => {
        debugger;
        e.preventDefault();
        this.props.editData(this.state.userValues);
    };
    changeHandler = (e) => {
        const {userValues} = this.state;
        userValues[e.target.name] = e.target.value;
        this.setState({userValues});
    };

    toggle = () =>{
        const {isEditing} = this.state;
        this.setState({
            isEditing: !isEditing
        })
    }

    dataEdit = (id) =>{
        this.props.allData && this.props.allData.map((value, index) => {
            if(value._id===id){
                this.setState({
                    userValues:{
                        _id:value._id,
                        name: value.name,
                        email: value.email,
                        city: value.city,
                }})
            }
        })
    };

    render(){
        debugger;
        return(
            <div>
                <div className="container">
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h2>Stacked form</h2>
                                    <form onSubmit={this.formHandler}>
                                        <div className="form-group">
                                            <label>Name:</label>
                                            <input type="hidden" className="form-control" value={this.state.userValues._id} name="_id"/>
                                            <input type="text" className="form-control" value={this.state.userValues.name}
                                                   onChange={this.changeHandler} placeholder="Enter Name" name="name"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email:</label>
                                            <input type="text" className="form-control" value={this.state.userValues.email}
                                                   onChange={this.changeHandler} placeholder="Enter Email" name="email"/>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" onChange={this.changeHandler}
                                                       name="hobby" value="Reading"/> Reading<br/>
                                                <input className="form-check-input" type="checkbox" onChange={this.changeHandler}
                                                       name="hobby" value="Cricket"/> Cricket
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label>City:</label>
                                            <select name="city" onChange={this.changeHandler}>
                                                {
                                                    this.props.allCitys && this.props.allCitys.map((value,index) => {
                                                        return <option value={value.citys}>{value.citys}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={this.toggle} >Submit</button>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Header/>
                <div className="row content">
                    <Sidebar />
                    <div className="col-sm-9">
                        <table id="example" className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Hobby</th>
                                    <th>City</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.allData && this.props.allData.map((value, index) => {
                                        return <tr key={index}><td>{value._id}</td><td>{value.name}</td><td>{value.email}</td><td>{value.hobby}</td><td>{value.city}</td><td><button onClick={()=> this.dataDelete(value._id)} className="btn btn-danger">Detete</button></td><td><button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={()=> this.dataEdit(value._id)}>Edit</button></td></tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer/>
            </div>
            )
    }
}
const mapStateToProps=(state)=>{
    return{
        allData:state.display.allData,
        allCitys: state.city.allCity
    }};

const mapDispatchToProps=(dispatch)=>bindActionCreators({displayData,deleteData,allCity,editData},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Display);