import React from "react";

function Location() {
  return (
    <>
      {" "}
      <div className="bottom_icon">
        <img src="images/icon_location.png" alt="" title="" />
      </div>
      <h2>WEDDING LOCATION</h2>
      <span className="subtitle">LA CERDANYA - SANTA MARIA DE TALLÓ</span>
      <p style={{ textAlign: "left" }}>
        <strong>Església de Santa Maria de Talló</strong>
        <br />
        Camí Talló, 2<br />
        25721 Talló, Lleida
      </p>
      <iframe
        title="Wedding Location"
        style={{ border: "1px double white", marginBottom: "10px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.0105213957263!2d1.7783615519416884!3d42.36361504276576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a59cc3a6f64c07%3A0xebdcd47fb34e402!2sIglesia%20de%20Santa%20Mar%C3%ADa%20de%20Tall%C3%B3!5e0!3m2!1ses!2ses!4v1579806356753!5m2!1ses!2ses"
        width="280"
        height="300"
      ></iframe>
      <a
        href="https://ca.wikipedia.org/wiki/Santa_Maria_de_Tall%C3%B3"
        target="_blank"
        rel="noopener noreferrer"
        className="post_read_more"
      >
        READ MORE
      </a>
    </>
  );
}

function Locations() {
  return (
    <div className="home_bottom">
      <div className="full_width_centered">
        <div className="left13">
          <Location />
        </div>
        <div className="left13">
          <div className="bottom_icon">
            <img src="images/icon_music.png" alt="" title="" />
          </div>
          <h2>WEDDING RECEPTION</h2>
          <span className="subtitle">LA CERDANYA - MAS SANT MARC</span>
          <p style={{ textAlign: "left" }}>
            <strong>Mas Sant Marc</strong>
            <br />
            Cami de St. Marc s/n
            <br />
            Carretera de Puigcerdà a Queixans (por Les Pereres)
            <br />
            17520 – Puigcerdà – La Cerdanya (Girona)
          </p>

          <iframe
            title="Wedding Reception"
            style={{ border: "1px double white", marginBottom: "10px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.5402063750435!2d1.9269361519423183!3d42.41623503944087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a57bbe8fb9025b%3A0xf4a9d75c2bfc3928!2sMas%20Sant%20Marc!5e0!3m2!1ses!2ses!4v1579808858307!5m2!1ses!2ses"
            width="280"
            height="300"
          ></iframe>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://santmarc.es/ca/"
            className="post_read_more"
          >
            READ MORE
          </a>
        </div>
        <div className="left13_last">
          <div className="bottom_icon">
            <img src="images/icon_gifts.png" alt="" title="" />
          </div>
          <h2>GIFT REGISTRY</h2>
          <span className="subtitle">GIVEN FREELY AND OUT OF PURE LOVE</span>
          {/* <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              <a href="https://google.es"> esse quam nihil</a> aspernatur aut
              odit aut fugit molestiae consequatur, vel illum{" "}
              <strong>qui dolorem</strong> eum fugiat quo voluptas nulla
              pariatur aspernatur.
            </p> */}
          <a href="page.html" className="post_read_more">
            READ MORE
          </a>
        </div>

        <div className="clear"></div>
      </div>
    </div>
  );
}

export default Locations;
