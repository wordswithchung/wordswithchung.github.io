'use strict';

const e = React.createElement;

const skills = [
  {
    name: `JavaScript`,
    rating: 7,
  },
  {
    name: `TypeScript`,
    rating: 7
  }
]

const RenderSkills = () => {
  return (
    <div>
      { skills.map(skill => <span>{skill.name}</span>)}
    </div>
  )
}
// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

const domContainer = document.querySelector('#skills-section');
ReactDOM.render(RenderSkills, domContainer);