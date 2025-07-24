import axios from 'axios';

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3000');
    console.log(response.data);
    // Update state with products
  } catch (err) {
    console.error(err);
  }
};










