import styled from 'styled-components'
import { Column, Row } from 'simple-flexbox'
import TableComponent from './tableComponent'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { connect } from 'react-redux'
import { useState } from 'react';
import { mapDispatchProductToProps } from "../../managers/validations";
import { eventConstants } from '../../managers/eventConstants';

const MainContainer = styled.div`
display: flex;
justify-content: center;
background-color: #101037;
height: 1000px
`
const Filters = styled.select`
width: 154px;
height: 40px;
padding-right: 80px;
margin: 40px 0px 0px 60px;
border-radius: 8px;
border: 1px solid #ebebeb;
background-color: #ffffff;
font-stretch: normal;
font-style: normal;
line-height: 1.19;
letter-spacing: normal;
color: #576170;
font-size: 16px;
font-weight: 300;
outline: none;
text-align-last:right;
font-family: MuseoSans !important;
`

const AddNewProduct = styled.button`
max-width: 175px;
width:100%;
height: 37px;
font-family: MuseoSans;
font-size: 15px;
font-weight: 500;
border-radius: 8px;
position: absolute;
right: 93px;
cursor: pointer;
// background-color: #1caed0;
// color: white;
white-space: nowrap;
border: none;
outline: none;
align-self:flex-end;`

function ProductComponent(props) {
    console.log("props of product===>", props)
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const submitProductData = () => {
        let reqObj = {
            "name": name,
            "description": description,
            "price": price,
            "quantity": quantity
        }
        props.dispatchProduct(eventConstants.ADD_PRODUCT_DATA, reqObj)
        handleClose()
    }
    return (
        <MainContainer>
            <Column>
                <Row>
                    <Filters
                        onChange={props.onChangeEvent}
                    >
                        <option value="price">Price</option>
                        <option value="quantity">Quantity</option>
                    </Filters>
                    <AddNewProduct onClick={handleClickOpen}>+ Add New Product</AddNewProduct>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add New Product</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please Fill in the Following Details
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                required
                                label="Product Name"
                                fullWidth
                                variant="standard"
                                onChange={(event) => setName(event.target.value)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                // value={description}
                                label="Description"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                // value={price}
                                label="Price"
                                type="number"
                                fullWidth
                                variant="standard"
                                onChange={(event) => setPrice(event.target.value)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                // value={quantity}
                                label="Quantity"
                                // type="email"
                                type="number"
                                fullWidth
                                variant="standard"
                                onChange={(event) => setQuantity(event.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={submitProductData}>Submit</Button>
                        </DialogActions>
                    </Dialog>
                </Row>

                <TableComponent.Table cellpadding="0" cellspacing="0">
                    <TableComponent.TableHead>
                        <TableComponent.HeadColumn>Image</TableComponent.HeadColumn>
                        <TableComponent.HeadColumn>Name</TableComponent.HeadColumn>
                        <TableComponent.HeadColumn>Description</TableComponent.HeadColumn>
                        <TableComponent.HeadColumn>Price</TableComponent.HeadColumn>
                        <TableComponent.HeadColumn>Quantity</TableComponent.HeadColumn>
                    </TableComponent.TableHead>

                    <TableComponent.TableBody>
                        {props.productData.map((product) => (
                            <TableComponent.BodyRow>
                                <TableComponent.BodyColumn><img src="/logo192.png" width={30}></img></TableComponent.BodyColumn>
                                <TableComponent.BodyColumn>{product.name}</TableComponent.BodyColumn>
                                <TableComponent.BodyColumn>
                                    {product.description}
                                </TableComponent.BodyColumn>
                                <TableComponent.BodyColumn>{product.price}</TableComponent.BodyColumn>
                                <TableComponent.BodyColumn>{product.quantity}</TableComponent.BodyColumn>
                            </TableComponent.BodyRow>
                        ))}
                    </TableComponent.TableBody>
                </TableComponent.Table>

            </Column>
        </MainContainer>
    )
}

// export default ProductComponent

const mapStateToProps = state => (
    {
        productData: state.product,
    },
    console.log("state of reducer in product", state)
)
export default connect(mapStateToProps, { mapDispatchProductToProps })(ProductComponent);