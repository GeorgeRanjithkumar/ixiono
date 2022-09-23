import React, { Component } from "react";
// import { Line, Doughnut, Bar, Radar } from 'react-chartjs-2';

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import AdminForm from "../../Admin-Panel-Components/Admin-Panel-Form/Admin-Form";
import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";

export class AdminPaymentTransaction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			active: "",
		};
		// this.statusChangedHandler = this.statusChangedHandler.bind(this);
		// this.addTodo = this.addTodo.bind(this);
		// this.removeTodo = this.removeTodo.bind(this);
		// this.inputChangeHandler = this.inputChangeHandler.bind(this);
	}

	toggleProBanner() {
		document.querySelector(".proBanner").classList.toggle("hide");
	}
	render() {
		return (
			<div>
				<div className="row page-title-header">
					<div className="col-12">
						<div className="page-header">
							<h4 className="page-title">Payment Transaction</h4>
						</div>
					</div>
				</div>

				<AdminForm />
				<AdminTable />
			</div>
		);
	}
}
export default AdminPaymentTransaction;
