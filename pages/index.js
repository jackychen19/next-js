import { useState } from 'react';
import Link from 'next/link';

const HomePage = ()  => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to next.js!</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h1 className="title">
        Read{' '}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
    </div>
  );
}

export default HomePage