<script setup>
import { onMounted, ref, reactive } from 'vue'

onMounted(() => {

})
</script>

<template>
  <section class="section bg-transparent first-section">
    <div class="container section-title">
      <div class="col-12 col-lg-8 m-auto">
        <h3 class="text-white text-capitalize ls-xs">Core Features</h3>
        <p class="text-light fw-normal fs-14px">Fortivault’s cutting-edge AI scans your smart contracts for
          vulnerabilities, ensuring airtight security. Our real-time analysis helps prevent exploits and keeps your
          assets safe</p>
      </div>
    </div>
    <div class="container">
      <div class="col-12 col-lg-10 m-auto">
        <div class="row gy-4 justify-content-center">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-start">
                <div class="feature-icon mb-4">
                  <img src="/assets/img/chart.png"/>
                </div>
                <h6 class="text-white">Smart Contract Scanning & Analysis</h6>
                <p class="text-light fw-normal fs-13px m-0">AI-powered scanning to detect vulnerabilities like reentrancy attacks, integer overflows, and unchecked calls.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-start">
                <div class="feature-icon mb-4">
                  <img src="/assets/img/security.png"/>
                </div>
                <h6 class="text-white">Security Scoring System</h6>
                <p class="text-light fw-normal fs-13px m-0">Assigns a security score based on risk factors and code quality</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-start">
                <div class="feature-icon mb-4">
                  <img src="/assets/img/presention-chart.png"/>
                </div>
                <h6 class="text-white">Real-Time Threat Detection</h6>
                <p class="text-light fw-normal fs-13px m-0">Monitors live contracts and alerts for potential threats</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-start">
                <div class="feature-icon mb-4">
                  <img src="/assets/img/lamp-charge.png"/>
                </div>
                <h6 class="text-white">Educational Insights</h6>
                <p class="text-light fw-normal fs-13px m-0">Provides fix suggestions and educates developers on smart contract best practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
