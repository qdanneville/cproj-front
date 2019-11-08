import * as React from "react";

class UserRegisterComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            repeatedPassword: "",
            telephone: "",
            city: "",
            zip_code: "",
            userType: {
                name: ""
            },
            submitted: false,
            userTypeList: [{
                name: 'borrowwer'
            },
            {
                name: 'farmer'
            },
            {
                name: 'lender'
            }],
        };
        //console.log("this state gives: ", this.state)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsertypeChange = this.handleUsertypeChange.bind(this);
        // console.log("handle change method " + this.handleChange);
        // console.log("handle submit method " + this.handleSubmit);
    }

    componentDidMount() {
        // console.log("Hey, my component is mounted");
        // let user = {
        //   firstName: "Bajejjebi",
        //   lastName: "Edkekkeu",
        //   username: "kkeke",
        //   email: "kkkekkekedkd@ldlldld.com",
        //   password: "kekekek",
        //   telephone: "+375677790",
        //   city: "Versailles",
        //   zip_code: "78001",
        //   userType: {
        //     name: "borrower"
        //   }
        // }
        // console.log("user gives: ", user);

        // fetch(`http://localhost:8000/api/usertype`, {
        //     method: "GET",
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        // }).then(
        //     data => {
        //         return data.json();
        //     }
        // ).then(response => {
        //     this.setState({ userTypeList: response });
        //     console.log(response);
        // })




    }

    handleChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value);
        this.setState({
            [name]: value
        });

        //this.setState({value: event.target.value});
    }

    handleUsertypeChange(event) {
        console.log(event.target.value);
        this.setState({
            userType: {
                name: event.target.value
            }
        })
    }

    handleAddressChange(city) {
        this.setState({ city });
        //console.log(city);
    }

    handSelect(city) {
        geocodeByAddress(city);
        //console.log("select: " + geocodeByAddress(city));
    }

    handleSubmit(event) {

        event.preventDefault();
        const {
            firstName,
            lastName,
            username,
            email,
            password,
            telephone,
            userType,
            city,
            zip_code,
        } = this.state;

        let user = {
            firstName:firstName,
            lastName:lastName,
            username:username,
            email:email,
            password:password,
            telephone:telephone,
            city:city,
            zip_code:zip_code,
            userType:userType,
        }

        console.log(user)

        //console.log("the state is here: ", this.state);

        this.setState({ submitted: true });
        //console.log("Submitted:", this.state.submitted);

        // fetch(`http://localhost:8000/api/register`, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }).then(data => {
        //     data.json().then(results => {
        //         console.log(results);
        //     })

        // })

    }

    render() {

        return (
            <div className="container">
                <div>
                    <h1>Inscription</h1>
                </div>
                <div className="card card-register bg-light w-50">
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="First name"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                submitted={this.state.submitted ? 1 : 0}

                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="Last name"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                submitted={this.state.submitted ? 1 : 0}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                submitted={this.state.submitted ? 1 : 0}

                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-envelope"></i>
                                </span>
                            </div>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                submitted={this.state.submitted ? 1 : 0}

                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                submitted={this.state.submitted ? 1 : 0}

                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="repeatedPassword"
                                className="form-control"
                                placeholder="Repeated password"
                                value={this.state.repeatedPassword}
                                onChange={this.handleChange}
                                submitted={this.state.submitted ? 1 : 0}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-phone"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="telephone"
                                className="form-control"
                                placeholder="Phone Number"
                                value={this.state.telephone}
                                onChange={this.handleChange}
                                submitted={this.state.submitted ? 1 : 0}

                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-check-circle"></i>
                                </span>
                            </div>
                            <select
                                className="custom-select my-1 mr-sm-2"
                                id="inlineFormCustomSelectPref"
                                value={this.state.value}
                                onChange={this.handleUsertypeChange}
                            >
                                <option value="select">Select who you are</option>
                                {this.state.userTypeList.map(usertype => {
                                    return (
                                        <option key={usertype.name} value={usertype.name}>{usertype.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="far fa-car-building"></i>
                                </span>
                            </div>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-mail-bulk"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="zip_code"
                                className="form-control"
                                placeholder="Code Postal"
                                value={this.state.zip_code}
                                onChange={this.handleChange}
                                submitted={this.state.submitted ? 1 : 0}

                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary btn-block">
                                Register
              </button>
                        </div>
                        <div>
                            <p>
                                <b>Vous avez déjà un compte? </b>
                            </p>
                            <a href="/login">Se Connecter</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UserRegisterComponent;
