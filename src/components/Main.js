import { Component } from "react";
import { Film } from '../List/ListOfFIlm';
import FilmPres from "./FilmPres";


export class Main extends Component{
    constructor (){
        super();
        this.state = {
            listFilms: Film
        };
    }
    render(){
        return <FilmPres listFilms={this.state.listFilms}
        />
    }
}
export default Main;
