import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import api from "./api";
import axios from "axios";

export default class View extends Component {

    setValue = "";
    setData = [];

    constructor(props) {
        super(props);
        this.state = {
            socialMediaPosts: [],
            searchItem: "",
            value: "",
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {

                const socialMediaPosts = response.data;
                this.setState({socialMediaPosts})
            })
    }

    handleChange = event => {
        this.setState({searchItem: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const post = {
            postName: this.state.postName
        };

        api.post("https://jsonplaceholder.typicode.com/posts", {post})
            .then(response => {
                console.log(response);
                console.log(response.data);
            })
    }

    render() {
        return (
            <div style={{marginTop: "100px"}}>
                <h2 className="text-center">
                    Buscar
                </h2>
                <form
                    onSubmit={this.handleSubmit}
                    style={{
                        margin: "auto",
                        padding: "15px",
                        maxWidth: "400px",
                        alignContent: "center"
                    }}

                >
                    <input style={{margin: "auto"}}
                           type="text"
                           className="form-control"
                           placeholder="Search"
                           value={this.value}
                           onChange={this.handleChange}
                    >
                    </input>
                    <button
                        style={{marginTop: "0.5rem"}}
                        type="submit"

                    >
                        Pesquisar
                    </button>
                </form>

                <Table striped bordered hover size="sm">
                    <tbody>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>

                    {this.state.socialMediaPosts.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        );
    }


}


