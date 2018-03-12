import React from 'react';
import {displayData,deleteData,editData,sortAction} from './../actionMethods/auth';
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
            },
            searchText:'',
            searchArr:[]
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

    changeHandler1 = (e) => {
        if(this.state.userValues.hobby.indexOf(e.target.value)===-1)
            this.state.userValues.hobby.push(e.target.value);
        else
            this.state.userValues.hobby.pop(e.target.value);
        this.setState(this.state.userValues.hobby);
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
                        hobby: value.hobby,
                        city: value.city,
                }},()=>{
                    console.log(this.state.userValues.hobby);
                })
            }
        })
    };

    //Sorting
    handleSortAsc=(e)=>{
        e.preventDefault();
        debugger;
        let text=(e.target.id).toLowerCase();
        let sortArr=[...this.props.allData];
        sortArr.sort((a,b)=>a[text]>b[text]);
        console.log('sortArray',sortArr);
        this.props.sortAction(sortArr);
    };

    handleSortDesc=(e)=>{
        e.preventDefault();
        debugger;
        let text=(e.target.id).toLowerCase();
        let sortArr=[...this.props.allData];
        sortArr.sort((a,b)=>a[text]<b[text]);
        console.log('sortArray',sortArr);
        this.props.sortAction(sortArr);
    };


    //Searching
    handleSearch=(e)=>{
        var s=e.target.value;
        this.setState({
            searchText:e.target.value
        },()=>{
            var tempArr=this.props.allData;
            var newArr=[];
            for(var i=0;i<tempArr.length;i++){
                if(this.state.searchText!==''){
                    if(tempArr[i].name.indexOf(this.state.searchText)!==-1 || tempArr[i].email.indexOf(this.state.searchText)!==-1 || tempArr[i].hobby.indexOf(this.state.searchText)!==-1 || tempArr[i].city.indexOf(this.state.searchText)!==-1){
                        newArr.push(tempArr[i]);
                        this.setState({
                            searchArr:newArr
                        })
                    }
                }
                else{
                    this.setState({
                        searchArr:[]
                    })
                }
            }
        })};

    render(){
        let records=this.state.searchArr.length!==0?this.state.searchArr:this.props.allData;
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
                                                <input className="form-check-input" type="checkbox" onChange={this.changeHandler1}
                                                       name="hobby" value="Reading" checked={(this.state.userValues.hobby.indexOf('Reading')===-1)?false:true} /> Reading<br/>
                                                <input className="form-check-input" type="checkbox" onChange={this.changeHandler1}
                                                       name="hobby" value="Cricket" checked={(this.state.userValues.hobby.indexOf('Cricket')===-1)?false:true} /> Cricket
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label>City:</label>
                                            <select name="city" onChange={this.changeHandler}>
                                                {
                                                    this.props.allCitys && this.props.allCitys.map((value,index) => {
                                                        return this.state.userValues.city===value.citys?
                                                            <option selected="true" value={value.citys}>{value.citys}</option>
                                                        :
                                                            <option value={value.citys}>{value.citys}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={this.toggle}>Submit</button>
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
                        <div className="form-group">
                            <label>Searching : </label>
                            <input type="text" name="search" onChange={this.handleSearch}/>
                        </div>

                        <table id="example" className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name&nbsp;&nbsp;&nbsp;<i className="fa" id='Name' onClick={this.handleSortAsc}>&#xf0de;</i><i className="fa" id='Name' onClick={this.handleSortDesc}>&#xf0dd;</i></th>
                                    <th>Email</th>
                                    <th>Hobby</th>
                                    <th>City</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                     records.map((value, index) => {
                                        return <tr key={index}><td>{value.name}</td><td>{value.email}</td><td>{value.hobby.map((v,index)=>{ return index===0 ? v : ','+v})}</td><td>{value.city}</td><td><button onClick={()=> this.dataDelete(value._id)} className="btn btn-danger">Detete</button></td><td><button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={()=> this.dataEdit(value._id)}>Edit</button></td></tr>
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

const mapDispatchToProps=(dispatch)=>bindActionCreators({displayData,deleteData,allCity,editData,sortAction},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Display);