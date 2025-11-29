<script setup lang="ts">
import Header from "@/components/Header.vue";
import headerImage from "@/assets/images/Profile.png"
import Skills from "@/components/Skills.vue";
import Experience from "@/components/Experience.vue";
</script>

<template>
  <main ref="el">
    <div class="h-screen flex flex-col justify-between">
      <Header subtitle="I'm Nate" title="Hi there!" :imageUrl="headerImage"
              imageText="@natereprogle"></Header>
    </div>
    <div class="space-y-14 mt-8 mx-7 lg:mx-20">
      <h1
        class="subheader text-[1.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-medium">I
        am a <span class="highlight-blue">Software Engineer</span> based in <span
          class="highlight-orange">Arkansas</span>. I've carried
        many titles over my career, with
        <span class="highlight-green">skills including</span> management, logistics, & excellent
        customer service.</h1>
      <hr class="text-raisinblack-400 bg-raisinblack-400 h-[2px]"/>
      <div class="block pb-10 lg:flex lg:justify-between">
        <h2
          class="subheader text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.3rem] font-medium">
          About me</h2>
        <p class="leading-7 lg:w-1/2 header">I excel in fast-paced customer focused environments
          where
          service is the main goal. While many say they&apos;re good
          at multitasking, I pride myself in being able to handle
          multiple tasks efficiently <em>and</em> accurately. I&apos;m
          also very passionate about driving positive change in the
          workforce as well as the world we live in. <br/>
          <br/>I started working in the food industry while going to
          college full time. After 3 years, I moved full-time to
          transportation and logistics while continuing my studies.
          Within 6 months, and not much experience to my name, I moved
          into a management position where I exceeded even my own
          expectations. After graduating, I moved into IT on J.B. Hunt's
          Unified Communications Engineering team.<br/>
          <br/>
          In November 2025, I felt called to step into the nonprofit sector
          and joined Restore Hope, Inc., a 501(c)(3) based here in Arkansas.
          Working in this field has been incredibly rewarding, giving me the
          opportunity to build meaningful solutions that directly support people,
          families, and communities in need.</p>
      </div>
      <div>
        <div class="block lg:flex lg:justify-between">
          <Skills></Skills>
          <Experience></Experience>
        </div>
      </div>
    </div>
  </main>
</template>
