import { Component } from "react";
import { Row, Column } from "simple-flexbox";
import Header from "./header";
import ProductComponent from "./productComponent";
import { connect } from 'react-redux'
import { history } from "../../managers/history";
import { mapDispatchProductToProps } from "../../managers/validations";
import { eventConstants } from "../../managers/eventConstants";




class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            price: "",
            quantity: ""
        }
        console.log("inside product index", props)
    }

    onChangeEvent = (event) => {
        this.setState({ [event.target.id]: event.target.value });
        if (event.target.id === "price") {
            return this.props.productData.sort()
        }
        console.log("value clicked", event.target.value)
    };

    submitProductData = () => {
        let reqObj = {
            "name": this.state.name,
            "description": this.state.description,
            "price": this.state.price,
            "quantity": this.state.quantity
        }
        this.props.mapDispatchProductToProps(eventConstants.ADD_PRODUCT_DATA, reqObj)
    }


    logout = () => {
        history.push('/')
        console.log("logout clicked")
    }

    render() {
        return (
            <Column>
                <Header
                    state={this.state}
                    logout={this.logout}
                />
                <ProductComponent
                    state={this.state}
                    onChangeEvent={this.onChangeEvent}
                    submitProductData={this.submitProductData}
                    productData={this.props.productData}
                    dispatchProduct={this.props.mapDispatchProductToProps}
                />
            </Column>
        )
    }
}

const mapStateToProps = state => (
    {
        productData: state.product.productData,
    }
)

export default connect(mapStateToProps, { mapDispatchProductToProps })(Dashboard);