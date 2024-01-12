import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <main>
        <div></div>
        <nav className="border rounded-t h-16 p-3 px-6 text-white">
          <p>navbar stuff</p>
        </nav>
        <div className="grid overflow-hidden grid-cols-12 border-x">
          <div className="col-span-4 p-6 border-r text-white">
            <p>instructions text</p>
          </div>
          <div className="col-span-8 grid-cols-8 grid-rows-12 grid overflow-hidden">
            <div className="col-span-8 text-white border-b flex min-h-16">
              <div className="border-r w-1/2 flex items-center min-h-16">
                <p>media</p>
              </div>
              <div className="flex-grow w-1/2 flex items-center min-h-16">
                <p>metadata</p>
              </div>
            </div>
            <div className="col-span-4 grid grid-cols-2 row-span-11 lg:grid-cols-3 p-4 gap-4 overflow-y-scroll">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="overflow-y-scroll col-span-4 row-span-11 p-4 text-white">
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
              <MetadataCard />
            </div>
          </div>
        </div>
        <footer className="border rounded-b h-16 flex text-white p-4 justify-end gap-4">
          <p className="border rounded px-3">back</p>
          <p className="border rounded px-3">continue</p>
        </footer>
        <p className="text-white">footer text, social media links etc</p>
      </main>
    </>
  );
}

function MetadataCard() {
  return <div className="rounded-lg border h-36 w-full mb-4" />;
}

function Card() {
  return <div className="rounded-lg border aspect-square" />;
}
