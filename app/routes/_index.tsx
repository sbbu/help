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
      <div className="h-full w-full rounded-lg flex">
        <div className="w-1/3 px-6 pt-4 border-t border-r">
          <h1 className="text-sm ">LOOKING GOOD!</h1>
          <div className="mt-3 flex flex-col gap-6">
            <p>All clear! Your collection's media is good to go.</p>
            <p>Happy with what you see? Hit 'CONTINUE' when you're ready.</p>
            <p>
              If you've made a mistake or just want to start over, simply hit
              'RE-UPLOAD'.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-2/3">
          <div className="flex border-y">
            <div className="w-1/2 border-r p-2">media</div>
            <div className="w-1/2 p-2">metadata</div>
          </div>
          <div className="overflow-hidden flex">
            <div className="flex flex-col overflow-y-scroll w-1/2">
              <div className="colBody">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-col flex-grow overflow-y-scroll w-1/2">
              <div className="colBody">stuff goes here</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex border-t justify-end gap-8">
        <button>back</button>
        <button>continue</button>
      </footer>
    </>
  );
}
