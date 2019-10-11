import React, {Component} from 'react';
import {Grid, Cell,List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
        <div className = "contact-body">
            <Grid className = "contact-grid">
                <Cell col={6}>
                    <h2>Jiaqi Xu</h2>
                    <img src="https://image.flaticon.com/icons/svg/702/702030.svg"
                    alt = "avatar"
                    style ={{height:'250px'}}/>
                    <p style ={{width:'75%', margin:'auto', paddingTop:'1em'}}> 
                        This is Jiaqi ,test testThis is Jiaqi ,test testThis is Jiaqi ,test testThis is Jiaqi ,test testThis is Jiaqi ,test testThis is Jiaqi ,test testThis is Jiaqi ,test testThis is Jiaqi ,test testThis is Jiaqi ,test test
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style = {{fontsize:'30px', fontFamily:'Open Sans'}}>
                                    <i class="fas fa-phone-square-alt"  />
                                    （519）-760-0405
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style = {{fontsize:'30px', fontFamily:'Open Sans'}}>
                                <i class="fas fa-envelope" />
                                    jiaqy@live.com
                                </ListItemContent>
                            </ListItem>                        
                        </List>
                    </div>                    
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default Contact;