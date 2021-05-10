import Link from 'next/link';
import {Heading, Container} from '../styles/home';


export default function Home() {
  return (
    <Container>
    <Heading>Home Page</Heading>
    <Link href="/post">
      <a className="post-link">Post</a>
    </Link>
    </Container>
  );
}
