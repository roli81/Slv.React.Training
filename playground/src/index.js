import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import HelloWorld  from './HelloWorld/HelloWorld';
import Comment from './Comment/Comment';
import Clock from './Clock/Clock';
import { Provider } from 'react-redux';
import store from './Store/index';


window.store = store;


class Playground extends React.Component {


    constructor() {
        super();
        this.state = { value: '' }; 

    }

    render() {
        const author = { 
            name: 'Roli', 
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Yellow',
            alt: 'Bild von Roli'
            };
        const date = new Date().toLocaleTimeString();


        return(
            
        <>
            <HelloWorld name="Roli" />
            <Comment 
            author={author}
            text="Best Comment ever"
            date={date}/>
            <Clock />
        </>
        ) 
    }
}



ReactDOM.render(
<Provider store={store}>
    <Playground />
</Provider> , document.getElementById('root'))





