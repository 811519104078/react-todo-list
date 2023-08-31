import React, { useState } from 'react';

export let c ='vaky';
  export function Test1(){
    let c = 'return';
    return<p><b>{c}</b>test</p>
  }
  export function Exam1(){
    return <div>
        test 2;
    </div>
  }
  /* state*/
 export class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  export function MapTest(){
    let source = ['naresh', 'suresh', 'jithesh']
    return<>{
    source.map(i=> <p>{i}</p>)
  }
  </>
  }
 export class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this) ;  
      this.multiply = this.multiply.bind(this);
      this.reset = this.reset.bind(this);
  
  
    
    }
    
  reset(){
    this.setState({
      count:0
    });
  }
  increment(){
    this.setState(state=>({
      count: state.count +1
    }));
  }
  decrement(){
    this.setState(state=>({
      count:state.count-1
    }));
  }
  multiply(){
    this.setState(state=>({
      count:state.count*2
    }))
  }
  
    
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <button className='multiply' onClick={this.multiply}>Multiply</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };
 export class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      
      this.handleChange = this.handleChange.bind(this)
    }
    
  handleChange(event) {
        this.setState({
        input:event.target.value
      });
      }
    
    render() {
      return (
        <div>
          
  <input value={this.state.input} onChange={this.handleChange} />
          
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };
  export class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault()
      this.setState({
        submit: this.state.input
      });
      
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            
          <input value= {this.state.input} onChange={this.handleChange} />
           
            <button type='submit'>Submit!</button>
          </form>
          
       <h1>{this.state.submit}</h1>
          
        </div>
      );
    }
  }
  
  export class MyComp extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      
      let a = "jolly";
     console.log(a);
      
    }
    render() {
      return <div />
    }
  };
  export function Chinna(){
    const Chill = ()=>{
       document.getElementById('get').innerHTML = 'Max';
    }
    return <>
    <button onClick={()=> Chill()}>Click here</button>
    <div id="get"></div>
    </>
  }
  export function State(){
const[getName,setName] = useState(" ");

    const Can = ()=>{
         if(setName==''){
          alert('The input is valid');
         }
         else{
          alert('the input is not valid');
         }
    }
    return<>
     <input type='text' onChange={ (event)=>setName(event.target.value)} />
     <button id='btn' onClick={()=>Can()}>submit</button>
     <div id='same'>{getName}</div>
    </>
  }
  

  const inputStyle = {
    width: 235,
    margin: 5
  };
  
 export class MagicEightBall extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: ''
      };
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    render() {
      const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
      const answer = possibleAnswers[ this.state.randomIndex]; 
      return (
        <div>
          <input
            type='text'
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <br />
          <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
          <br />
          <h3>Answer:</h3>
          <p>
           
            {answer}
            
          </p>
        </div>
      );
    }
  }

  const textAreaStyles = {
    width: '235px',
    margin: 5
  };
  
  export class MyToDoList extends React.Component {
    constructor(props) {
      super(props);
      
       this.state={
         userInput:'',
         toDoList:[]
       };
      
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
      const itemsArray = this.state.userInput.split(',');
      this.setState({
        toDoList: itemsArray
      });
    }
    handleChange(e) {
      this.setState({
        userInput: e.target.value
      });
    }
    render() {
      const items = this.state.toDoList.map(i =><li>{i}</li>); 
      return (
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder='Separate Items With Commas'
          />
          <br />
          <button onClick={this.handleSubmit}>Create List</button>
          <h1>My "To Do" List:</h1>
          <ul>{items}</ul>
        </div>
      );
    }
  }
  export function Property(props){
    const game = props.brand.map(i=><table style={{border:"1px solid black"}}>
    <tr >
                                    <td >{i.name}</td>
                                   <td>{i.model}</td>
                                    </tr>
                                    </table>) 
   return <>
            <div >{game}</div>
              
              </>
  }
  export function Car(){
    const cars = [{name:"totyota", model:"suv"},
    {name:"totyota", model:"suv"},
    {name:"totyota", model:"suv" }]
                
    return(
      <>
       <Property brand = {cars} />
    </>
    );
  }

  export function Welcome(props) {
    return <h1>Hello, {props.age}</h1>;
  }

  

  export class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }



  export function Use(){
    const[usGet, usSet]= useState({})

    const Submit=(e)=>{
        e.preventDefault();
        console.log(usGet);
    }

    const Update=(e)=>{
        usSet(v=>({...v, [e.target.name]:[e.target.value]}))
    }
    return<>
    <form onSubmit={Submit}>
      <input type='text' name='text1' onChange={(e)=> Update(e)} />
      <input type='pasword' name='pass1' onChange={(e)=> Update(e)} />
      <input type='text' name='text2' onChange={(e)=> Update(e)} />
      <button>Sign in</button>

    </form>
    </>
  }


  export function Bapp() {
    const [name, setName] = useState(50)
  
    function Increment(){
      setName(prevNum=> prevNum+1)
    }
    function Decrement(){
      setName(nextNum=> nextNum-1)
    }
    return (
      <div>
         <button onClick={Increment}>+</button>
         <p>{name}</p>
         <button onClick={Decrement} >-</button>
           </div>
    );
  }
{/* function NavTest(){
  return<>
  <BrowserRouter>
  <Router>
    <Route path='st' element={<State />} />
  </Router>
  </BrowserRouter>
  </>
}*/}


 

/*function NavCre(){

return <>

    <BrowserRouter>

        <Routes>

            <Route path='/' element={<RootRout />}>

                <Route index element={<B1 />} />

                <Route path='t1' element={<Test />} />

                <Route path='d1' element={<Data1 />} />

                <Route path='*' element={<Data1 />} />

            </Route>

        </Routes>

    </BrowserRouter>

</>

}
function RootRout(){

  return <>
  
  <p>
  
      <Link to="/">Home</Link>
  
  </p>
  
  <p>
  
      <Link to="t1">Test page</Link>
  
  </p>
  
   
  
  <p>
  
      <Link to="d1">Data page</Link>
  
  </p>
  
   
  
  <Outlet />
  
  </>
  
  }
  
   
  
  function B1(){ return <p> B1 called</p> }
  
  function Test(){ return <p> Test1 called</p> }
  
  function Data1(){
  
   
  
      const nav1 = useNavigate()
  
   
  
      const rectRed = () =>{
  
          nav1("/t1");
  
      }
  
   
  
      return <>
  
       <p> Data1 called</p>
  
       <button onClick={rectRed}>Back to home</button>
  
       </>
  
   
  
  }
*/ 
 




