<script setup>
import { onMounted, ref, reactive } from 'vue'

onMounted(() => {

})
</script>

<template>
  <div class="section-content">
    <div class="particle right"></div>
    <section class="section bg-transparent first-section pb-2 mt-5" data-aos="fade-down" data-aos-delay="100">
      <div class="container px-4 px-md-3">
        <div
          class="row gy-1 justify-content-between align-items-left px-4"
          style="border: 1px solid #6D6A6A; border-radius: 16px; margin-top: 5px;"
          data-aos="fade-up"
          data-aos-delay="100"
        >          
          <div class="col-lg-7">
            <h3 class="text-red text-capitalize ls-xs mt-4 fs-16px">About Us</h3>
            <h5 class="text-white mb-5">AI-Powered DeFi Intelligence on the Solana Blockchain</h5>
            <p class="text-light fw-normal fs-16px">Quantis Node redefines decentralized finance by integrating state-of-the-art 
              AI models with the Solana blockchain, creating an intelligent node for enhanced financial decision-making. 
              Our platform empowers users with real-time, data-driven insights and advanced automation tools, optimizing security and efficiency in the DeFi landscape.
            </p>
          </div>
          <div class="col-lg-4">
            <img src="../../../public/assets/img/cube.gif" style="height:325px;width: auto;" />
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-transparent first-section" data-aos="fade-down" data-aos-delay="100">
      <div class="container section-title pb-4">
        <div class="col-12 col-lg-8 m-auto">
          <p class="text-red text-capitalize ls-xs fs-16px" style="line-height: 40px;">Vision & Mission</p>
          <h5 class="text-light fw-normal fs-20px" style="line-height: 30px;">
            Driving Financial Freedom with AI and Blockchain Innovation.
          </h5>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-center">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div class="card rounded-sm about-card h-100">
              <div class="card-body text-center p-4 fs-20px" style="text-align: justify!important;">
                <div class="d-flex align-items-start gap-3 mb-2">
                  <i class="bi bi-check-circle-fill fs-16px lh-normal text-red"></i>
                  <h6 class="text-white"><strong>Vission:</strong>
                    <span class="text-light fw-normal fs-16px m-0">
                      To empower global financial autonomy through secure, 
                      transparent, and intelligent decentralized finance powered by AI automation                  </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div class="card rounded-sm about-card h-100">
              <div class="card-body text-center p-4" style="text-align: justify!important;">
                <div class="d-flex align-items-start gap-3 mb-2">
                  <i class="bi bi-check-circle-fill fs-16px lh-normal text-red"></i>
                  <h6 class="text-white"><strong>Mission:</strong>
                    <span class="text-light fw-normal fs-16px m-0">
                      To advance financial sovereignty and democratize access to secure, 
                      AI-enhanced financial tools through innovative blockchain solutions.
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
