import React, { Component } from 'react';

class Form extends Component {
    state={
        category:'general'
    }

    handleCategory =(event)=>{

        this.setState({category: event.target.value},
            ()=>{
                this.props.getNews(this.state.category);
            });
    }
    render() {
        return (
            <div className="buscador row">
                 <div className="col s12 m8 offset-m2">
                     <form>
                         <h2>Find news by category</h2>
                         <div className="input-field col s12">
                             <select onChange={this.handleCategory}>
                                 <option value="general" selected>General</option>
                                 <option value="business">Business</option>
                                 <option value="entertainment">Entertainment</option>
                                 <option value="health">Health</option>
                                 <option value="sports">Sports</option>
                                 <option value="science">Science</option>
                                 <option value="technology">Technology</option>
                             </select>
                         </div>
                     </form>
                 </div>
            </div>
        );
    }
}

export default Form;