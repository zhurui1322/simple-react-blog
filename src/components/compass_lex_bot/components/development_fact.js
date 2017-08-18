import React, { Component} from 'react';
import { MdAccessTime, MdCode, MdComment, MdMicNone } from 'react-icons/lib/md/'


import '../index.css'


import Raymond from '../../../assets/raymond.png'
import David from '../../../assets/david.png'
import Brittany from '../../../assets/brittany.png'
import Charlie from '../../../assets/Charlie.png'
import Johnny from '../../../assets/Jon.png'


class DevelopmentFact extends Component {
  render() {
    return (
      <div>
        <div style={{'margin-top': '10px'}}>
          <img alt="Raymond Zhu" src={Raymond} className="avatar-style"/>
          <img alt="David" src={David} className="avatar-style"/>
          <img alt="Brittany" src={Brittany} className="avatar-style"/>
          <img alt="Charlie" src={Charlie} className="avatar-style"/>
          <img alt="Johnny" src={Johnny} className="avatar-style"/>
        </div>
        <div style={{'margin-top': '100px'}}>
          <div style={{color: 'purple'}}>
            <MdAccessTime size={90} /><span style={{'margin-left': '100px', 'font-size': '40px'}}> 24 hours</span>
          </div>

          <div style={{color: 'purple'}}>
            <MdCode size={90} /><span style={{'margin-left': '100px', 'font-size': '40px'}} > 3000+ lines code</span>
          </div>

          <div style={{color: 'purple'}}>
            <MdComment size={90} /><span style={{'margin-left': '100px', 'font-size': '40px'}} > 20+ intents</span>
          </div>

          <div style={{color: 'purple'}}>
            <MdMicNone size={90} /><span style={{'margin-left': '100px', 'font-size': '40px'}}> 100+ voice commands</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DevelopmentFact;