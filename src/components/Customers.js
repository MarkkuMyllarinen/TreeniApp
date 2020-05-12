import React from 'react';
import ReactTable from "react-table-v6";
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import Editcustomer from "./Editcustomer";
import Addcustomer from "./Addcustomer";
import Addtraining from "./Addtraining";

function Customers() {

    const [listItems, setListItems] = React.useState([]);

    function fetchData() {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(responseData => {
                setListItems(responseData.content);
            })
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    function deleteCustomer(link) {
        console.log(link)

        if (window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
                .then(_ => fetchData())
                .catch(err => console.error(err))

        }
    }

    const editCustomer = (car, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => fetchData())
            .catch(err => console.log(err))
    };

    function addNewCustomer(customer){
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => fetchData())
            .catch(err => console.log(err))
    }
    function addNewTraining(training){
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
        })
            .then(res => fetchData())
            .catch(err => console.log(err))
    }


    const columns = [{
        Header: 'Firstname',
        accessor: 'firstname'
    }, {
        Header: 'Lastname',
        accessor: 'lastname',
    }, {
        Header: 'Email',
        accessor: 'email',
    }, {
        Header: 'Phone',
        accessor: 'phone',
    }, {
        Header: 'Address',
        accessor: 'streetaddress',
    }, {
        Header: 'Postcode',
        accessor: 'postcode',
    }, {
        Header: 'City',
        accessor: 'city',
    },{
        filterable: false,
        sortable: false,
        width: 100,
        Cell: row => (<Button color="secondary" size="small"
                              onClick={() => deleteCustomer(row.row._original.links[1].href)}>Delete</Button>)
    },{
        filterable: false,
        sortable: false,
        width: 100,
        Cell: row => (<Editcustomer editCustomer={editCustomer} customer={row.row._original}/>)
    },{
        filterable: false,
        sortable: false,
        width: 100,
        Cell: row => (<Addtraining addNewTraining={addNewTraining} customer={row.row._original}/>)
    }];

    const defaultSorted = [{
        id: "stringTime",
        desc: true
    }];

    return (
        <div>
            <Addcustomer addNewCustomer={addNewCustomer}></Addcustomer>
            <ReactTable className="App" data={listItems}
                        columns={columns} sortable={true}
                        filterable={true}
                        defaultPageSize={20}
                        defaultSorted={defaultSorted}/>
        </div>
    );
}

export default Customers;
