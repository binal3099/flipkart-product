import React, { useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router'
import Count from '../Count/Count';
import Total from '../Total/Total';

function AddToCart() {

    const Add_to = useSelector(state => state.Cart_Addreducer.cart);

    const [total, setTotal] = useState(0);

    // const handleInc = () => {
    //     setCount(count + 1);
    //     Total();
    // }

    // const handleDec = () => {
    //     if (count > 1)
    //         setCount(count - 1)
    //     Total();
    // }

    // console.log("Add_to", Add_to);

    // const Total = (id=0) => {
    //     if(Add_to.length != 0){
    //         let price = Add_to[id].price;
    //         console.log("price",price);
    //         // setTotal(count * total);

    //     }
    // }


    return (
        <>
            <Container>
                <Row>
                    <div className='mt-4 d-flex'>
                        <div className='col-8'>
                            <Table striped bordered hover>
                                <thead>

                                </thead>
                                <tbody>
                                    {
                                        Add_to.map((e, index) => {
                                            return (
                                                <tr>
                                                    <td><div style={{ width: "112px", height: "112px" }}>
                                                        <img style={{ width: "100%", height: "100px" }} src={e.thumbnail} alt="" />
                                                    </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <a className='Add_title'>{e.title}</a>
                                                            <Count id = {index}/>
                                                            <p>${e.price}</p>
                                                            <p >{e.description}</p>

                                                        </div>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </Table>
                        </div>
                        <div className='col-4 Pricedetail'>
                            <Total />
                        </div>

                    </div>

                </Row>
            </Container>
        </>
    )
}

export default AddToCart