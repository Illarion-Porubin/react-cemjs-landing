import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all";
import workIcon1 from "@images/workIcon1.png";
import workIcon2 from "@images/workIcon2.png";

export default function () {
  return (
    <section class="section work" id="work">
      <div class="containder">
        <div class="work_content">
          <div class="work_slide">
            <h4>How we work</h4>
            <div class="work_slide_pages">
              <span class="work_slide_page curent">1</span>
              <span class="work_slide_line"></span>
              <span class="work_slide_page next">2</span>
            </div>
            <div class="work_slide_buttons">
              <button class="work_slide_btn left">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.2"
                    cx="20"
                    cy="20"
                    r="19.5"
                    fill="#27272E"
                    stroke="white"
                  />
                  <path
                    d="M27.5 20.5H12.5"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5 15.5L12.5 20.5L17.5 25.5"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button class="work_slide_btn right">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.2"
                    cx="20"
                    cy="20"
                    r="19.5"
                    transform="rotate(-180 20 20)"
                    fill="#27272E"
                    stroke="white"
                  />
                  <path
                    d="M12.5 19.5L27.5 19.5"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.5 24.5L27.5 19.5L22.5 14.5"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="work_info_wrap">
            <div class="work_info">
              <h2 class="work_info_title title">Visualising our processes.</h2>
              <p class="work_info_text text">
                Your idea starts now, without any delays or unnecessary
                paperwork.
              </p>
            </div>
            <div class="work_items">
              <div class="work_item">
                <img src={workIcon1} alt="workIcon1" />
                <h2 class="work_item_title title">Code Review</h2>
                <p class="work_item_text text">
                  If you have a codebase of you own, we do estimate the costs
                  and scale the approximate team accordingly.
                </p>
              </div>
              <div class="work_item">
                <img src={workIcon2} alt="workIcon2" />
                <h2 class="work_item_title title">Define & Estimate tasks</h2>
                <p class="work_item_text text">
                  All of the business & technical questions will be carefully
                  examined and estimated within the first week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
