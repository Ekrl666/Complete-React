import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Taş'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='Kağıt'
          price={8}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='Makas'
          price={16}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
