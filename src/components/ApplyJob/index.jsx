import React from 'react';

function Jobs(props){
    var rows = [];
}

class EmployTT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position:[],
            category:[],
            ministry:[],
            date:[],
        };
    }

    componentWillMount(){
        axios.get("http://localhost:80/api/getJobs").then(doc => {
            for(var x = 0; x<doc.data.length; x++){
                this.setState(state => {
                    state.position.push(doc.data[x].position)
                    state.ministry.push(doc.data[x].ministry)
                    state.description.push(doc.data[x].description)
                    state.date.push(doc.data[x].date)
                })
            }
        })
    }

    render(){
        return(
            
        )
    }
}