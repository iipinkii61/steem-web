export default function CreateAccountForm() {
  return (
    <div className=" flex w-full ">
      <div className="   h-full mx-96  ">
        <form className="  h-full space-y-4 p-8 ">
          <div className="flex flex-col">
            <div className="mb-6 grid gap-2 ">
              <label className="text-neutral-400 text-sm">
                Steam Account Name
              </label>
              <input className="bg-zinc-700 w-80" type=" account name" />
            </div>
            <div className="mb-6 grid gap-2">
              <label className="text-neutral-400 text-sm">
                {' '}
                Choose Password
              </label>
              <input className="bg-zinc-700 w-80" type="password" />
            </div>

            <div className="mb-6 grid gap-2">
              <label className="text-neutral-400 text-sm">
                {' '}
                Confirm Password
              </label>
              <input className="bg-zinc-700 w-80" type="password" />
            </div>

            <button class="btn bg-sky-500 border-slate-900 rounded-none w-60  my-8 normal-case">
              Done
            </button>
          </div>
        </form>
      </div>
      <div className=" -mx-96 my-6  ">
        <button className="btn bg-red-900  border-slate-900 rounded w-34 my-6 normal-case  text-xs ">
          Not Avaliable
        </button>
      </div>
    </div>
  );
}
