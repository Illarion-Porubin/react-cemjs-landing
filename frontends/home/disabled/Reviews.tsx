import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import reviewsImg from "@svg/reviews.svg"
import reviewsStar from "@svg/icons/star.svg"

export default function () {
  return (
    <section class="section reviews" id="reviews">
      <h2 class="title-section">Отзывы</h2>
      <div class="reviews_top">
        <p class="reviews_text">
        Узнайте, что говорят наши ученики о своем опыте обучения на платформе<br/>
        Академия Crypto Emergency.<br/><br/>

        Мы рады, что предоставляем качественное, экспертное образование в сфере криптовалют
        и блокчейна, и наши ученики подтверждают это своими отзывами.
        </p>
        <div class="reviews_img"><img src={reviewsImg} alt="Отзывы" /></div>
      </div>
      <div class="reviews_wrapper">
        {
            Static.reviews.map(item => {
              return (
                <div class="reviews_review">
                    <div class="reviews_review-top">
                        <div class="reviews_review-info">
                            <p class="reviews_review-name">{item.name}, город {item.city}</p>
                        </div>
                        {/* <div class="reviews_review-stars">
                            <img src={reviewsStar} alt="Звезда" class="reviews_review-star" />
                            <img src={reviewsStar} alt="Звезда" class="reviews_review-star" />
                            <img src={reviewsStar} alt="Звезда" class="reviews_review-star" />
                            <img src={reviewsStar} alt="Звезда" class="reviews_review-star" />
                            <img src={reviewsStar} alt="Звезда" class="reviews_review-star" />
                        </div> */}
                    </div>
                    <p class="reviews_review-tariff">Тариф {item.tariff}</p>
                    <p class="reviews_review-text">{item.review}</p>
                </div>
              )
            })
        }
      </div>
      <button class="reviews_more btn btn__green"
      onclick={()=>{
        Func.openReviews()
      }}
      >Ещё &gt;&gt;</button>
    </section>
  )
}