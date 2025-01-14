<script setup>
import { onMounted, ref, reactive } from 'vue'

onMounted(() => {

})
</script>

<template>
  <div class="section-content">
    <section class="section bg-transparent first-section pb-2">
      <div class="container section-title pb-4 text-start">
        <h3 class="text-white text-capitalize ls-xs">About Us</h3>
        <p class="text-light fw-normal fs-14px">The AI Smart Contract Code Optimizer is a decentralized, AI-powered
          platform engineered to empower developers by enhancing the security, efficiency, and optimization of smart
          contracts. By meticulously analyzing Solidity code, it identifies vulnerabilities, inefficiencies, and
          excessive gas-consuming operations while delivering precise recommendations for enhanced performance and
          security on the blockchain.</p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3">
            <div class="d-flex align-items-start gap-3 mb-2">
              <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
              <p class="text-light fw-normal fs-14px m-0 ls-xs">Code Submission</p>
            </div>
          </div>
          <div class="col-12 col-lg-9">
            <div class="d-flex align-items-start gap-3 mb-2">
              <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
              <p class="text-light fw-normal fs-14px m-0 ls-xs">Optimization Insights</p>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <div class="d-flex align-items-start gap-3 mb-2">
              <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
              <p class="text-light fw-normal fs-14px m-0 ls-xs">AI-Powered Analysis</p>
            </div>
          </div>
          <div class="col-12 col-lg-9">
            <div class="d-flex align-items-start gap-3 mb-2">
              <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
              <p class="text-light fw-normal fs-14px m-0 ls-xs">Decentralized Review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-transparent pb-0">
      <div class="container section-title pb-2 text-start">
        <h3 class="text-white text-capitalize ls-xs">Codura Workflow</h3>
      </div>
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-12 col-lg-7">
            <div class="d-flex align-items-start gap-3 mb-3">
              <span class="badge bg-green fw-300">1</span>
              <p class="text-light fw-normal fs-14px m-0 ls-xs">A developer uploads a Solidity smart contract for an
                ERC-20
                token.</p>
            </div>
            <div class="d-flex align-items-start gap-3 mb-3">
              <span class="badge bg-green fw-300">2</span>
              <p class="text-light fw-normal fs-14px m-0 ls-xs">The AI detects inefficient loops contributing to
                elevated
                gas fees and a critical reentrancy vulnerability.</p>
            </div>
            <div class="d-flex align-items-start gap-3 mb-3">
              <span class="badge bg-green fw-300">3</span>
              <p class="text-light fw-normal fs-14px m-0 ls-xs">Optimization suggestions are presented, advocating for
                the
                replacement of loops with mappings and the adoption of the checks-effects-interactions pattern.</p>
            </div>
            <div class="d-flex align-items-start gap-3 mb-3">
              <span class="badge bg-green fw-300">4</span>
              <p class="text-light fw-normal fs-14px m-0 ls-xs">The developer incorporates the refinements and
                reinitiates
                the analysis for confirmation.</p>
            </div>
            <div class="d-flex align-items-start gap-3 mb-3">
              <span class="badge bg-green fw-300">5</span>
              <p class="text-light fw-normal fs-14px m-0 ls-xs">The enhanced contract is finalized and primed for secure
                blockchain deployment with improved cost-efficiency</p>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="workflow-img">
                <img src="/assets/img/workflow.png"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-transparent">
      <div class="container section-title pb-2 text-start">
        <h3 class="text-white text-capitalize ls-xs">Why We Stand Out?</h3>
      </div>
      <div class="container">
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Decentralized Integrity</strong>: Operates on a
            distributed node network, ensuring impartial and transparent evaluations.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Gas Optimization Excellence</strong>: Pinpoints and
            resolves excessive gas consumption with strategic modifications.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Security-Centric</strong>: Identifies critical
            vulnerabilities, including reentrancy threats, integer overflow, and unchecked calls.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Tokenized Premium Access</strong>: Unlock advanced
            analytical tools and deeper insights through token staking mechanisms.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Developer-Centric Design</strong>: Real-time,
            actionable code suggestions and peer validation enhance reliability and user confidence.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
