import { Cemjsx } from "cemjs-all";
import solutions1 from "@images/solutions1.png";
import solutions2 from "@images/solutions2.png";
import solutions3 from "@images/solutions3.png";
import solutions_front1 from "@images/solutions1_front.png";
import solutions_front2 from "@images/solutions2_front.png";
import solutions_front3 from "@images/solutions3_front.png";


export default function () {

  return (
    <section class="section solutions" id="solutions">
      <div class="container">
        <div class="solutions_content">
          <div class="solutions_info">
            <span class="solutions_info_note note note__center">
              The AgriTech solutions we build
            </span>
            <h2 class="solutions_info_title title">
              Assisting stakeholders to increase yield and improve
              profitability.
            </h2>
          </div>
          <div class="solutions_list_item">
            <div class="solutions_item">
              <div class="solutions_item_info">
                <span class="solutions_item_note note">01</span>
                <h2 class="solutions_item_title title">
                  Indoor vertical farming.
                </h2>
                <p class="solutions_item_text text">
                  By applying data visualisation, MASH networks and a whole wide
                  range of other technologies, we strive to build an effective
                  system for indoor farm industruies. JetRuby engineers are
                  excelled in flexible architechture systems specialised to
                  integrate solutions with SaaS platforms for data-driven
                  decisions.
                </p>
                <button class="solutions_item_btn btnJet btnJet__blue">
                  Learn more about it
                </button>
              </div>
              <div class="solutions_item_images_wrap">
                <div class="solutions_item_images">
                  <img
                    class="solutions_item_image_back"
                    src={solutions1}
                    alt="mage_back"
                  />
                  <img
                    class="solutions_item_image_front"
                    src={solutions_front1}
                    alt="image_front"
                  />
                </div>
              </div>
            </div>
            <div class="solutions_item">
              <div class="solutions_item_info">
                <span class="solutions_item_note note">02</span>
                <h2 class="solutions_item_title title">
                  Crop Fields Solutions.
                </h2>
                <p class="solutions_item_text text">
                  We do develop farm applications that allow stakeholders a
                  complete and yet simple control over field management,
                  accounting, machine maintenance, crop management and many
                  more.
                </p>
                <button class="solutions_item_btn btnJet btnJet__blue">
                  Learn more about it
                </button>
              </div>
              <div class="solutions_item_images_wrap">
                <div class="solutions_item_images">
                  <img
                    class="solutions_item_image_back"
                    src={solutions2}
                    alt="mage_back"
                  />
                  <img
                    class="solutions_item_image_front"
                    src={solutions_front2}
                    alt="image_front"
                  />
                </div>
              </div>
            </div>
            <div class="solutions_item">
              <div class="solutions_item_info">
                <span class="solutions_item_note note">03</span>
                <h2 class="solutions_item_title title">
                  Animal Husbandary Technologies.
                </h2>
                <p class="solutions_item_text text">
                  Our team always build a simple and a singular system that is
                  able to track, collect and analyse the healthcare processes of
                  your animal husbandary. We also produce an autonomous AI
                  system that analyses the animal crop disease outbreaks.
                </p>
                <button class="solutions_item_btn btnJet btnJet__blue">
                  Learn more about it
                </button>
              </div>
              <div class="solutions_item_images_wrap">
                <div class="solutions_item_images">
                  <img
                    class="solutions_item_image_back"
                    src={solutions3}
                    alt="mage_back"
                  />
                  <img
                    class="solutions_item_image_front"
                    src={solutions_front3}
                    alt="image_front"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
