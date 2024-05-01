import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all";
import item1 from "@images/item1.png";



export default function () {

  return (
    <section class="section cases_section" id="cases">
      <div class="container">
        <div class="cases_content">
          <div class="cases_info">
            <span class="note note__left cases_note">Our cases </span>
            <h2 class="cases_title title">Building ideas for your needs.</h2>
            <p class="cases_text text">
              We discuss all opportunities, while you make a choice.
            </p>
          </div>
          <div class="cases_item_list">
            <div class="cases_item">
              <div class="cases_item_img_wrap first">
                <img class="cases_item_img" src={item1} alt="cases_item_img" />
              </div>
              <div class="cases_item_desc">
                <h2 class="cases_item_title title">OSRAM Farming</h2>
                <p class="cases_item_text text">Couple words about case.</p>
              </div>
            </div>
            <div class="cases_item">
              <div class="cases_item_img_wrap last">
                <img class="cases_item_img" src={item1} alt="cases_item_img" />
              </div>
              <div class="cases_item_desc">
                <h2 class="cases_item_title title">Tank Clarity</h2>
                <p class="cases_item_text text">Couple words about case.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
