import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import myself from "../assets/avatar.png";

class Landing extends Component {
    render() {
        return(
        <div style = {{width:'100%', margin:'auto'}}>
           <Grid className = 'landing-grid'>
               <Cell col={12}>
                    <img src={myself} alt = "avatar" className="avatar-img"/>
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | React | JavaScript | Python</p>
                        <div className = "social-links">
                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/jiaqixu-csworld/" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-linkedin" aria-hidden="true"></i>
                            </a>
                            {/* github */}
                            <a href="https://github.com/xu1jia2qi3" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-github-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
               </Cell>
           </Grid>
        </div>)
    }
}

export default Landing;