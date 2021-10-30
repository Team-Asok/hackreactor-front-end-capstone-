import React from 'react';
import Banner from './Overview components/Banner.jsx';
import Gallery from './Overview components/ImageGallery.jsx';
import ProductDescription from './Overview components/ProductDescription.jsx';
import ProductInfo from './Overview components/ProductInfo.jsx';
import SiteMessage from './Overview components/SiteMessage.jsx';

// Should also need Review Info for Star component
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="Overview">
        <Banner />
        <SiteMessage />
        <Gallery />
        <ProductInfo products={this.props.products} />
        <ProductDescription />
      </div>
    );
  }
}

export default Overview;
