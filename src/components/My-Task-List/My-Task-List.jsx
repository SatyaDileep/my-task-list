import React, { Component } from "react";
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";
import "./my-task-list.css";

class MyTaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: "",
            tasklist: []
        };
    }

    // on load get the task list from storage
    componentDidMount = () => {
        this.getTasks();
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // add task to the list
    onSubmit = () => {
        // check if task is empty string
        if (this.state.task) {
            // get the task list from local storage
            let tasklist = JSON.parse(localStorage.getItem("tasklist"));
            // if tasklist is null there are no entries
            // so create an empty list for it
            if (tasklist == null) {
                tasklist = [];
            }
        

            // create task object default status is false
            let task = {
                task: `📄 ${this.state.task}`,
                status: false
            };
            // add this to the tasklist
            tasklist.push(task);

            // save to localstorage
            localStorage.setItem("tasklist", JSON.stringify(tasklist));

            // clear the form
            this.setState({
                task: ""
            });

            // refresh the tasks
            this.getTasks();
        }
    };

    // get tasks function
    getTasks = () => {
        // get the task list from local storage
        let tasklist = JSON.parse(localStorage.getItem("tasklist"));

        // check if task list empty
        if (tasklist) {
            // sort all tasks on the basis of status
            // completed will be moved down
            tasklist = tasklist.sort((a, b) => {
                if (a.status) {
                    return 1;
                }
                else if (b.status) {
                    return -1;
                }
                return 0;
            });

            // save the task list in the local storage
            localStorage.setItem("tasklist", JSON.stringify(tasklist));

            // set the tasklist to the state
            this.setState({
                // default color
                // incomplete => yello, complete : green
                tasklist: tasklist.map((item, index) => {
                    let color = "yellow";
                    let cardBackground = { background: "white" };
                    let taskComplete = { textDecoration: "none" };

                    if (item.status) {
                        color = "green";
                        cardBackground.background = "beige";
                        taskComplete["textDecoration"] = "line-through";
                    }

                    return (
                        <Card key={index} color={color} fluid style={cardBackground}>
                            <Card.Content>
                                <Card.Header textAlign="left" style={taskComplete}>
                                    <div style={{ wordWrap: "break-word" }}>{item.task}</div>
                                </Card.Header>

                                <Card.Meta textAlign="right">
                                    <Icon
                                        link
                                        name="check circle"
                                        color="green"
                                        onClick={() => this.updateTask(index)}
                                    />
                                    <span style={{ paddingRight: 10 }}>Done</span>
                                    <Icon
                                        link
                                        name="undo"
                                        color="yellow"
                                        onClick={() => this.undoTask(index)}
                                    />
                                    <span style={{ paddingRight: 10 }}>Undo</span>
                                    <Icon
                                        link
                                        name="delete"
                                        color="red"
                                        onClick={() => this.deleteTask(index)}
                                    />
                                    <span style={{ paddingRight: 10 }}>Delete</span>
                                </Card.Meta>
                            </Card.Content>
                        </Card>
                    );
                })
            });
        }
    };

    // update the task status to true
    updateTask = index => {
        // get the task from local storage
        let tasklist = JSON.parse(localStorage.getItem("tasklist"));

        // change the status to true
        tasklist[index].status = true;
        // save the updated task list
        localStorage.setItem("tasklist", JSON.stringify(tasklist));
        //refresh the list in UI
        this.getTasks();
    };

    // undo the task
    undoTask = index => {
        // get the task from local storage
        let tasklist = JSON.parse(localStorage.getItem("tasklist"));
        // set status to false
        tasklist[index].status = false;
        // save to localstorage
        localStorage.setItem("tasklist", JSON.stringify(tasklist));
        //refresh the list in UI
        this.getTasks();
    };

    // delete the task from the task list
    deleteTask = index => {
        // get the task list from the local storage
        let tasklist = JSON.parse(localStorage.getItem("tasklist"));
        // remove the task from the task list
        tasklist.splice(index, 1);
        // save the updated task list
        localStorage.setItem("tasklist", JSON.stringify(tasklist));
        // refresh the task list
        this.getTasks();
    };

    render() {
        return (
            <div>
                <div>
                    <Header as="h1">
                        
                        
                    </Header>
                </div>
                <div className="app-form">
                    <Form onSubmit={this.onSubmit}>
                        <Input
                            type="text"
                            name="task"
                            onChange={this.onChange}
                            value={this.state.task}
                            fluid
                            placeholder="enter the task..."
                        />
                    </Form>
                </div>
                <div>
                    <Card.Group>{this.state.tasklist}</Card.Group>
                </div>
            </div>
        );
    }
}
export default MyTaskList;