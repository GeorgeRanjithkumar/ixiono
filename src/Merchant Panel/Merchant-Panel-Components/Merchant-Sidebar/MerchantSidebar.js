import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";

class MerchantSidebar extends Component {
	state = {};

	toggleMenuState(menuState) {
		if (this.state[menuState]) {
			this.setState({ [menuState]: false });
		} else if (Object.keys(this.state).length === 0) {
			this.setState({ [menuState]: true });
		} else {
			Object.keys(this.state).forEach((i) => {
				this.setState({ [i]: false });
			});
			this.setState({ [menuState]: true });
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			this.onRouteChanged();
		}
	}

	onRouteChanged() {
		document.querySelector("#sidebar").classList.remove("active");
		Object.keys(this.state).forEach((i) => {
			this.setState({ [i]: false });
		});

		const dropdownPaths = [
			{ path: "/apps", state: "appsMenuOpen" },
			{ path: "/basic-ui", state: "basicUiMenuOpen" },
			{ path: "/form-elements", state: "formElementsMenuOpen" },
			{ path: "/tables", state: "tablesMenuOpen" },
			{ path: "/icons", state: "iconsMenuOpen" },
			{ path: "/charts", state: "chartsMenuOpen" },
			{ path: "/user-pages", state: "userPagesMenuOpen" },
			{ path: "/error-pages", state: "errorPagesMenuOpen" },
		];

		dropdownPaths.forEach((obj) => {
			if (this.isPathActive(obj.path)) {
				this.setState({ [obj.state]: true });
			}
		});
	}
	render() {
		return (
			<nav className="sidebar sidebar-offcanvas" id="sidebar">
				<div className="text-center sidebar-brand-wrapper d-flex align-items-center">
					<a className="sidebar-brand brand-logo text-white" href="index.html">
						<h3>Payment Gateway</h3>
					</a>
					<a
						className="sidebar-brand brand-logo-mini text-white pt-3"
						href="index.html">
						<h5>Payment Gateway</h5>
					</a>
				</div>
				<ul className="nav">
					<li className="nav-item nav-profile not-navigation-link">
						<div className="nav-link">
							<Dropdown>
								<Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
									<div className="d-flex justify-content-between align-items-start">
										<div className="profile-image">
											<img
												className="img-xs rounded-circle"
												src={require("../../../assets/images/faces/face8.jpg")}
												alt="profile"
											/>
											<div className="dot-indicator bg-success"></div>
										</div>
										<div className="text-wrapper">
											<p className="profile-name">Allen Moreno</p>
											<p className="designation">Premium user</p>
										</div>
									</div>
								</Dropdown.Toggle>
								<Dropdown.Menu className="preview-list navbar-dropdown">
									<Dropdown.Item
										className="dropdown-item p-0 preview-item d-flex align-items-center"
										href="!#"
										onClick={(evt) => evt.preventDefault()}>
										<div className="d-flex">
											<div className="py-3 px-4 d-flex align-items-center justify-content-center">
												<i className="mdi mdi-bookmark-plus-outline mr-0"></i>
											</div>
											<div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
												<i className="mdi mdi-account-outline mr-0"></i>
											</div>
											<div className="py-3 px-4 d-flex align-items-center justify-content-center">
												<i className="mdi mdi-alarm-check mr-0"></i>
											</div>
										</div>
									</Dropdown.Item>
									<Dropdown.Item
										className="dropdown-item preview-item d-flex align-items-center text-small"
										onClick={(evt) => evt.preventDefault()}>
										<Trans>Manage Accounts</Trans>
									</Dropdown.Item>
									<Dropdown.Item
										className="dropdown-item preview-item d-flex align-items-center text-small"
										onClick={(evt) => evt.preventDefault()}>
										<Trans>Change Password</Trans>
									</Dropdown.Item>
									<Dropdown.Item
										className="dropdown-item preview-item d-flex align-items-center text-small"
										onClick={(evt) => evt.preventDefault()}>
										<Trans>Check Inbox</Trans>
									</Dropdown.Item>
									<Dropdown.Item
										className="dropdown-item preview-item d-flex align-items-center text-small"
										onClick={(evt) => evt.preventDefault()}>
										<Trans>Sign Out</Trans>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</li>

					<li
						className={
							this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
						}>
						<Link className="nav-link" to="/merchant/dashboard">
							<i className="mdi mdi-television menu-icon"></i>
							<span className="menu-title">
								<Trans>Dashboard</Trans>
							</span>
						</Link>
					</li>
					<li
						className={
							this.isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
						}>
						<div
							className={
								this.state.UserProfileMenuOpen
									? "nav-link menu-expanded"
									: "nav-link"
							}
							onClick={() => this.toggleMenuState("UserProfileMenuOpen")}
							data-toggle="collapse">
							<i className="mdi mdi-crosshairs-gps menu-icon"></i>
							<span className="menu-title">
								<Trans>Profile</Trans>
							</span>
							<i className="menu-arrow"></i>
						</div>
						<Collapse in={this.state.UserProfileMenuOpen}>
							<ul className="nav flex-column sub-menu">
								<li className="nav-item">
									{" "}
									<Link
										className={
											this.isPathActive("/basic-ui/buttons")
												? "nav-link active"
												: "nav-link"
										}
										to="/merchant/profile">
										<Trans>User Profile</Trans>
									</Link>
								</li>
								<li className="nav-item">
									{" "}
									<Link
										className={
											this.isPathActive("/basic-ui/dropdowns")
												? "nav-link active"
												: "nav-link"
										}
										to="/merchant/MerchantChangedPassword">
										<Trans>Change Password</Trans>
									</Link>
								</li>
							</ul>
						</Collapse>
					</li>
					<li
						className={
							this.isPathActive("/merchant/merchant-user-deposits")
								? "nav-item active"
								: "nav-item"
						}>
						<Link className="nav-link" to="/merchant/merchant-user-deposits">
							<i className="mdi mdi-television menu-icon"></i>
							<span className="menu-title">
								<Trans>User Deposits</Trans>
							</span>
						</Link>
					</li>

					<li
						className={
							this.isPathActive("/merchant/transactionhistory")
								? "nav-item active"
								: "nav-item"
						}>
						<Link className="nav-link" to="/merchant/transactionhistory">
							<i className="mdi mdi-television menu-icon"></i>
							<span className="menu-title">
								<Trans>Transaction Histories</Trans>
							</span>
						</Link>
					</li>

					<li
						className={
							this.isPathActive("/merchant/deposits-to-merchant")
								? "nav-item active"
								: "nav-item"
						}>
						<Link className="nav-link" to="/merchant/deposits-to-merchant">
							<i className="mdi mdi-television menu-icon"></i>
							<span className="menu-title">
								<Trans>Deposits to Merchant</Trans>
							</span>
						</Link>
					</li>

					<li
						className={
							this.isPathActive("/merchant/deposits-to-merchant")
								? "nav-item active"
								: "nav-item"
						}>
						<Link className="nav-link" to="/merchant/deposits-to-merchant">
							<i className="mdi mdi-television menu-icon"></i>
							<span className="menu-title">
								<Trans>Reports</Trans>
							</span>
						</Link>
					</li>

					<li
						className={
							this.isPathActive("/merchant/withdrawalrequest")
								? "nav-item active"
								: "nav-item"
						}>
						<Link className="nav-link" to="/merchant/withdrawalrequest">
							<i className="mdi mdi-television menu-icon"></i>
							<span className="menu-title">
								<Trans>Withdrawal Request</Trans>
							</span>
						</Link>
					</li>

					<li
						className={
							this.isPathActive("/user-pages") ? "nav-item active" : "nav-item"
						}>
						<div
							className={
								this.state.userPagesMenuOpen
									? "nav-link menu-expanded"
									: "nav-link"
							}
							onClick={() => this.toggleMenuState("userPagesMenuOpen")}
							data-toggle="collapse">
							<i className="mdi mdi-lock-outline menu-icon"></i>
							<span className="menu-title">
								<Trans>Merchant Pages</Trans>
							</span>
							<i className="menu-arrow"></i>
						</div>
						<Collapse in={this.state.userPagesMenuOpen}>
							<ul className="nav flex-column sub-menu">
								<li className="nav-item">
									{" "}
									<Link
										className={
											this.isPathActive("/user-pages/login-1")
												? "nav-link active"
												: "nav-link"
										}
										to="/user-pages/login-1">
										<Trans>Login</Trans>
									</Link>
								</li>
								<li className="nav-item">
									{" "}
									<Link
										className={
											this.isPathActive("/user-pages/register-1")
												? "nav-link active"
												: "nav-link"
										}
										to="/merchant/registration">
										<Trans>Register</Trans>
									</Link>
								</li>
							</ul>
						</Collapse>
					</li>
				</ul>
			</nav>
		);
	}

	isPathActive(path) {
		return this.props.location.pathname.startsWith(path);
	}

	componentDidMount() {
		this.onRouteChanged();
		// add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
		const body = document.querySelector("body");
		document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
			el.addEventListener("mouseover", function () {
				if (body.classList.contains("sidebar-icon-only")) {
					el.classList.add("hover-open");
				}
			});
			el.addEventListener("mouseout", function () {
				if (body.classList.contains("sidebar-icon-only")) {
					el.classList.remove("hover-open");
				}
			});
		});
	}
}

export default withRouter(MerchantSidebar);
