import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Table ,Row, Col} from 'reactstrap';
import Setting from '../Setting'
import TableRowPost from '../component/TableRowPost';



class  List_post extends Component{
    constructor(props) {
       super(props);
        const { params } = this.props.match
       this.state = {posts: [], id_user:  params.id};
       console.log(this.state.id_user);
     }
     componentDidMount(){
         axios.get(Setting.url + '/posts?userId='+this.state.id_user)
       .then(response => {
         this.setState({ posts: response.data });
         console.log('data post : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     render(){
         return(<div>
                <Row>
                <Col>
                    <h1> List  Post User </h1>
                </Col>
                </Row>
                <Row>
                <Col>
                <Link to="/add-post" ><Button color="success">Add Post </Button>  </Link>
                </Col>
                </Row>
                <Row> 
                <Table dark>
                    <thead >
                        <tr>
                         <td>Nomer </td>
                            <td>Id Post </td>
                             <td>Judul Post </td>
                            <td> Body Post </td>
                            <td> # </td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map((data,key)=>
                        <TableRowPost key={key} id={key} obj={data}/>
                    )}
                    </tbody>
                </Table>
                </Row>
                </div>);
     }
    
}
export default List_post;