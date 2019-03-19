import React, { Component } from 'react';
import Buttons from '../favorites/buttons';
import GiphLoading from '../loading/giph_loading';

class Giph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }

    this.finishLoading = this.finishLoading.bind(this);
  }

  async finishLoading() {
    await this.setState( { loading: false } )
  }

  render() {
    const { giph } = this.props;
    const { loading } = this.state;
    
    return(
      <div className="giphs" key={giph.id}>
        
        <div className="giph-section">
          <img src={giph.avatar} className="avatar" alt="" />
          <h1 className="username">{giph.username}</h1>
        </div>

        <img src={giph.url} className="giph" alt="giph" onLoad={this.finishLoading} />
        <GiphLoading loading={loading} />

        <div className="giph-section">
          <Buttons giph={giph}/>
        </div>
            
        <div className="giph-section">
          <h1 className="username">{giph.username}</h1>
          <span className="title">{giph.title}</span>
        </div>
      </div>
    )
  }
}

// const Giph = ( { giph, last, setLoading } ) => {
  
//   let img;
//   if (last === true) {
//     img = <img src={giph.url} className="giph" alt="giph" onLoad={() => setLoading(false)}/>
//   } else {
//     img = <img src={giph.url} className="giph" alt="giph"/>
//   }

//   return(
//     <div className="giphs" key={giph.id}>
      
//       <div className="giph-section">
//         <img src={giph.avatar} className="avatar" alt="" />
//         <h1 className="username">{giph.username}</h1>
//       </div>

//       {img}

//       <div className="giph-section">
//         <Buttons giph={giph}/>
//       </div>
          
//       <div className="giph-section">
//         <h1 className="username">{giph.username}</h1>
//         <span className="title">{giph.title}</span>
//       </div>
//     </div>
//   )
// }

export default Giph;