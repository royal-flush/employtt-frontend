import React from 'react';

export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Name: "",
          Address: "",
          Email: "",
          PhoneContact: "",
          Photo: "",
          resume: "",
          resumeFields: [],
          editPCard: false,
        };
    }

    render(){
        return(
            <h1>Testing</h1>
        );
    }
}