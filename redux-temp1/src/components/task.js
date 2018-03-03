import React from 'react';
import {task} from './../actionMethods/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Task extends React.Component {
    constructor() {
        super();
        this.state = {
            show:'',
            isEditing: false,
            userValues: {
                content: '',
                newContent: ''
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({a: 'a'});
    }

    loginHandler = () => {
        this.props.task(this.state.userValues);
    };

    getValue = (e) =>
    {
        const {show} = this.state;
        this.setState({
           show: e.target.innerHTML
        });
    }


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

    update = (evt) =>
    {
        evt.preventDefault();
        alert(this.input.value);
    }
    render() {
        const {isEditing} = this.state;
        return (
            <div className="container">
                <div className="col-sm-4">
                    <input type="text" name="content" value={this.state.userValues.content} onChange={this.changeHandler}/>
                    <button onClick={this.loginHandler} className="btn btn-primary">Add Item</button>
                </div>
                {/*<div calssName="clo-sm-4">*/}
                    {/*<input type="text" value={this.state.show} onKeyPress={this.noneValue} />*/}
                    {/*<input type="text" name="newContent" onChange={this.changeHandler}/>*/}
                    {/*<button onClick={this.loginHandler} >Edit</button>*/}
                {/*</div>*/}
                <div className="col-sm-4">
                            <ul>
                                {
                                    this.props.taskList.map((value, index) => {
                                       return  isEditing ?
                                         <form onSubmit={this.update}>
                                            <input type="text"  ref={(value)=> {this.input = value} } defaultValue={value.content} key={index}/>
                                            <button type="Submit">Update Item</button>
                                        </form> :
                                         <li className="list-group-item list-group-item-success" key={index} onClick={this.getValue} name="Items">{value.content}<button onClick={this.toggle} value={index}>Update</button></li>
                                    })
                                }
                            </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taskList: state.task.tasks
    }
};

//export default Home;
const mapDispatchToProps = (dispatch) => bindActionCreators({task}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Task);