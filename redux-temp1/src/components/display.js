import React from 'react';
import {displayData,deleteData} from './../actionMethods/auth';
import {bindActionCreators} from 'redux';
import './comoponents.css';
import { connect} from 'react-redux';

class Display extends React.Component{
    constructor(){
        super();
        this.state = {
            id:''
        }
    }

    componentWillMount(){
        this.props.displayData();
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

    dataEdit = (data) =>{
        debugger;

    };

    render(){
        debugger;
        return(
            <div className="container">
                <h2>Striped Rows</h2>
                <p>The .table-striped class adds zebra-stripes to a table:</p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Hobby</th>
                            <th>City</th>
                            <th>Flag</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.allData && this.props.allData.map((value, index) => {
                                const array = [value._id,value.name,value.email,value.hobby,value.city];
                                return <tr key={index}><td>{value._id}</td><td>{value.name}</td><td>{value.email}</td><td>{value.hobby}</td><td>{value.city}</td><td>{value.flag}</td><td><button onClick={()=> this.dataDelete(value._id)} className="btn btn-danger">Detete</button></td><td><button className="btn btn-primary" onClick={()=> this.dataEdit(array)}>Edit</button></td></tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            )
    }
}
const mapStateToProps=(state)=>{
    return{
        allData:state.display.allData,
    }};

const mapDispatchToProps=(dispatch)=>bindActionCreators({displayData,deleteData},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Display);