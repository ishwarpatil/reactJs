import React from 'react';
import {formData, allCity} from './../actionMethods/auth';
import {bindActionCreators} from 'redux';
import './comoponents.css';
import {connect} from 'react-redux';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            userValues: {
                name: '',
                email: '',
                hobby: [],
                city: ''
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

    render() {
        debugger;
        return (
            <div className="container">
                <div className="col-sm-4">
                    <h2>Stacked form</h2>
                    <form onSubmit={this.formHandler}>
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
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