```javascript
// pages/about.js
import { GetServerSideProps } from 'next';

export default function About({ data }) {
  return (
    <div>
      <h1>About Us</h1>
      <p>{data.message}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data here, for example from an API.
  const data = { message: 'Hello from About page' };
  return {
    props: { data },
  };
};
```