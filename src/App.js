import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actions";

class App extends Component {
	render() {
		console.log(this.props.ctr, this.props.res);
		let result = "Nothing";
		if (this.props.res.length) {
			result = this.props.res.map((el, id) => {
				return <li onClick={() => this.props.onDelete(id)}>{el.val}</li>;
			});
		}

		return (
			<div>
				<button onClick={this.props.onIncrement}>add</button>
				<button onClick={this.props.onDecrement}>subtract</button>
				<button onClick={this.props.onStore}>Store</button>
				<ul>{result}</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ctr: state.counter,
		res: state.result,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
		onDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
		onStore: () => dispatch({ type: actionTypes.STORE }),
		onDelete: (id) => dispatch({ type: actionTypes.DELETE, id: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
