'use client';
import { useState, useEffect } from 'react';

export default function Store() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch the products once, after the first render
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Recomputed on every render from products + search
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', width: '300px', marginBottom: '1rem' }}
      />
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>
                <img src={p.image} alt={p.title} width="60" />
              </td>
              <td>${p.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}