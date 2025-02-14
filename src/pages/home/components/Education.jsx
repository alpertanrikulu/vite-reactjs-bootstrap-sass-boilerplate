// import React from "react";
// import "./styles/Education.scss";
// import Logouu from "../../../assets/svg/logouu.svg";
// import Logogtu from "../../../assets/svg/logogtu.svg";

// const Education = () => {
//   return (
//     <div className="" id="education" style={{ minHeight: "125vh" }}>
//       <h2 className="display-3 text-center mt-5">
//         Education & Work Experiences
//       </h2>
//       <div className="education-wrapper d-flex justify-content-center align-items-center">
//         <div className="education-container pb-5">
//           <input type="radio" name="slide" id="c1" checked />
//           <label className="education-card" htmlFor="c1">
//             <div className="education-row">
//               <div className="education-icon">
//                 <img src={Logouu} alt="Uludag University Logo" />
//               </div>
//               <div className="education-description">
//                 <h4 className="fs-2 fw-bold ffRoboto">Uludağ University</h4>
//                 <p className="ffRoboto text-white">
//                   Faculty of Arts and Sciences (2017-2021) <br />
//                   Bachelor of Molecular Biology and Genetics
//                 </p>
//               </div>
//             </div>
//           </label>
//           <input type="radio" name="slide" id="c2" />
//           <label className="education-card" htmlFor="c2">
//             <div className="education-row">
//               <div className="education-icon">
//                 <img src={Logogtu} alt="Gebze Technical University Logo" />
//               </div>
//               <div className="education-description">
//                 <h4 className="fs-2 fw-bold ffRoboto">
//                   Gebze Technical University
//                 </h4>
//                 <p className="ffRoboto text-white fs-5">
//                   Institute of Science (2023-Ongoing) <br />
//                   Master of Bioinformatics and System Biology
//                 </p>
//               </div>
//             </div>
//           </label>
//           <input type="radio" name="slide" id="c3" />
//           <label className="education-card" htmlFor="c3">
//             <div className="education-row">
//               <div className="education-icon"></div>
//               <div className="education-description">
//                 <h4>Ululdağ Üniversitesi</h4>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Repellendus, numquam.
//                 </p>
//               </div>
//             </div>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;

import React, { useState } from "react";
import "./styles/Education.scss";
import Logouu from "../../../assets/svg/logouu.svg";
import Logogtu from "../../../assets/svg/logogtu.svg";
import Stack from "../../../animations/stack/Stack";
import Ship from "../../../animations/ship/Ship";

const Education = () => {
  // State oluşturuluyor, başlangıçta c1 seçili
  const [selected, setSelected] = useState("c1");

  const handleChange = (event) => {
    setSelected(event.target.id); // Seçilen radio butonunun id'sini state olarak güncelliyoruz
  };

  return (
    <div id="education" style={{ minHeight: "125vh" }}>
      <h2 className="display-3 text-center mt-5">
        Education & Work Experiences
      </h2>
      <div className="education-wrapper d-flex justify-content-center align-items-center">
        <div className="education-container pb-5">
          {/* İlk radio butonu */}
          <input
            type="radio"
            name="slide"
            id="c1"
            checked={selected === "c1"} // Eğer selected state'i "c1" ise bu radio butonu seçili olacak
            onChange={handleChange} // Değişim olduğunda handleChange fonksiyonu çalışacak
          />
          <label className="education-card" htmlFor="c1">
            <div className="education-row">
              <div className="education-icon">
                <img src={Logouu} alt="Uludag University Logo" />
              </div>
              <div className="education-description">
                <h4 className="fs-2 fw-bold ffRoboto">Uludağ University</h4>
                <p className="ffRoboto text-white">
                  Faculty of Arts and Sciences (2017-2021) <br />
                  Bachelor of Molecular Biology and Genetics
                </p>
              </div>
            </div>
          </label>

          {/* İkinci radio butonu */}
          <input
            type="radio"
            name="slide"
            id="c2"
            checked={selected === "c2"}
            onChange={handleChange}
          />
          <label className="education-card" htmlFor="c2">
            <div className="education-row">
              <div className="education-icon">
                <img src={Logogtu} alt="Gebze Technical University Logo" />
              </div>
              <div className="education-description">
                <h4 className="fs-2 fw-bold ffRoboto">
                  Gebze Technical University
                </h4>
                <p className="ffRoboto text-white fs-5">
                  Institute of Science (2023-Ongoing) <br />
                  Master of Bioinformatics and System Biology
                </p>
              </div>
            </div>
          </label>

          {/* Üçüncü radio butonu */}
          <input
            type="radio"
            name="slide"
            id="c3"
            checked={selected === "c3"}
            onChange={handleChange}
          />
          <label className="education-card" htmlFor="c3">
            <div className="education-row">
              <div className="education-icon"></div>
              <div className="education-description">
                <Stack />
                <h4>Experiences</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, numquam.
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Education;
