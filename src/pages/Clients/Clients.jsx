import "./Clients.css";

import bio1 from "../../assets/work & bio/bio/bio-1.png";
import bio2 from "../../assets/work & bio/bio/bio-2.png";
import bio3 from "../../assets/work & bio/bio/bio-3.png";
import bio4 from "../../assets/work & bio/bio/bio-4.png";
import bio5 from "../../assets/work & bio/bio/bio-5.png";
import bio6 from "../../assets/work & bio/bio/bio-6.png";
import bio8 from "../../assets/work & bio/bio/bio-8.png";
import bio9 from "../../assets/work & bio/bio/bio-9.png";
import bio10 from "../../assets/work & bio/bio/bio-10.png";
import bio11 from "../../assets/work & bio/bio/bio-11.png";
import bio12 from "../../assets/work & bio/bio/bio-12.png";
import bio13 from "../../assets/work & bio/bio/bio-13.png";
import bio14 from "../../assets/work & bio/bio/bio-14.png";
import bio15 from "../../assets/work & bio/bio/bio-15.png";
import bio16 from "../../assets/work & bio/bio/bio-16.png";
import bio17 from "../../assets/work & bio/bio/bio-17.png";
import bio18 from "../../assets/work & bio/bio/bio-18.png";
import bio19 from "../../assets/work & bio/bio/bio-19.png";
import bio20 from "../../assets/work & bio/bio/bio-20.png";
import bio21 from "../../assets/work & bio/bio/bio-21.png";
import bio22 from "../../assets/work & bio/bio/bio-22.png";
import bio24 from "../../assets/work & bio/bio/bio-24.webp";
import bio25 from "../../assets/work & bio/bio/bio-25.png";
import bio26 from "../../assets/work & bio/bio/bio-26.png";
import bio27 from "../../assets/work & bio/bio/bio-27.png";

const Clients = () => {
  const clients = [
    { id: 1, image: bio1 },
    { id: 2, image: bio2 },
    { id: 3, image: bio3 },
    { id: 4, image: bio4 },
    { id: 5, image: bio5 },
    { id: 6, image: bio6 },
    { id: 8, image: bio8 },
    { id: 9, image: bio9 },
    { id: 10, image: bio10 },
    { id: 11, image: bio11 },
    { id: 12, image: bio12 },
    { id: 13, image: bio13 },
    { id: 14, image: bio14 },
    { id: 15, image: bio15 },
    { id: 16, image: bio16 },
    { id: 17, image: bio17 },
    { id: 18, image: bio18 },
    { id: 19, image: bio19 },
    { id: 20, image: bio20 },
    { id: 21, image: bio21 },
    { id: 22, image: bio22 },
    { id: 24, image: bio24 },
    { id: 25, image: bio25 },
    { id: 26, image: bio26 },
    { id: 27, image: bio27 },
  ];
  return (
    <section className="clients-wrapper">
      <div className="clients-container">
        <div className="text-content">
          <h2 className="title">Trusted By</h2>
          <p className="subtitle">
            Words crafted for brands that move the needle
          </p>
        </div>

        <div className="logo-cloud">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="logo-item"
              style={{
                "--delay": `${index * 0.2}s`,
                "--float-duration": `${3 + (index % 3)}s`,
              }}
            >
              <img
                src={client.image}
                alt={`Client logo ${client.id}`}
                className="floating-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
