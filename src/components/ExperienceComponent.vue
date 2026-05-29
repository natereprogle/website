<script setup lang="ts">
import ExperienceBlock from "@/components/ExperienceBlock.vue";
type Experience = {
  timeRange: string;
  company: string;
  title: string;
  description: string;
  highlightColor: "blue" | "orange" | "green" | "raisin";
};
const experiences: Experience[] = [
  {
    timeRange: "November 2025 - Present",
    company: "Restore Hope, Inc.",
    title: "Software Engineer",
    description:
      "Full-stack Developer at Restore Hope working on HopeHub, a collaborative platform designed to enhance the effectiveness of service providers, government agencies, and non-profits specializing in different areas of care.",
    highlightColor: "blue",
  },
  {
    timeRange: "January 2023 - November 2025",
    company: "J.B. Hunt Transport, Inc.",
    title: "Software Engineer I",
    description:
      "Working with Microsoft Teams Voice and Genesys Cloud, I worked with my team to create APIs to bridge the gap between our cloud services and on-prem systems. Duties also included maintaining legacy Genesys Engage On-Prem systems as well as creating and maintaining reporting for business intelligence purposes.",
    highlightColor: "orange",
  },
  {
    timeRange: "July 2021 - January 2023",
    company: "J.B. Hunt Transport, Inc.",
    title: "Contact Center Specialist",
    description:
      "Worked with business leaders to design and maintain complex, enterprise-wide Contact Center routing solutions. Worked with leading edge CC technologies to ensure the needs and expectations of both the business and our customers are not only met, but also exceeded.",
    highlightColor: "green",
  },
  {
    timeRange: "December 2019 - July 2021",
    company: "J.B. Hunt Transport, Inc.",
    title: "Transportation Manager",
    description:
      "Managed a fleet of approx. 30 drivers. Dispatched, managed pay, and discussed safety with the fleet. Ensured drivers were DOT compliant and following FMCSA regulations. Handled other duties as assigned.",
    highlightColor: "raisin",
  },
];
</script>

<template>
  <div class="lg:w-1/2" id="experience">
    <h2 class="subheader mb-6 font-heading text-2xl font-bold md:text-3xl xl:text-4xl">
      My Experience
    </h2>
    <ExperienceBlock
      v-for="(experience, index) in experiences"
      :key="index"
      v-bind="experience"
      :timeRange="experience.timeRange"
      :company="experience.company"
      :title="experience.title"
      :description="experience.description"
      :highlightColor="experience.highlightColor"
    />
  </div>
</template>

<style scoped></style>
