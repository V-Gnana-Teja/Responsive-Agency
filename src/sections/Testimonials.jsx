import React from "react";
import { clients } from "../exports";
import ClientGrid from "../components/ClientGrid";
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full flex flex-col gap-5 h-fit p-7 lg:p-20"
    >
      <p className="text-center text-xl">TESTIMONIALS</p>
      <h1 className="text-green-600 font-bold text-6xl text-center leading-[60px]">
        What Clients Says
      </h1>
      <p className="text-slate-950 text-2xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic
        voluptas conse <br />
        quatur voluptate inventore similique, libero molestiae architecto sint
        exercitationem.
      </p>
      <div className="flex justify-center items-center flex-wrap mt-5 w-full gap-6">
        {clients.map((client) => (
          <div key={client.name} className="w-80">
            {<ClientGrid {...client} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
