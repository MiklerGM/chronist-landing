import React from 'react';
import { Link } from 'react-router-dom';



export default class ArticlePage extends React.Component {
  state = {}
  componentDidMount() {
    console.log(`ArticlePage mount and props is ${this.props}`);
  }
  render() {
    return (
      <div>
        <Link to='/'> Back to blog </Link>
        PAGE:
        ArticlePage render
      </div>
    );
  }
}
