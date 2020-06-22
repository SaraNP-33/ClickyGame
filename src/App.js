import React, {Component} from 'react';
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import ScrubsCards from "./components/ScrubsCards";
import Jumbotron from "./components/Jumbotron";
import scrubs from './scrubs.json';
import title from "../images/title.png";


class App extends Component {
  state ={
    scrubs:scrubs,
    score:0,
    topScore:0,
    clicked:[]
  }
  clickCard=event=>{
    // console.log("card clicked")
    // console.log(event.target)
    this.cardShuffle();
    var id= event.target.getAttribute("data-id");
    console.log(id)
    if(this.state.clicked.includes(id)){
      console.log("you lose")
      alert("You clicked on the same image...you lose")
      this.setState({
        clicked: [],
        score:0,
      })
    }else{
      var copy = [...this.state.clicked]
      copy.push(id)
      if(copy.length === 12){
        console.log("you won!")
      }else{
      this.setState({
        clicked: copy,
        score: this.state.score+1,
        topScore:(this.state.score +1>this.state.topScore) ? this.state.topScore+1 : this.state.topScore
      })

    }
    }
  }
  cardShuffle= ()=>{
    var scrubs2= [...this.state.scrubs]
    scrubs2.sort((a,b)=> Math.random()-.5)
    this.setState({
      scrubs:scrubs2

    })
  }

  render(){
    console.log(this.state.clicked)
    return(
      <>
        
      <Jumbotron>
      <img alt="logo" src={title}></img>
      <p className="lead">Don't Click on the Same Image Twice!</p>
      <hr className="my-4"></hr>
      <h3>Score:{this.state.score}</h3>
      <h3>Top Score:{this.state.topScore}</h3>
    </Jumbotron>
    <Container>
      <Wrapper >
        {this.state.scrubs.map(scrubs=>(
             <ScrubsCards
              click={this.clickCard}
               key={scrubs.id}
               id= {scrubs.id}
               image={scrubs.image}
               name={scrubs.name}
             />
        ))}
     
      </Wrapper>
      </Container>
      </>
    )
  }
}

export default App;
