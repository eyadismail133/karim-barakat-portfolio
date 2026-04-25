import "./Clients.css";

import client1 from "../../assets/client-1.png";
import client2 from "../../assets/client-2.png";
import client3 from "../../assets/client-3.webp";
import client4 from "../../assets/client-4.png";
import client5 from "../../assets/client-5.png";
import client6 from "../../assets/client-6.png";
import client7 from "../../assets/client-7.png";
import client8 from "../../assets/client-8.webp";
import client9 from "../../assets/client-9.png";
import client10 from "../../assets/client-10.png";
import client11 from "../../assets/client-11.png";
import client12 from "../../assets/client-12.png";
import client13 from "../../assets/client-13.png";
import client14 from "../../assets/client-14.png";
import client15 from "../../assets/client-15.jpg";
import client16 from "../../assets/client-16.jpeg";
import client17 from "../../assets/client-17.png";
import client18 from "../../assets/client-18.webp";
import client19 from "../../assets/client-19.webp";

const Clients = () => {
  const clients = [
    { id: 1, image: client1 },
    { id: 2, image: client2 },
    { id: 3, image: client3 },
    { id: 4, image: client4 },
    { id: 5, image: client5 },
    { id: 6, image: client6 },
    { id: 7, image: client7 },
    { id: 8, image: client8 },
    { id: 9, image: client9 },
    { id: 10, image: client10 },
    { id: 11, image: client11 },
    { id: 12, image: client12 },
    { id: 13, image: client13 },
    { id: 14, image: client14 },
    { id: 15, image: client15 },
    { id: 16, image: client16 },
    { id: 17, image: client17 },
    { id: 18, image: client18 },
    { id: 19, image: client19 },
  ];
  return (
    <section className="clients-wrapper">
      <div className="clients-container">
        <div className="text-content">
          <h2 className="title">Select Partnerships</h2>
          <p className="subtitle">
            Words crafted for brands that move the needle.
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
