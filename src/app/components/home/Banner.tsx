// import Ball from "./Ball";

export default function Banner() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full p-8 pb-20 gap-16 sm:p-20 gradient-color ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <div className="h-52 bg-white aspect-square w-auto absolute">.</div> */}
        <div className="flex gap-4 items-center  flex-col text-3xl">
          <div className="font-dangrek title-font">Rinshad Chokkad</div>
          <div className="text-xl">
            <code>Physical Trainer</code>
          </div>
        </div>
      </main>

      {/* <Ball /> */}
    </div>
  );
}
