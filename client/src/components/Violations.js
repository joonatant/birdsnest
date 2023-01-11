import { useEffect, useState } from 'react';
import axios from 'axios'
import { Table, Grid } from 'semantic-ui-react'
import './styles/Violations.css'

const Violations = () => {

    const [violations, setViolations] = useState([]);

    useEffect( () => {
        setInterval( () => {
            axios.get('/violations', {responseType: "json"})
            .then( response => {
                setViolations(Object.values(response.data))
            } ).catch( err => {
                console.log(err)
        })}, 2000)

    }, [])

    return (
        <div className='Violations'>
            <Grid centered>
                <Table celled className='Violations-table' textAlign='center'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Closest Violation (m)</Table.HeaderCell>
                            <Table.HeaderCell>Drone Owner's Name</Table.HeaderCell>
                            <Table.HeaderCell>E-Mail</Table.HeaderCell>
                            <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {violations.map( (v, i) => {
                            return (
                            <Table.Row key={i}>
                                <Table.Cell>{Math.round(v.dist/1000)}</Table.Cell>
                                <Table.Cell>{v.firstName} {v.lastName}</Table.Cell>
                                <Table.Cell>{v.phoneNumber}</Table.Cell>
                                <Table.Cell>{v.email}</Table.Cell>

                            </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>                
            </Grid>
        </div>
    )
}

export default Violations