<script setup>
import { onMounted, ref, reactive } from 'vue'

onMounted(() => {

})
</script>

<template>
  <div class="section-content">
    <section class="section bg-transparent first-section pb-2">
      <div class="container section-title pb-4">
        <div class="col-12 col-lg-8 m-auto">
          <h3 class="text-white text-capitalize ls-xs">Core Features</h3>
          <p class="text-light fw-normal fs-14px">Discover how Codura transforms your daily tasks with intelligent
            assistance</p>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-center">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-center p-4">
                <h6 class="text-white">AI-Powered Code Review</h6>
                <p class="text-light fw-normal fs-13px m-0">Automated detection of security risks and inefficiencies.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-center p-4">
                <h6 class="text-white">Gas Optimization</h6>
                <p class="text-light fw-normal fs-13px m-0">Identifies gas-heavy patterns and suggests cost-saving
                  alternatives.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-center p-4">
                <h6 class="text-white">Security Enhancement</h6>
                <p class="text-light fw-normal fs-13px m-0">Detects vulnerabilities like reentrancy and overflow issues.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-center p-4">
                <h6 class="text-white">Decentralized Infrastructure</h6>
                <p class="text-light fw-normal fs-13px m-0">Operates on a distributed node network for unbiased results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-transparent pb-2" data-aos="fade-up" data-aos-delay="100">
      <div class="container section-title pb-2 text-start">
        <h3 class="text-white text-capitalize ls-xs">Who is this for?</h3>
      </div>
      <div class="container">
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Developers</strong>: Enhance smart contract security
            and gas efficiency.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>DeFi Projects</strong>: Optimize complex DeFi
            protocols to minimize costs.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>DAOs</strong>: Automate code reviews and reduce risk
            exposure.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Auditors</strong>: Leverage AI for faster, reliable
            code assessments.</p>
        </div>
      </div>
    </section>
    <section class="section bg-transparent" data-aos="fade-up" data-aos-delay="100">
      <div class="container section-title pb-2 text-start">
        <h3 class="text-white text-capitalize ls-xs">Quickstart</h3>
      </div>
      <div class="container">
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Connect Your Wallet</strong>: Authenticate using a
            Web3 wallet.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Upload Your Smart Contract</strong>: Paste or upload
            your Solidity code.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Run the Optimization Scan</strong>: Let the AI
            analyze the code.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Review Recommendations</strong>: Implement suggested
            code refinements.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Export and Deploy</strong>: Deploy your optimized
            contract confidently.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
