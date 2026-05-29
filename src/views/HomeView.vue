<script setup lang="ts">
import Header from "@/components/HeaderComponent.vue";
import headerImage from "@/assets/images/Profile.png";
import SkillsComponent from "@/components/SkillsComponent.vue";
import ExperienceComponent from "@/components/ExperienceComponent.vue";
</script>

<template>
  <main ref="el">
    <div class="h-screen flex flex-col justify-between">
      <Header
        subtitle="I'm Nate"
        title="Hi there!"
        :imageUrl="headerImage"
        imageText="@natereprogle"
      ></Header>
    </div>
    <div class="space-y-14 mt-8 mx-7 lg:mx-20">
      <h1
        class="subheader text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-medium"
      >
        I am a <span class="highlight-blue">Software Engineer</span> based in
        <span class="highlight-orange">Arkansas</span>. Whether it's building web applications,
        designing APIs, or automating workflows, I enjoy turning complex problems into simple,
        reliable solutions through <span class="highlight-green">thoughtful engineering</span>.
      </h1>
      <div class="neo-divider"></div>
      <div class="block pb-10 lg:flex lg:justify-between lg:items-start lg:gap-12">
        <h2
          class="subheader text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.3rem] font-medium lg:sticky lg:top-28"
        >
          About me
        </h2>
        <div class="neo-card p-6 md:p-8 lg:w-1/2 dark:text-white">
          <p class="leading-7 header">
            I enjoy solving complex problems, building reliable software, and creating systems that
            make people&apos;s lives easier. Throughout my career, I&apos;ve worked in customer
            service, transportation and logistics, IT, and software engineering, giving me a unique
            perspective on how technology can support both organizations and the people they serve.
            <br />
            <br />
            My professional journey began while attending college full-time, where I worked in the
            food service industry before transitioning into transportation and logistics. Early
            opportunities to lead teams and improve operations helped shape my approach to
            problem-solving, collaboration, and continuous improvement.
            <br />
            <br />
            After graduating, I moved into technology and software development, where I&apos;ve
            focused on designing, building, and maintaining applications, integrations, and internal
            platforms. I&apos;ve had the opportunity to work across the full software development
            lifecycle, from architecture and implementation to support and ongoing improvement.
            <br />
            <br />
            In November 2025, I joined Restore Hope, a 501(c)(3) organization based in Arkansas.
            Today, I help develop technology that supports programs serving individuals and families
            throughout our communities. It&apos;s rewarding work that combines my passion for
            software engineering with the opportunity to contribute to a mission that creates
            meaningful, lasting impact. There&apos;s no better feeling than knowing the work I do
            every day helps make a difference in people&apos;s lives!
          </p>
        </div>
      </div>
      <div class="neo-divider"></div>
      <div>
        <div class="block lg:flex lg:justify-between lg:gap-12">
          <SkillsComponent></SkillsComponent>
          <ExperienceComponent></ExperienceComponent>
        </div>
      </div>
    </div>
  </main>
</template>
