import React, { Component} from 'react';
import { MdAccessTime, MdCode, MdComment, MdMicNone } from 'react-icons/lib/md/'


import '../index.css'


import Raymond from '../../../assets/raymond.png'
import David from '../../../assets/david.png'
import Brittany from '../../../assets/brittany.png'
import Charlie from '../../../assets/Charlie.png'


class DevelopmentFact extends Component {
  render() {
    return (
      <div>
        <h3>developers</h3>
        <img alt="Raymond Zhu" src={Raymond} className="avatar-style"/>
        <img alt="Raymond Zhu" src={David} className="avatar-style"/>
        <img alt="Raymond Zhu" src={Brittany} className="avatar-style"/>
        <img alt="Raymond Zhu" src={Charlie} className="avatar-style"/>
        <img alt="Raymond Zhu" src={Raymond} className="avatar-style"/>
        <div style={{'margin-top': '100px'}}>
          <div style={{color: 'purple'}}>
            <MdAccessTime size={90} /><span style={{'margin-left': '100px', 'font-size': '40px'}}> 24 hours</span>
          </div>

          <div style={{color: 'purple'}}>
            <MdCode size={90} /><span style={{'margin-left': '100px', 'font-size': '40px'}} > 4000+ lines code</span>
          </div>

          <div style={{color: 'purple'}}>
            <MdComment size={90} /><span style={{'margin-left': '100px', 'font-size': '40px'}} > 20+ intents</span>
          </div>

          <div style={{color: 'purple'}}>
            <MdMicNone size={90} /><span style={{'margin-left': '100px', 'font-size': '40px'}}> 40+ voice commands</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DevelopmentFact;