import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all";

export default function () {
  return (
    <section class="section ofer" id="ofer">
      <svg
        class="ofer_ellipseBg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="32" fill="#FFDCD0" />
      </svg>

      <div class="container">
        <div class="ofer_content">
          <div class="ofer_info">
            <span class="ofer_info_note note center">What we offer</span>
            <h2 class="ofer_info_title title">Our Capabilities.</h2>
            <p class="ofer_info_text text">
              We make your product simple and stable with these opportunities.
            </p>
          </div>
          <div class="ofer_items">
            <div class="ofer_item">
              <h2 class="ofer_item_title title">Weather Data</h2>
              <p class="ofer_item_text text">
                Monitoring and processing the data from Sencrop, Darksky and
                various other technologies that we operate daily.
              </p>
              <button class="ofer_item_btn btnJet btnJet__blue">
                Learn more about it
              </button>
            </div>
            <div class="ofer_item">
              <h2 class="ofer_item_title title">Satellite & Drones</h2>
              <p class="ofer_item_text text">
                Enhancing the efficiency of your work through automation,
                reducing man-power.
              </p>
              <button class="ofer_item_btn btnJet btnJet__blue">
                Learn more about it
              </button>
            </div>
            <div class="ofer_item">
              <h2 class="ofer_item_title title">IoT</h2>
              <p class="ofer_item_text text">
                Building various alerts & notifications systems, along with LTE
                NB-IoT MQTT Connections. We do provide every technology you
                need.
              </p>
              <button class="ofer_item_btn btnJet btnJet__blue">
                Learn more about it
              </button>
            </div>
            <div class="ofer_item">
              <h2 class="ofer_item_title title">Farm Maps</h2>
              <p class="ofer_item_text text">
                Constructing the automatic maps for your crop fields with your
                historical data, visualisation and analysis processes.
              </p>
              <button class="ofer_item_btn btnJet btnJet__blue">
                Learn more about it
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
