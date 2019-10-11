import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
        <div>
            <Grid>
                <Cell className="resume-left"col={3}>
                   <div style ={{textAlign:'center'}}>   
                        <img src="https://image.flaticon.com/icons/svg/702/702030.svg"
                            alt = "avatar"
                            style ={{height:'200px'}}/>
                   </div>
                   <h2 style={{paddingTop:'2em'}}>Jiaqi Xu</h2>
                   <h4 style={{color:'grey'}}>programer</h4>
                   <hr style={{borderTop:'3px solid grey', width:'50%'}}/>
                   <p>testsetsetsetsetsetset</p>
                   <hr style={{borderTop:'3px solid grey', width:'50%'}}/>
                   <h5>address</h5>
                   <p>ssdfsfsdf</p>
                   <h5>phone</h5>
                   <p>1234123</p>
                </Cell>
                <Cell className="resume-right"col={9}>
                <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />
               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
                </Cell>
            </Grid>
        </div>
        )        
    }
}

export default Resume;