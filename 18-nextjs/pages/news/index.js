import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>This is News Page</h1>
      <ul>
        <li>
          <Link href="/news/about-flowers">This is About Flowers Page</Link>
        </li>
        <li>
          <Link href="/news/about-books">This is About Books Page</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
