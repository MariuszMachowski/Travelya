import React, { Component } from 'react'
import '../styles/Newsletter.css';
class Newsletter extends Component {
    state = {
        value: "",
        correct: false,
        wrongEmail: false
    }
    handleEmailInsert = (e) => {
        this.setState({ value: e.target.value });
    }
    handleEmailSend = (e) => {
        e.preventDefault();
        if (this.state.value.indexOf('@') === -1 || this.state.value.length < 7) {
            this.setState({ wrongEmail: true });
        } else {
            const succesInfoDiv = document.querySelector('div.succesInfo');
            succesInfoDiv.classList.add('active');
            this.setState({ value: "", wrongEmail: false });
        }
    }
    handleHideMessage = () => {
        const succesInfoDiv = document.querySelector('div.succesInfo');
        succesInfoDiv.classList.remove('active');
    }
    render() {
        return (

            <section className="newsletter">
                <form className="newsWrap" onSubmit={this.handleEmailSend} noValidate>
                    <p className='info'>Be informed about Indonesia as a travel destination.</p>
                    <p className="wrongEmail" style={this.state.wrongEmail ? { display: 'block' } : { display: 'none' }}>Please enter a valid email adress.</p>
                    <input type="email" value={this.state.value} onChange={this.handleEmailInsert} placeholder='Enter your email adress ...' />
                    <button type="submit">Subscribe</button>
                    <div className="succesInfo">
                        <i onClick={this.handleHideMessage} className="fas fa-times hide"></i>
                        <p>Your Email has been succesfully added.</p>
                        <p>Thank you!</p>
                    </div>
                </form>
            </section>
        );
    }
}

export default Newsletter;