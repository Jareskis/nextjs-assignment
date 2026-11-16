import Counter from '../../components/Counter';

export default function CountPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Counters</h1>
      <Counter increment={1} color="steelblue" />
      <Counter increment={2} color="seagreen" />
    </main>
  );
}