import { Cemjsx, Fn } from "cemjs-all";
import partner1 from "@images/partners/image1.png";
import partner2 from "@images/partners/image2.png";
import partner3 from "@images/partners/image3.png";
import partner4 from "@images/partners/image4.png";
import partner5 from "@images/partners/image5.png";
import partner6 from "@images/partners/image6.png";

export default function () {
  return (
    <section class="footer_inner">
      <div class="footer_info">
        <span class="note footer_note">We work with</span>
        <h2 class="footer_title title">The companies that are confident in us.</h2>
        <p class="footer_text text">We bond together to make a solid result .</p>
      </div>
      <div class="footer_parners">
          <img class="footer_parners_wrap" src={partner1} alt="parner" />
          <img class="footer_parners_wrap" src={partner2} alt="parner" />
          <img class="footer_parners_wrap" src={partner3} alt="parner" />
          <img class="footer_parners_wrap" src={partner4} alt="parner" />
          <img class="footer_parners_wrap" src={partner5} alt="parner" />
          <img class="footer_parners_wrap" src={partner6} alt="parner" />
      </div>
      <button class="btnJet btnJet__blue footer_btn">
        Get ballpark estimate
      </button>
    </section>
  );
}
