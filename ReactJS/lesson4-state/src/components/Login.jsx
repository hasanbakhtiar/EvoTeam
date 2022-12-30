import React, { Component } from "react";

const data = {
    useremail:"info@example.com",
    userpassword:"info123"
}

class Login extends Component {

    constructor(){
        super();
        this.state={
            email:"",
            pass:"",
            alerttext:"",
            style:"",
            inputType:"password",
            iconClassName:"fa-solid fa-eye",
            mode:'bg-light text-dark',
            modeIcon:"🌙",
            btnClassName:'dark'
        }
    }

    formSubmit=(e)=>{
            e.preventDefault();
            if (!this.state.email || !this.state.pass) {
                this.setState({
                    alerttext:"please, fill input!",
                    style:"warning"
                })
            }else{
                if (this.state.email === data.useremail && this.state.pass === data.userpassword) {
                        this.setState({
                            alerttext:"login is successfull",
                            style:"success"
                        })
                }else{
                    this.setState({
                        alerttext:"email or password is wrong!",
                        style:"danger"
                    })
                }
            }
    }
    
    eyeCheck=()=>{
            if (this.state.inputType === 'password') {
                this.setState({
                    inputType:"text",
                    iconClassName:"fa-solid fa-eye-slash"
                })
            }else{
                this.setState({
                    inputType:"password",
                    iconClassName:"fa-solid fa-eye"
                })
            }
    }

    mode=()=>{
        if (this.state.mode === 'bg-light text-dark') {
            this.setState({
                mode:"bg-dark text-light",
                modeIcon:"🌞",
                btnClassName:'secondary'
            })
        }else{
            this.setState({
                mode:'bg-light text-dark',
                modeIcon:"🌙",
                btnClassName:'dark'
                
            })
        }


    }
    
    // 
  render() {
    return (
   <>
   <button onClick={this.mode} className={`btn btn-${this.state.btnClassName}`}>{this.state.modeIcon}</button>
   <div className="container mt-5">
        <h1 className="text-center">Login Page</h1>
        <div className="d-flex align-items-center justify-content-center flex-column">
            <p className={`alert alert-${this.state.style}`}>{this.state.alerttext}</p>

          <form className="col-6" onSubmit={this.formSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input onChange={(e)=>{this.setState({
                email:e.target.value
              })}} type="email" className={`form-control ${this.state.mode}`} placeholder="enter email"/>
            </div>
            <label className="form-label">Password</label>
            <div className="input-group mb-3">
            <input   onChange={(e)=>{this.setState({
                pass:e.target.value
              })}} type={this.state.inputType} className={`form-control ${this.state.mode}`} placeholder="enter password" />
            <button onClick={this.eyeCheck} className="btn btn-dark" type="button"><i className={this.state.iconClassName}></i></button>
            </div>

         

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>


        </div>
      </div>
   
   
   </>
    );
  }
}

export default Login;
