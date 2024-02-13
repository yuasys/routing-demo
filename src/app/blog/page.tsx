import{Metadata} from 'next';

export const metadata: Metadata = {
  // title: "blog",  // この場合はlayout.tsxのtemplateが使われる
  title: {
    absolute: "Blog",// この場合はlayout.tsxのabsoluteが使われる
  },
};

export default function Blog () {
  return <h1>My blog</h1>
}