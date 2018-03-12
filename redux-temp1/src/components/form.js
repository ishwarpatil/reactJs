import React from 'react';
import {formData, allCity} from './../actionMethods/auth';
import {bindActionCreators} from 'redux';
import './comoponents.css';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import {connect} from 'react-redux';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            userValues: {
                name: '',
                email: '',
                hobby: [],
                city: '',
                document:''
            }
        }
    }

    componentWillMount() {
        this.props.allCity();
    };

    componentWillReceiveProps(nextProps) {
        this.setState({a: 'a'});
    }

    formHandler = (e) => {
        e.preventDefault();
        debugger;
        this.props.formData(this.state.userValues);
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

    


    render() {
        debugger;
        return (
            <div>
                <Header/>
                <div className="row content">
                    <Sidebar />
                    <div className="col-sm-9">
                        <center>
                            <div className="col-sm-6">
                                <h2>Stacked form</h2>
                                <form action="" onSubmit={this.formHandler} enctype="multipart/form-data">
                                    <div className="form-group">
                                        <label>Name:</label>
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
                                                   name="hobby" value="Reading"/> Reading<br/>
                                            <input className="form-check-input" type="checkbox" onChange={this.changeHandler1}
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
                                    <div className="form-group">
                                        <label>Document:</label>
                                        <input type="file" className="form-control"
                                               onChange={this.changeHandler} name="document"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </center>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allCitys: state.city.allCity
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({formData, allCity}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);