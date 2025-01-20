<script setup>
import { onMounted, ref, reactive } from 'vue'

onMounted(() => {

})
</script>

<template>
  <div class="section-content">
    <div class="particle right"></div>
    <section class="section bg-transparent first-section pb-2 mt-5">
      <div class="container section-title pb-4" style="left: 0!important;" data-aos="fade-right" data-aos-delay="100">
        <div class="col-12 col-lg-8 text-start">
          <h3 class="text-red text-capitalize ls-xs mt-4 fs-16px">Our Features</h3>
          <p class="text-light fw-normal fs-14px">
            Innovative AI Tools for Smarter, Safer, and Cost-Efficient Blockchain Solutions.
          </p>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 align-items-left">
          <div class="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100" style="border: 1px solid #6D6A6A;">
              <div class="card-body text-start p-4">
                <h6 class="text-white fs-20px" style="line-height: 30px;">AI Smart Contract Analyzer:</h6>
                <p class="text-light fw-light fs-14px m-0">
                  Advanced AI-driven vulnerability detection and smart contract optimization to ensure secure deployments.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-down" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100" style="border: 1px solid #6D6A6A;">
              <div class="card-body text-start p-4">
                <h6 class="text-white fs-20px" style="line-height: 30px;">Portfolio Management Intelligence</h6>
                <p class="text-light fw-light fs-14px m-0">
                  Predictive analytics for optimized asset allocation and intelligent rebalancing strategies.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-left" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100" style="border: 1px solid #6D6A6A;">
              <div class="card-body text-start p-4">
                <h6 class="text-white fs-20px" style="line-height: 30px;">Gas Optimization Toolkit:</h6>
                <p class="text-light fw-light fs-14px m-0">
                  Real-time fee analysis powered by machine learning to minimize transaction costs across the Solana ecosystem.
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
    <section class="section bg-transparent pb-2" data-aos="fade-left" data-aos-delay="100">
      <div class="container">
        <div class="row">
           <div class="col-12 col-lg-5">
            <img src="/assets/img/server.gif" alt="Image" />
          </div>

          <div class="col-12 col-lg-7">
            <div class="section-title pb-2 text-start mb-4">
              <h3 class="text-red text-capitalize ls-xs mt-4 fs-16px">Our Features</h3>
              <p class="text-light fw-normal fs-14px">
                Innovative AI Tools for Smarter, Safer, and Cost-Efficient Blockchain Solutions.
              </p>           
            </div>
            <div class="col-lg-10">
              <div class="d-flex align-items-start gap-3 mb-2">
                <i class="bi bi-check-circle-fill fs-24px lh-normal text-red"></i>
                <p class="text-light fw-normal fs-16px m-0 ls-xs">
                  Decentralized Protocol Governance: Community-driven decision-making for the protocol’s evolution.
                </p>
              </div>
              <div class="d-flex align-items-start gap-3 mb-2">
                <i class="bi bi-check-circle-fill fs-24px lh-normal text-red"></i>
                <p class="text-light fw-normal fs-16px m-0 ls-xs">
                  AI-Optimized Yield Strategies: AI-enhanced investment strategies for maximizing returns while managing risk.
                </p>
              </div>
              <div class="d-flex align-items-start gap-3 mb-2">
                <i class="bi bi-check-circle-fill fs-24px lh-normal text-red"></i>
                <p class="text-light fw-normal fs-16px m-0 ls-xs">
                  Zero-Trust Security Architecture: Advanced security frameworks ensuring transaction integrity and data protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
