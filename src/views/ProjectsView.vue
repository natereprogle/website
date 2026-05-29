<script setup lang="ts">
import Header from "@/components/HeaderComponent.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import headerImage from "@/assets/images/Profile.png";

// Placeholder images — replace with screenshots of each project.
import websitePreview from "@/assets/images/Profile.png";
import r4everyonePreview from "@/assets/images/r4everyone.png";
import chyrpPreview from "@/assets/images/chyrp.png";

type Color = "blue" | "orange" | "green" | "raisin";

type Project = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  highlightColor: Color;
};

const projects: Project[] = [
  {
    title: "This Website",
    description:
      "A neo-brutalist personal résumé and project showcase built with Vue 3 and Tailwind CSS and deployed with Cloudflare Pages. This project was a fun opportunity to experiment with design styles I'm not used to using while also creating a place to share my work and experience with the world.",
    image: websitePreview,
    link: "https://github.com/natereprogle/website",
    highlightColor: "blue",
  },
  {
    title: "R4Everyone",
    description:
      "An experiment in reverse-engineering esoteric file formats long-since lost to time, R4Everyone is a modern, web-based replacement for r4cce and allows users to view, edit, and create R4 cheat databases for the Nintendo DS and supported emulators. Built with .NET 10 and Blazor, R4Everyone is able to maintain near-native performance thanks to Blazor WebAssembly, can be installed offline as a PWA, and is accessible on nearly any device with a web browser (Linux, macOS, iPadOS, even ChromeOS!)",
    image: r4everyonePreview,
    link: "https://github.com/natereprogle/R4Everyone",
    highlightColor: "orange",
  },
  {
    title: "ddev-datagrip",
    description:
      "A DDEV Add-On that allows developers to connect to their DDEV-managed databases using JetBrains DataGrip. This was a fun project that allowed me to directly solve a problem I had as a developer, and in doing so I was able to contribute to the ddev ecosystem and help other developers who might also use DataGrip.",
    highlightColor: "green",
    link: "https://github.com/natereprogle/ddev-datagrip",
  },
  {
    title: "Chyrp",
    description:
      "A lightweight toast library written in pure JavaScript. Chyrp was a weekend project that allowed me to experiment with building a library from the ground up, including designing an API, writing documentation, and creating a demo page to showcase its features.",
    highlightColor: "raisin",
    image: chyrpPreview,
    link: "https://natereprogle.github.io/chyrp/",
  },
  {
    title: "vscode-silverstripe-languagetools",
    description:
      "My first project written entirely with the use of agentic programming, this is a Visual Studio Code extension that provides language support for SilverStripe templates (*.ss) without sacrificing developer experience. Features include syntax highlighting, IntelliSense for SilverStripe template syntax, jump-to-definition, and full HTML, CSS, and JS language support.",
    highlightColor: "blue",
    link: "https://github.com/natereprogle/vscode-silverstripe-languagetools",
  },
];
</script>

<template>
  <main>
    <Header
      subtitle="Projects"
      title="Things I've built"
      :imageUrl="headerImage"
      imageText="@natereprogle"
    />
    <div class="mx-7 lg:mx-20 mb-16">
      <h1
        class="subheader text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-medium"
      >
        Below is a list of some of the projects I'm most proud of. Some of them are
        <span class="highlight-blue">pretty nuanced</span>, some are
        <span class="highlight-orange">quite useful</span>, and some
        <span class="highlight-green">just exist</span> to exist. All of them were fun to build and
        represent different personal interests and skills as a software engineer!
      </h1>
      <div class="my-12 neo-divider"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :link="project.link"
          :highlight-color="project.highlightColor"
        />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
