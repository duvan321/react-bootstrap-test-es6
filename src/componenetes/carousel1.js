import React from "react";
import { Carousel } from "react-bootstrap";

const FirstSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="w-100 d-flex flex-column justify-content-center align-items-center text-white "
          style={{
            backgroundImage: `url("https://s10.s3c.es/imag/_v0/770x420/a/b/3/600x400_La-orilla-del-mar-con-el-sol-poniendose-al-fondo-iStock.jpg")`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "90vh",
          }}
        >
          <h3>First lider</h3>
          <p>
            Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,
            pero la mayoría sufrió alteraciones en alguna manera
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="w-100 d-flex flex-column justify-content-center align-items-center text-white"
          style={{
            backgroundImage: `url("https://s10.s3c.es/imag/_v0/770x420/a/b/3/600x400_La-orilla-del-mar-con-el-sol-poniendose-al-fondo-iStock.jpg")`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "90vh",
          }}
        >
          <h3>First lider</h3>
          <p>
            Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,
            pero la mayoría sufrió alteraciones en alguna manera
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="w-100 d-flex flex-column justify-content-center align-items-center text-white"
          style={{
            backgroundImage: `url("https://s10.s3c.es/imag/_v0/770x420/a/b/3/600x400_La-orilla-del-mar-con-el-sol-poniendose-al-fondo-iStock.jpg")`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "90vh",
          }}
        >
          <h3>First lider</h3>
          <p>
            Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,
            pero la mayoría sufrió alteraciones en alguna manera
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default FirstSlider;
