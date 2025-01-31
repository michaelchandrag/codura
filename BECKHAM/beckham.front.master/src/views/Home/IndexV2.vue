<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { faqList } from '@/models'
import { copyToClipboard, showAlert } from '@/helpers';

const { company } = defineProps({
  company: { type: Object, default: {} },
})

onMounted(() => {

})
</script>

<template>
  <div class="content-v2">
    <section id="main-section" class="section first-section bg-transparent">
      <div class="container bg-app-gold rounded-xl p-4">
        <div class="row justify-content-between mb-4">
          <div class="col-lg-5">
            <div class="card bg-transparent no-border h-100 is-relative pt-3">
              <div class="card-body">
                <div class="title mb-5">
                  <h1 class="text-white fw-800 m-0 fs-40px ls-xs">THE ONLY <span class="text-app-red">OFFICIAL</span>
                  </h1>
                  <h1 class="text-white fw-800 m-0 fs-40px ls-xs">DAVID BECKHAM MEME</h1>
                </div>
                <div class="info pt-5">
                  <p class="text-white fw-bold ls-xs fs-20px">Join the Becks Community!</p>
                  <p class="text-white fw-300 fs-20px">$BECKS is more than just a meme coin-it’s
                    a movement inspired by legendary
                    David Beckham to unite football, crypto
                    and philantrophy</p>
                  <p class="text-white fw-300 fs-20px">100% of proceeds from $BECKS will be
                    donated to UNICEF’s <a href="7.org" class="decoration text-white">7.org</a>, helping children
                    worldwide</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="card bg-transparent no-border h-100">
              <div class="card-body text-center">
                <div class="box-image px-4" data-aos="fade-left" data-aos-delay="100">
                  <img src="/assets/images/backham-dream@4x.png" />
                </div>
                <p class="m-0 text-white fw-300 fs-16px text-start lh-normal"><i>“Don't be like most people, Most people
                    give up on their
                    dreams”</i>
                </p>
                <div class="box-image signature-info d-flex justify-content-end" data-aos="fade-down"
                  data-aos-delay="100">
                  <img src="/assets/images/signature-sm.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center col-lg-6 m-auto mb-4">
          <h3 class="text-white mb-3 ls-xs">Solana Contract Address</h3>
          <div class="input-group custom-input-group bg-white">
            <input :value="company.key_ca" disabled class="form-control disabled fs-18px ls-xs">
            <a @click.prebtn="copyToClipboard(company.key_ca)"
              class="on-shink input-group-text btn btn-sm bg-app-red d-inline-flex align-items-center">
              <img src="/assets/images/copy-white.png" />
              <span class="ps-2 text-white">Copy CA</span>
            </a>
          </div>
        </div>
        <div class="text-center col-lg-10 m-auto">
          <p class="text-white fw-300 fs-16px">Becks Memes are intended to function as an expression of support for,
            and
            engagement with, the ideals and beliefs embodied by the symbol "$BECKS" and the associated artwork, and are
            not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of
            any type. Becks Meme is not political and has nothing to do with any political campaign or any political
            office or governmental agency. </p>
        </div>
      </div>
    </section>
    <section id="section-dream" class="section bg-dark border-top-section py-3">
      <div class="dream-item-container row align-items-center gap-5">
        <div v-for="dream in 10" class="dream-item card no-border bg-transparent">
          <div class="card-body w-100">
            <div class="item d-flex align-items-center">
              <div class="avatar bg-white rounded box-image hs-150px ws-150px p-2">
                <img src="/assets/images/backham-dream-becks-2.png" />
              </div>
              <div class="avatar-info ps-4 w-auto">
                <h1 class="m-0 title fw-bold">{{ (dream % 2) ? '$BECKS' : 'DREAM DREAM DREAM' }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-about" class="section bg-app-gold">
      <div class="container">
        <div class="card bg-transparent border rounded-xl">
          <div class="card-body p-5">
            <div class="row justify-content-between">
              <div class="col-lg-5">
                <div class="title mb-4">
                  <h2 class="text-white fw-bold m-0 ls-xs">$BECKS:</h2>
                  <h2 class="text-white fw-bold m-0 ls-xs">Where Legacy Meets
                    Innovation, Inspired by
                    Greatness</h2>
                </div>
                <div class="box-image has-red-glow" data-aos="fade-up" data-aos-delay="100">
                  <img src="/assets/images/backham-dream-becks@4x.png" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="title mb-4">
                  <h2 class="text-white fw-bold m-0 ls-xs">About Becks</h2>
                  <h2 class="text-white fw-bold m-0 ls-xs">Token ($BECKS):</h2>
                </div>
                <div class="info mb-4">
                  <p class="text-white fs-300 fs-20px text-justify">The <b>$BECKS</b> token celebrates the incredible
                    journey of
                    David Beckham, an icon of football, fashion, and philanthropy. It's more than a cryptocurrency –
                    it's
                    a tribute to his legacy, combining his values of determination, style, and global impact with the
                    innovation of blockchain technology.</p>
                </div>
                <div class="info" data-aos="fade-up" data-aos-delay="100">
                  <div class="info-title text-white ls-xs fs-20px fw-bold">A Token of Hope for UNICEF</div>
                  <p class="text-white fs-300 fs-20px text-justify">The launch of <b>$BECKS</b> is inspired by David
                    Beckham's
                    lifelong commitment to making a positive difference, both on and off the pitch. As a UNICEF Goodwill
                    Ambassador, Beckham has dedicated years to advocating for vulnerable children worldwide. With the
                    creation of <b>$BECKS</b>, fans can now join this mission and contribute to global change in a
                    revolutionary
                    way. For more details about UNICEF’s emergency response programs and how they make a difference in
                    the
                    lives of children affected by crises, please visit <a class="decoration text-white fw-bold ls-xs"
                      href="https://www.unicef.org/emergencies">UNICEF Emergencies</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-buy" class="section bg-app-gold border-top-section">
      <div class="container">
        <div class="text-center col-lg-6 m-auto mb-5">
          <div class="title mb-4">
            <h2 class="text-white m-0 fw-bold ls-xs">Buy Now with a</h2>
            <h2 class="text-white m-0 fw-bold ls-xs">Debit Card or Crypto!</h2>
          </div>
          <div class="d-flex align-items-center justify-content-center gap-3 mb-4">
            <div class="box-image on-shink has-gold-glow rounded-md" data-aos="fade-right" data-aos-delay="100">
              <img src="/assets/images/apple-pay.png" />
            </div>
            <div class="box-image on-shink has-gold-glow rounded-md" data-aos="fade-right" data-aos-delay="100">
              <img src="/assets/images/visa-pay.png" />
            </div>
            <div class="box-image on-shink has-gold-glow rounded-md" data-aos="fade-down" data-aos-delay="100">
              <img src="/assets/images/venmo-pay.png" />
            </div>
            <div class="box-image on-shink has-gold-glow rounded-md" data-aos="fade-left" data-aos-delay="100">
              <img src="/assets/images/dollar-pay.png" />
            </div>
            <div class="box-image on-shink has-gold-glow rounded-md" data-aos="fade-left" data-aos-delay="100">
              <img src="/assets/images/s-pay.png" />
            </div>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="100">
            <a :href="company.key_ca_url || '#'"
              class="btn btn-lg bg-app-red text-white fw-bold ls-xs py-3 px-6 on-grow">BUY NOW</a>
          </div>
        </div>
        <div class="text-center col-lg-10 m-auto">
          <p class="m-0 text-white fw-300 fs-16px">Becks Memes are intended to function as an expression of support for,
            and engagement with, the ideals and beliefs embodied by the symbol "$BECKS" and the associated artwork, and
            are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security
            of any type. Becks Meme is not political and has nothing to do with any political campaign or any political
            office or governmental agency. </p>
        </div>
      </div>
    </section>
    <section id="section-address" class="section bg-dark border-top-section has-bg-section">
      <div class="container">
        <div class="text-center col-lg-6 m-auto mb-5">
          <h2 class="text-white mb-3 fw-bold ls-xs">Solana Contract Address</h2>
          <div class="input-group custom-input-group bg-white">
            <input :value="company.key_ca" disabled class="form-control disabled fs-18px ls-xs">
            <a @click.prebtn="copyToClipboard(company.key_ca)"
              class="on-shink input-group-text btn btn-sm bg-app-red d-inline-flex align-items-center">
              <img src="/assets/images/copy-white.png" />
              <span class="ps-2 text-white">Copy CA</span>
            </a>
          </div>
        </div>
        <div class="text-center col-lg-10 m-auto">
          <p class="m-0 text-white fw-300 fs-16px">Becks Memes are intended to function as an expression of support for,
            and
            engagement with, the ideals and beliefs embodied by the symbol "$BECKS" and the associated artwork, and are
            not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of
            any type. Becks Meme is not political and has nothing to do with any political campaign or any political
            office or governmental agency. </p>
        </div>
      </div>
    </section>

    <section class="section bg-transparent py-4">
      <div class="container">
        <div class="banner">
          <img src="/assets/images/banner@4x.png" />
        </div>
      </div>
      <div class="container container-join-community">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6">
            <div class="card bg-transparent no-border h-100 is-relative pt-3">
              <div class="card-body">
                <div class="title mb-5">
                  <h1 class="text-white fw-bold m-0 text-app-red fs-50px ls-xs">Join the $BECKS</h1>
                  <h1 class="text-white fw-bold m-0 text-app-red fs-50px ls-xs">Meme Community!</h1>
                </div>
                <div class="info">
                  <div class="card no-border rounded-md bg-app-blue-dark has-gold-glow" data-aos="fade-right"
                    data-aos-delay="100">
                    <div class="card-body p-4">
                      <div class="title text-app-orange fw-bold ls-xs fs-20px mb-2 ls-xs">Misssion</div>
                      <p class="m-0 text-white fs-18px">$BECKS is not just a cryptocurrency; it’s a symbol of hope and
                        unity. By combining the power of blockchain with Beckham’s influence, this token creates a new
                        avenue for fans to make a difference in the lives of millions of children affected by
                        emergencies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="card bg-transparent no-border h-100">
              <div class="card-body text-center">
                <div class="box-image mb-3 has-gold-glow" data-aos="fade-left" data-aos-delay="100">
                  <img src="/assets/images/backham-dream@4x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-gallery" class="section bg-dark">
      <div class="text-center is-relative mb-5">
        <img src="/assets/images/backham-dream-galerry@4x.png" />
        <div class="section-gallery-image box-image p-5">
          <img class="on-shake" src="/assets/images/backham-dream@4x.png" />
        </div>
      </div>
      <div class="container">
        <div class="title text-center" data-aos="fade-down" data-aos-delay="100">
          <h2 class="text-white fw-bold m-0 ls-xs">JOIN $BECKS SPECIAL COMMUNITY.</h2>
          <h1 class="text-white fw-bold m-0 text-app-red ls-xs">$BECKS</h1>
          <h2 class="text-white fw-bold m-0 ls-xs">Together, we can change the game—for good</h2>
        </div>
      </div>
    </section>

    <section id="section-faq" class="section bg-transparent">
      <div class="container">
        <div class="col-12 col-lg-8 m-auto">
          <div class="title mb-4 text-center">
            <h2 class="text-dark text-capitalize ls-xs fw-bold m-0">FREQUENTLY ASKED</h2>
            <h2 class="text-dark text-capitalize ls-xs fw-bold m-0">QUESTIONS</h2>
          </div>
          <div class="accordion" id="accordionFaq">
            <div v-for="(faq, idfq) in faqList" :key="idfq"
              class="accordion-item mb-2 rounded-sm no-border bg-transparent rounded-md">
              <h2 class="accordion-header rounded-sm border-0" :id="`headingFaq${idfq}`">
                <button class="collapsed accordion-button rounded-sm border-0 text-dark fs-18px ls-xs py-3 fw-bold"
                  type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseFaq${idfq}`" aria-expanded="false"
                  :aria-controls="`collapseFaq${idfq}`">{{ faq.title }}</button>
              </h2>
              <div :id="`collapseFaq${idfq}`" class="accordion-collapse collapse" :aria-labelledby="`headingFaq${idfq}`"
                data-bs-parent="#accordionFaq">
                <div class="accordion-body text-dark fs-16px ls-xs pt-0" v-html="faq.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
