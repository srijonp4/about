import { Footer, Counter } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-8 tracking-tighter text-left">
        Site Under Development
      </h1>
      <p>
        Hello! I’m Srijon, and thank you for visiting. This website will soon
        become my professional portfolio and blog. Right now, it&apos;s still a
        work in progress and serves as a placeholder while I set everything up.
        I recently bought this domain and wanted to test it out, so I appreciate
        you stopping by! Be sure to check back in two weeks for updates. For
        now, you can explore a simple counter here. Thanks again, and see you
        soon!
      </p>
      <Counter />
      <Footer />
    </div>
  );
}
