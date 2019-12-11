import React, { Component } from 'react';
import Header from './Header';
import News from './News';
import Form from './Form';
class App extends Component {

  state={
    news: []
  };

 componentDidMount(){
    this.getNews()   
  }

  getNews= async (category="general")=>{
    
    this.setState({news:[]})
    const url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=aeab2d66b41a418da79d3ebb934c0d14`;
    const response= await fetch(url);
    const news = await response.json();
    this.setState({news: news.articles})
  }
  
  render() {
    return (
      <>
        <Header title="News api"/>
        <div className="container white contenedor-noticias">
          <Form
            getNews={this.getNews}
          />
          <News
            news={this.state.news}
          />
        </div>
      </>
    );
  }
}


export default App;