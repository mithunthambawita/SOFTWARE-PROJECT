// import React, { Component } from 'react';

// class Checkbox extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React',
//     };
//     this.onValueChange = this.onValueChange.bind(this);
//     this.formSubmit = this.formSubmit.bind(this);
//   }

//   onValueChange(event) {
//     this.setState({
//       selectedOption: event.target.value,
//     });
//   }

//   formSubmit(event) {
//     event.preventDefault();
//     console.log(this.state.selectedOption);
//   }

//   render() {
//     return (
//       <form onSubmit={this.formSubmit}>
//         <div className='radio'>
//           <label>
//             <input
//               type='radio'
//               value='excellent'
//               checked={this.state.selectedOption === 'excellent'}
//               onChange={this.onValueChange}
//             />
//             Excellent
//           </label>
//         </div>
//         <div className='radio'>
//           <label>
//             <input
//               type='radio'
//               value='good'
//               checked={this.state.selectedOption === 'good'}
//               onChange={this.onValueChange}
//             />
//             Good
//           </label>
//         </div>
//         <br />
//         <div className='radio'>
//           <label>
//             <input
//               type='radio'
//               value='average'
//               checked={this.state.selectedOption === 'average'}
//               onChange={this.onValueChange}
//             />
//             Average
//           </label>
//         </div>
//         <br />
//         <div className='radio'>
//           <label>
//             <input
//               type='radio'
//               value='dissatisfied'
//               checked={this.state.selectedOption === 'dissatisfied'}
//               onChange={this.onValueChange}
//             />
//             Dissatisfied
//           </label>
//         </div>
//         <br />
//         <div>Selected option is : {this.state.selectedOption}</div>
//       </form>
//     );
//   }
// }

// export default Checkbox;
